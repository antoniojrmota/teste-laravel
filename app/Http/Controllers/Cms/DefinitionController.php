<?php

namespace App\Http\Controllers\Cms;

use App\Http\Controllers\CmsController;
use App\Http\Requests\ClientUpdateRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

class DefinitionController extends CmsController
{
  public function __construct()
  {
    $this->module = 'Definições';
    $this->moduleTitle = 'Definições';
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
    $register = $request->user();

    if ($register->hasRoleSystem(Role::MASTER))
      return redirect(route('cms.usuarios.edit', $register->uuid));

    return view('cms.clientes.create', compact('register'));
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
    // Pegamos o usuário da sessão
    $register = $request->user();
    $input = $request->validated();

    // Removemos o document e nome, pois não pode editar
    $input = Arr::except($input, ['document', 'name']);

    if (!empty($input['password'])) {
      $input['password'] = Hash::make($input['password']);
    } else {
      $input = Arr::except($input, ['password']);
    }

    $register->update($input);

    return redirect()->route($this->route . '.index')
      ->with('message', __('Dados atualizados com sucesso!'));
  }
}
