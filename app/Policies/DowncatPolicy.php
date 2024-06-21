<?php

namespace App\Policies;

use App\Models\Downcat;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DowncatPolicy
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

    return $user->hasPermissionTo('Visualizar Downcats');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Downcat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Downcat $register)
  {

    return $user->hasPermissionTo('Visualizar Downcats');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Downcats');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Downcat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Downcat $register)
  {

    return $user->hasPermissionTo('Editar Downcats');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Downcat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Downcat $register)
  {

    return $user->hasPermissionTo('Remover Downcats');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Downcat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Downcat $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Downcat $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Downcat $register)
  {
    //
  }
}
