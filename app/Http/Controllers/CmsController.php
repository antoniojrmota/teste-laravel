<?php

namespace App\Http\Controllers;

use App\Models\EzCompany;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Route;

class CmsController extends BaseController
{
  /**
   * Nome do módulo na tabela permissões
   * @var string
   */
  protected $module;

  protected $model; // Nome do model
  protected $route; // Nome da rota
  protected $perPage = 25; // Limite paginação

  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  /**
   * Controla definições da rota, módulo e permissão básica de acesso se necessário
   *
   * @return void
   * @author Fábio Neis <fabio@ezoom.com.br>
   * @author Lucas Antonio <lucas.antonio@ezoom.com.br>
   */
  public function __construct()
  {

    $route = explode('.', Route::currentRouteName());
    array_pop($route);

    $this->route = implode('.', $route);

    if ($this->module)
      $this->middleware('permission:Visualizar ' . $this->module);

    // Buscar empresa
    $companyId = 1;
    $this->company = EzCompany::isActive()->with('descriptions')->find($companyId);

    // TODO: transformar isso num módulo?
    // Já existe tabela ez_modules, adaptar tabela para aceitar os itens abaixo
    $menu = [
      [
        'label'   => 'Banners',
        'icon'    => "bxs-megaphone",
        'link'    => route('cms.banners.index'),
        'request' => 'cms/banners*',
        'can'     => "Visualizar Banners"
      ],
      [
        'label'   => 'Empresas',
        'icon'    => "bx-group",
        'link'    => route('cms.empresas.index'),
        'request' => 'cms/empresas*',
        'can'     => "Visualizar Empresas"
      ],
      [
        'label' => 'Representantes',
        'icon' => "bx-support",
        'link' => route('cms.representantes.index'),
        'request' => 'cms/representantes*',
        'can' => "Visualizar Representantes"
      ],
      [
        'label'   => 'Páginas e Conteúdos',
        'icon'    => 'bx-spreadsheet',
        'link'    => route('cms.paginas.index'),
        'request' => 'cms/paginas*',
        'can'     => 'Visualizar Páginas'
      ],
      [
        'label'   => 'Newsletter',
        'icon'    => 'bx bxs-envelope',
        'link'    => route('cms.newsletter.index'),
        'request' => 'cms/newsletter*',
        'can'     => 'Visualizar Newsletter'
      ],
    ];

    view()->share([
      'module'      => $this->module,
      'moduleTitle' => $this->moduleTitle ?? null,
      'model'       => $this->model,
      'route'       => $this->route,
      'CMSMenu'     => $menu,
    ]);
  }

  /**
   * Chama o retorno da view já passando a rota inicial
   *
   * @param string $name
   * @param array $data
   * @return \Illuminate\Contracts\View\View
   * @author Lucas Antonio <lucas.antonio@ezoom.com.br>
   */
  protected function getView($name, $data = [])
  {
    return view($this->route . '.' . $name, $data);
  }

  /**
   * Configuração do filtro básico para a listagem
   *
   * ESTE MÉTODO NÃO DEVE SER ALTERADO, EXCETO SE FOR FUNCIONALIDADE PADRÃO
   * CASO NECESSITE ALTERAR, RECRIE ESTE MÉTODO NO SEU CONTROLLER
   *
   * @return array
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  protected function getFilters(...$params)
  {
    $request = request()->only(['search']);

    return [
      'route'      => url()->current(),
      'route_name' => $this->route,
      'fields'     => [
        [
          'type'        => 'text',
          'name'        => 'search[q]',
          'placeholder' => __('Buscar'),
          'value'       => data_get($request, 'search.q')
        ]
      ]
    ];
  }

  /**
   * Aplica o filtro básico
   *
   * ESTE MÉTODO NÃO DEVE SER ALTERADO, EXCETO SE FOR FUNCIONALIDADE PADRÃO
   * CASO NECESSITE ALTERAR, RECRIE ESTE MÉTODO NO SEU CONTROLLER
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
      if (isset($search['q'])) {
        $model->where('name', 'like', '%' . $search['q'] . '%');
      }
    }
  }

  protected function exceptFilter($datas)
  {
    $query = collect(request()->query('query'))->reject(function ($value, $key) use ($datas) {
      dd($value, $key, $datas);
      return isset($datas[$key]) && $datas[$key] === $value;
    });
    dd($query, request()->query());
    return url()->current() . '?' . http_build_query($query->toArray(), '', '&', PHP_QUERY_RFC1738);
  }

  /**
   * Rotas Padrões
   *
   * Podem ser ajustadas recriando no controller
   */
  protected function create(Request $request)
  {
    return $this->getView('form');
  }

  protected function edit(string $uuid)
  {
    $item = $this->model->with(['descriptions'])->findOrFail($uuid);
    return $this->getView('form', ["register" => $item, "uuid" => $uuid]);
  }
}
