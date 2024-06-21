<?php

namespace App\Policies;

use App\Models\Modal;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ModalPolicy
{
  use HandlesAuthorization;

  /**
   * Determine whether the user can view any models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function viewAny(User $user)
  {
    return $user->hasPermissionTo('Visualizar Modais');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Modal $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Modal $register)
  {
    return $user->hasPermissionTo('Visualizar Modais');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Modais');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Modal $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Modal $register)
  {

    return $user->hasPermissionTo('Editar Modais');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Modal $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Modal $register)
  {

    return $user->hasPermissionTo('Remover Modais');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Modal $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Modal $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Modal $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Modal $register)
  {
    //
  }
}
