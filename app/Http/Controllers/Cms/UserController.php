<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

class UserController extends CmsController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  function __construct()
  {
    $this->module = 'Usuários';
    $this->moduleTitle = 'Usuários';
    $this->model = new User;
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
    $registers = $this->model->when($user->hasRoleSystem(Role::MASTER), function ($query) {
      $query->whereHas('roles', function ($query) {
        $query->bySystem(Role::MASTER);
      });
    })->where('id', '!=', 1)
      ->orderBy('created_at', 'DESC');

    $this->applyFilters($request, $registers);

    $table = [
      'filters'    => $this->getFilters(),
      'primaryKey' => 'uuid',
      'registers'  => $registers->with('roles')->paginate($this->perPage),
      'columns'    => [
        [
          'name'   => __('Nome'),
          'column' => 'name',
          'type'   => 'text',
        ],
        [
          'name'   => __('E-mail'),
          'column' => 'email',
          'type'   => 'text',
        ],
        [
          'name'   => __('Grupo'),
          'column' => function ($register) {
            return $register->roles->implode('name', ', ');
          },
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
    $roles = Role::where('id', '!=', 1)
      ->where('system', Role::MASTER)
      ->isActive()
      ->with('permissions')
      ->get();

    $roles->transform(function ($role) {
      $role->_permissions = $role->permissions->mapToGroups(function ($permission) {
        return [$permission->module => $permission->id];
      })->toJson();
      return $role;
    });

    $permissions = Permission::get()->groupBy('module');

    return view($this->route . '.create', compact('roles', 'permissions'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \App\Http\Requests\UserStoreRequest  $request
   * @return \Illuminate\Http\Response
   */
  public function store(UserStoreRequest $request)
  {
    $input = $request->validated();

    $user = auth()->user();

    $input['password'] = Hash::make($input['password']);
    $input['status'] = $input['status'] ?? 0;

    $user = $this->model->create($input);
    $user->assignRole($input['role']);

    if ($request->has('permissions'))
      $user->givePermissionTo($input['permissions']);

    return redirect()->route($this->route . '.index')
      ->with('message', __('Usuário criado com sucesso!'));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  string  $uuid
   * @return \Illuminate\Http\Response
   */
  public function edit(string $uuid)
  {
    $register = $this->model->byUuid($uuid)->firstOrFail();
    $roles = Role::where('id', '!=', 1)
      ->where('system', Role::MASTER)
      ->isActive()
      ->with('permissions')
      ->get();

    $roles->transform(function ($role) {
      $role->_permissions = $role->permissions->mapToGroups(function ($permission) {
        return [$permission->module => $permission->id];
      })->toJson();
      return $role;
    });

    $permissions = Permission::get()->groupBy('module');

    // Grupo do usuário
    $register->_role = $register->getRoleNames()->first();

    // Permissões específicas do usuário
    $register->_permissions = $register->permissions->pluck('id')->all();

    return view($this->route . '.create', compact('register', 'roles', 'permissions'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \App\Http\Requests\UserUpdateRequest  $request
   * @param  string  $uuid
   * @return \Illuminate\Http\Response
   */
  public function update(UserUpdateRequest $request, string $uuid)
  {
    $input = $request->validated();

    if (!empty($input['password'])) {
      $input['password'] = Hash::make($input['password']);
    } else {
      $input = Arr::except($input, ['password']);
    }

    unset($input['role'], $input['permissions']);
    $input['status'] = $input['status'] ?? 0;

    $this->model->byUuid($uuid)->update($input);

    $user = $this->model->byUuid($uuid)->firstOrFail();
    $user->syncRoles($request->input('role'));
    $user->syncPermissions($request->input('permissions', []));

    return redirect()->route($this->route . '.index')
      ->with('message', __('Usuário atualizado com sucesso!'));
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  string  $uuid
   * @return \Illuminate\Http\Response
   */
  public function destroy(string $uuid)
  {
    $this->model->byUuid($uuid)->delete();
    return redirect()->route($this->route . '.index')
      ->with('message', __('Usuário removido com sucesso!'));
  }
}
