<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\BannerSubmitRequest;
use App\Models\SiteBanner;
use App\Models\SiteBannerDescription;
use App\Traits\HasSingleFileUpload;
use Exception;

class BannersController extends CmsController
{
  use HasSingleFileUpload;

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Banners';
    $this->moduleTitle = 'Banners';
    $this->model = new SiteBanner;
    $this->imageWidth = 1980;
    $this->imageHeight = 984;
    parent::__construct();
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $user = $request->user();

    $registers = $this->model->where('company_id', $this->company->id)
      ->with('descriptions')
      ->orderBy('created_at', 'ASC');

    $table = [
      'primaryKey' => 'id',
      'registers'  => $registers->paginate($this->perPage),
      'columns'    => [
        [
          'name'   => __('Imagem'),
          'column' => function ($register) {
            return url_add_path('storage/banners/', $register->normalized_image);
          },
          'type'   => 'image',
          'size'   => 200
        ],
        [
          'name'   => __('Título'),
          'column' => 'descr.full_title',
          'type'   => 'text',
        ],
        [
          'name'   => __('Ordem'),
          'column' => 'order_by',
          'type'   => 'text',
        ],
        [
          'name'   => 'Status',
          'type'   => 'status',
          'column'   => 'status',
        ],
      ],
      'actions' => [
        [
          'type'  => 'link',
          'name'  => __('Editar'),
          'icon'  => 'bx bx-edit',
          'route' => $this->route . '.edit',
          'rules' => [
            'can' => 'update'
          ]
        ],
        [
          'type'  => 'delete',
          'name'  => __('Remover'),
          'icon'  => 'bx bx-trash',
          'route' => $this->route . '.destroy',
          'rules' => [
            'can' => 'delete'
          ]
        ]
      ]
    ];

    return view('cms.banners.index', compact('table'));
  }


  public function create(Request $request)
  {
    $data = [
      'types' => [
        ['id' => 'image', 'title' => __('Imagem')],
        ['id' => 'video', 'title' => __('Vídeo')],
      ],
      'targets' => [
        ['id' => '_self', 'title' => __('Mesma Janela')],
        ['id' => '_blank', 'title' => __('Nova Janela')],
      ],
      'image_dim' => $this->imageWidth . 'x' . $this->imageHeight
    ];

    return view('cms.banners.form', $data);
  }


  public function edit(string $uuid)
  {
    $data = [
      'uuid' => $uuid,
      'register' => $this->model->where('company_id', $this->company->id)
        ->with('descriptions')
        ->findOrFail($uuid),
      'types' => [
        ['id' => 'image', 'title' => __('Imagem')],
        ['id' => 'video', 'title' => __('Vídeo')],
      ],
      'targets' => [
        ['id' => '_self', 'title' => __('Mesma Janela')],
        ['id' => '_blank', 'title' => __('Nova Janela')],
      ],
      'image_dim' => $this->imageWidth . 'x' . $this->imageHeight
    ];

    return view("cms.banners.form", $data);
  }

  public function update(BannerSubmitRequest $request, string $uuid)
  {
    return $this->save($request, $uuid);
  }

  public function store(BannerSubmitRequest $request)
  {
    return $this->save($request);
  }

  private function save(Request $request, ?string $uuid = null)
  {
    $input = $request->validated();

    try {
      DB::transaction(function () use ($input, $request, $uuid) {
        $model = $this->model->findOrNew($uuid);

        $model->forceFill([
          'company_id' => $this->company->id,
          'order_by'   => (int) $input['ordem'],
          'status'     => $input['status'] ?? 0,
        ]);

        $model->save();
        foreach ($input['languages'] as $langId => $lang) {

          $data = [
            'title'    => $lang['title'],
            'subtitle' => $lang['subtitle'],
            'text'     => $lang['text'],
            'link'     => $lang['link'],
            'target'   => $lang['target'] ?? '_self',
            'type'     => $input['type'] ?? 'image',
            'label'    => $lang['label'],
            'youtube'  => $lang['youtube'] ?? null,
          ];

          // Faz upload da imagem, se necessário
          if ($upload = $this->checkThenUpload(
            $request,
            'languages.' . $langId . '.image',
            $model->description[$langId]->image ?? null
          )) {
            $data['image'] = $upload;
          }

          // Faz upload do video, se necessário
          if ($upload = $this->checkThenUpload(
            $request,
            'languages.' . $langId . '.video',
            $model->description[$langId]->video ?? null
          )) {
            $data['video'] = $upload;
          }

          $description = new SiteBannerDescription;
          $description->unguarded(function () use ($description, $data, $model, $langId) {
            $description->updateOrCreate([
              'banner_id'   => $model->id,
              'language_id' => $langId,
            ], $data);
          });
        }
      });

      return redirect()
        ->route($this->route . '.index')
        ->with('message', ($uuid != false) ? __('Banner atualizado!') : __('Banner adicionado!'));
    } catch (Exception $e) {
      return redirect()
        ->back()
        ->withInput()
        ->with(['message' => $e->getMessage(), 'type' => 'warning']);
    }
  }

  public function destroy(string $uuid)
  {
    $register = $this->model->with('descriptions')->findOrFail($uuid);
    foreach ($register->descriptions as $description) {
      $deleted = $this->deleteFile($description->image);
      if ($deleted === false)
        return redirect()->back()
          ->withInput()
          ->with(['message' => __('Falhou ao remover o arquivo'), 'type' => 'warning']);
    }

    $register->delete();

    return redirect()
      ->route($this->route . '.index')
      ->with('message', __('Banner removido com sucesso!'));
  }
}
