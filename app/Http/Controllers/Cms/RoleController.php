<?php

namespace App\Http\Controllers\Cms;

use Illuminate\Http\Request;
use App\Http\Controllers\CmsController;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Validation\Rule;

class RoleController extends CmsController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Grupos';
    $this->moduleTitle = 'Grupos';
    $this->model = new Role;
    parent::__construct();
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $registers = $this->model::where('id', '!=', 1)->orderBy('name');
    $this->applyFilters($request, $registers);

    $table = [
      'filters'    => $this->getFilters(),
      'primaryKey' => 'uuid',
      'registers'  => $registers->paginate($this->perPage),
      'columns'    => [
        [
          'name'   => __('Nome'),
          'column' => 'name',
          'type'   => 'text',
        ],
        [
          'name'   => __('Painel'),
          'column' => 'system.name',
          'type'   => 'text',
        ],
        [
          'name'   => __('Status'),
          'column' => 'status',
          'type'   => 'status',
          'values' => [
            0 => [
              'class' => 'bg-danger',
              'title' => __('Inativo')
            ],
            1 => [
              'class' => 'bg-success',
              'title' => __('Ativo')
            ]
          ]
        ],
        [
          'name'   => __('Criado em'),
          'column' => 'created_at',
          'class'  => 'text-muted',
          'type'   => 'datetime'
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

    return $this->getView('index', compact('table'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    $permissions = Permission::get()->groupBy('module');
    $panels = Role::getUserPanels();
    return view($this->route . '.create', compact('permissions', 'panels'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $input = $this->validate($request, [
      'name'        => 'required|unique:roles,name',
      'status'      => 'nullable|boolean',
      'permissions' => 'required_if:system,' . Role::MASTER,
      'system'      => 'required|integer|min:1|max:3' . ($request->input('system') != Role::MASTER ? '|unique:roles,system' : null)
    ], [
      'permissions.required_if' => 'O campo :attribute é obrigatório quando o painel for Master'
    ], [
      'name'        => __('nome'),
      'permissions' => __('permissões'),
      'system'      => __('painel')
    ]);

    $role = $this->model::create([
      'name'   => $input['name'],
      'status' => $input['status'] ?? 0,
      'system' => $input['system'] ?? Role::MASTER
    ]);

    if ($request->has('permissions'))
      $role->syncPermissions($input['permissions']);

    return redirect()->route($this->route . '.index')
      ->with('message', __('Grupo cadastrado com sucesso'));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  string  $id
   * @return \Illuminate\Http\Response
   */
  public function edit(string $id)
  {
    $register = $this->model::byUuid($id)->firstOrFail();
    $panels = Role::getUserPanels();
    $permissions = Permission::get()->groupBy('module');

    $rolePermissions = $register->permissions()->pluck('permission_id')->all();

    return view($this->route . '.create', compact('register', 'panels', 'permissions', 'rolePermissions'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  string  $uuid
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, string $uuid)
  {
    $role = $this->model::byUuid($uuid)->firstOrFail();

    $input = $this->validate($request, [
      'name'       => [
        'required',
        'string',
        Rule::unique('roles')->where(function ($query) use ($uuid) {
          return $query->where('uuid', $this->model::decodeUuid($uuid));
        })
      ],
      'status'      => 'nullable|boolean',
      'permissions' => 'required_if:system,' . Role::MASTER,
      'system'      => [
        'required',
        'integer',
        'min:1',
        'max:3',
        Rule::unique('roles')->where(function ($query) use ($uuid, $request, $role) {
          $system = $request->input('system');
          if ($system != Role::MASTER && $system != $role->system->id)
            $query->where('system', $request->input('system'));
          else if ($system == $role->system->id)
            $query->where('uuid', $this->model::decodeUuid($uuid));
        })
      ]
    ], [
      'permissions.required_if' => 'O campo :attribute é obrigatório quando o painel for Master'
    ], [
      'name'       => __('nome'),
      'permission' => __('permissões'),
      'system'     => __('painel')
    ]);

    $role = $this->model::byUuid($uuid)->firstOrFail();
    $role->forceFill([
      'name'   => $input['name'],
      'status' => $input['status'] ?? 0,
      'system' => $input['system'] ?? Role::MASTER
    ]);
    $role->save();

    $role->syncPermissions($request->input('permissions', []));

    return redirect()->route($this->route . '.index')
      ->with('message', __('Grupo atualizado com sucesso'));
  }
  /**
   * Remove the specified resource from storage.
   *
   * @param  string $uuid
   * @return \Illuminate\Http\Response
   */
  public function destroy(string $uuid)
  {
    $role = $this->model::byUuid($uuid)->firstOrFail();
    if ($role->id == 1)
      abort(404);

    $role->delete();
    return redirect()->route($this->route . '.index')
      ->with('message', __('Grupo removido com sucesso'));
  }
}
