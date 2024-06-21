<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;
use App\Http\Requests\EmpresaSubmitRequest;
use App\Models\SiteCompany;
use App\Models\SiteCompanyDescription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\HasSingleFileUpload;
use Exception;

class EmpresasController extends CmsController
{

  use HasSingleFileUpload;

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Empresas';
    $this->moduleTitle = 'Empresas';
    $this->model = new SiteCompany;

    $this->imageWidth = 600;
    $this->imageHeight = 400;

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
      ->orderBy('order_by', 'ASC');

    $table = [
      'primaryKey' => 'id',
      'registers'  => $registers->paginate($this->perPage),
      'columns'    => [

        [
          'name'   => __('Imagem'),
          'column' => function ($register) {
            return url_add_path('storage/empresas/', $register->image);
          },
          'type'   => 'image'
        ],
        [
          'name'   => __('Título'),
          'column' => 'descr.title',
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

    return view('cms.empresas.index', compact('table'));
  }

  public function create(Request $request)
  {
    return view('cms.empresas.form');
  }

  public function edit(string $uuid)
  {
    $item = $this->model->with(['descriptions'])->findOrFail($uuid);
    return view("cms.empresas.form", ["register" => $item, "uuid" => $uuid]);
  }

  public function update(EmpresaSubmitRequest $request, string $uuid)
  {
    return $this->save($request, $uuid);
  }

  public function store(EmpresaSubmitRequest $request)
  {
    return $this->save($request);
  }

  public function save(Request $request, $uuid = false)
  {
    $input = $request->validated();

    try {

      DB::transaction(function () use ($input, $request, $uuid) {
        $model = $this->model->findOrNew($uuid);

        $data = [
          'company_id' => $this->company->id,
          'order_by'   => (int) $input['order_by'],
          'status'     => $input['status'] ?? 0,
        ];

        // Faz upload da imagem, se necessário
        if ($upload = $this->checkThenUpload(
          $request,
          'image',
          $model->image ?? null
        )) {
          $data['image'] = $upload;
        }

        $model->forceFill($data);
        $model->save();

        foreach ($input['languages'] as $langId => $lang) {
          $data = [
            'title' => $lang['title'],
            'link'  => $lang['link'],
          ];

          $description = new SiteCompanyDescription;
          $description->unguarded(function () use ($description, $data, $model, $langId) {
            $description->updateOrCreate([
              'company_id'  => $model->id,
              'language_id' => $langId,
            ], $data);
          });
        }
      });

      return redirect()
        ->route($this->route . '.index')
        ->with('message', ($uuid != false) ? __('Empresa atualizada!') : __('Empresa adicionada!'));
    } catch (\Exception $e) {
      return redirect()
        ->back()
        ->withInput()
        ->with(['message' => $e->getMessage(), 'type' => 'warning']);
    }
  }

  public function destroy(string $uuid)
  {
    $register = $this->model->findOrFail($uuid);
    if ($register->image) {
      $deleted = $this->deleteFile($register->image);
      if ($deleted === false)
        return redirect()->back()
          ->withInput()
          ->with(['message' => __('Falhou ao remover o arquivo'), 'type' => 'warning']);
    }

    $register->delete();

    return redirect()
      ->route($this->route . '.index')
      ->with('message', __('Empresa removida com sucesso!'));
  }
}
