<?php

namespace App\Policies;

use App\Models\Download;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DownloadPolicy
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

    return $user->hasPermissionTo('Visualizar Downloads');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Download $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Download $register)
  {

    return $user->hasPermissionTo('Visualizar Downloads');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Downloads');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Download $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Download $register)
  {

    return $user->hasPermissionTo('Editar Downloads');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Download $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Download $register)
  {

    return $user->hasPermissionTo('Remover Downloads');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Download $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Download $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Download $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Download $register)
  {
    //
  }
}
