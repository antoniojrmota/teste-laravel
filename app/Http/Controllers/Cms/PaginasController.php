<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;
use App\Http\Requests\PaginasStoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\SiteCommonContent;
use App\Models\SiteCommonContentDescription;
use App\Traits\HasSingleFileUpload;
use Exception;

class PaginasController extends CmsController
{
  use HasSingleFileUpload;

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Páginas';
    $this->moduleTitle = 'Páginas';
    $this->model = new SiteCommonContent;

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
      ->with([
        'descriptions' => function ($query) {
          $query->orderBy('area')
            ->orderBy('subarea');
        }
      ]);

    $this->applyFilters($request, $registers);

    $table = [
      'filters'    => $this->getFilters(),
      'primaryKey' => 'id',
      'registers'  => $registers->paginate($this->perPage),
      'columns'    => [
        [
          'name'   => __('Área'),
          'column' => 'descr.area',
          'type'   => 'text',
        ],
        [
          'name'   => __('Subárea'),
          'column' => 'descr.subarea',
          'type'   => 'text',
        ],
        [
          'name'   => __('Subárea'),
          'column' => 'descr.title',
          'type'   => 'text',
        ],
        [
          'name'   => __('Slug'),
          'column' => 'slug',
          'type'   => 'text',
        ],
        [
          'name'   => '',
          'type'   => 'status',
          'column' => 'status',
        ]
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
        // [
        //   'type'  => 'link',
        //   'name'  => __('Permissões'),
        //   'icon'  => 'bx bx-cog',
        //   'route' => $this->route . '.edit',
        // ],
        [
          'type'  => 'delete',
          'name'  => __('Remover'),
          'icon'  => 'bx bx-trash',
          'route' => $this->route . '.destroy',
          'rules' => function ($reg) {
            return !$reg->protect;
          }
        ]
      ]
    ];

    return view('cms.paginas.index', compact('table'));
  }

  public function create(Request $request)
  {
    return view('cms.paginas.form');
  }


  public function edit(string $uuid)
  {
    $data = [
      'uuid'     => $uuid,
      'register' => $this->model->where('company_id', $this->company->id)
        ->with('descriptions')
        ->findOrFail($uuid)
    ];

    return view("cms.paginas.form", $data);
  }

  public function update(PaginasStoreRequest $request, string $uuid)
  {
    return $this->save($request, $uuid);
  }

  public function store(PaginasStoreRequest $request)
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
          'company_id'   => $this->company->id,
          'slug'         => Str::slug($input['slug']),
          'image_width'  => $input['image_width'],
          'image_height' => $input['image_height'],
          'status'       => $input['status'] ?? 0,
          //'protect' => $input['protect'] ?? 0
        ]);
        $model->save();

        // Ajusta o upload das imagens de acordo
        $this->imageWidth = $input['image_width'];
        $this->imageHeight = $input['image_height'];

        foreach ($input['languages'] as $langId => $lang) {

          $data = [
            'title'             => strip_tags(html_entity_decode(htmlspecialchars_decode($lang['title']))),
            'subtitle'          => strip_tags(html_entity_decode(htmlspecialchars_decode($lang['subtitle']))),
            'text'              => $lang['text'],
            'area'              => $input['area'], //TODO: Subir para a tabela principal
            'subarea'           => $input['subarea'], //TODO: Subir para a tabela principal
            'text'              => $lang['text'],
            'link'              => $lang['link'],
            'link_label'        => $lang['link_label'],
            'youtube_id'        => $lang['youtube_id']
          ];

          // Faz upload do arquivo, se necessário
          if ($upload = $this->checkThenUpload(
            $request,
            'languages.' . $langId . '.archive',
            $model->description[$langId]->archive ?? null
          )) {
            $data['archive'] = $upload;
          }

          // Faz upload da imagem, se necessário
          if ($upload = $this->checkThenUpload(
            $request,
            'languages.' . $langId . '.image',
            $model->description[$langId]->image ?? null
          )) {
            $data['image'] = $upload;
          }

          $description = new SiteCommonContentDescription;
          $description->unguarded(function () use ($description, $data, $model, $langId) {
            $description->updateOrCreate([
              'common_content_id' => $model->id,
              'language_id'       => $langId,
            ], $data);
          });
        }
      });

      return redirect()
        ->route($this->route . '.index')
        ->with('message', ($uuid != false) ? __('Página atualizada!') : __('Página adicionada!'));
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
          ->with(['message' => __('Falhou ao remover a imagem'), 'type' => 'warning']);

      $deleted = $this->deleteFile($description->archive);
      if ($deleted === false)
        return redirect()->back()
          ->withInput()
          ->with(['message' => __('Falhou ao remover o arquivo'), 'type' => 'warning']);
    }

    $register->delete();

    return redirect()
      ->route($this->route . '.index')
      ->with('message', __('Registro removido com sucesso!'));
  }


  protected function getFilters(...$params)
  {
    $request = request()->only('search');
    return [
      'route'  => url()->current(),
      'route_name' => $this->route,
      'fields' => [
        [
          'type'        => 'text',
          'name'        => 'search[area]',
          'placeholder' => __('Área'),
          'value'       => data_get($request, 'search.area'),
        ],
        [
          'type'        => 'text',
          //'class'       => 'daterange',
          'name'        => 'search[subarea]',
          'placeholder' => __('Sub Área'),
          'value'       => data_get($request, 'search.subarea'),
        ],
        [
          'type'        => 'text',
          'name'        => 'search[slug]',
          'placeholder' => __('Slug'),
          'value'       => data_get($request, 'search.slug'),
        ]
      ]
    ];
  }

  /**
   * Aplica o filtro básico
   *
   * @param Request $request
   * @param Model $model
   * @return void
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  protected function applyFilters(Request $request, $model)
  {
    $search = $request->input('search');
    if (!is_array($search))
      $search = null;

    if ($search) {
      // Páginação
      $search['perpage'] = (int) $request->input('search.perpage', $this->perPage);
      $this->perPage = $search['perpage'] <= 0 ? $this->perPage : $search['perpage'];

      // Filtro
      $model->whereHas('descriptions', function ($query) use ($search) {
        if (isset($search['area']))
          $query->where('area', 'like', '%' . $search['area'] . '%');
        if (isset($search['subarea']))
          $query->where('subarea', 'like', '%' . $search['subarea'] . '%');
      });

      if (isset($search['slug'])) {
        $model->where('slug', 'like', '%' . $search['slug'] . '%');
      }
    }
  }
}
