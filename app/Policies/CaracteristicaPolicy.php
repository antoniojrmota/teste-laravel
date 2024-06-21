<?php

namespace App\Policies;

use App\Models\Caracat;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CaracteristicaPolicy
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

    return $user->hasPermissionTo('Visualizar Características');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Caracat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Caracat $register)
  {

    return $user->hasPermissionTo('Visualizar Características');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Características');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Caracat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Caracat $register)
  {

    return $user->hasPermissionTo('Editar Características');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Caracat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Caracat $register)
  {

    return $user->hasPermissionTo('Remover Características');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Caracat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Caracat $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Caracat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Caracat $register)
  {
    //
  }
}
