<?php

namespace App\Policies;

use App\Models\HotsiteProduct;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class HotsiteProductPolicy
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
    return $user->hasPermissionTo('Visualizar Produtos');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\HotsiteProduct $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, HotsiteProduct $register)
  {
    return $user->hasPermissionTo('Visualizar Produtos');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Produtos');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\HotsiteProduct $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, HotsiteProduct $register)
  {

    return $user->hasPermissionTo('Editar Produtos');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\HotsiteProduct $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, HotsiteProduct $register)
  {

    return $user->hasPermissionTo('Remover Produtos');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\HotsiteProduct $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, HotsiteProduct $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\HotsiteProduct $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, HotsiteProduct $register)
  {
    //
  }
}
