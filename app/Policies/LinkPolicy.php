<?php

namespace App\Policies;

use App\Models\Link;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class LinkPolicy
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
    return $user->hasPermissionTo('Visualizar Links');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Link $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Link $register)
  {
    return $user->hasPermissionTo('Visualizar Links');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Links');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Link $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Link $register)
  {

    return $user->hasPermissionTo('Editar Links');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Link $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Link $register)
  {

    return $user->hasPermissionTo('Remover Links');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Link $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Link $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Link $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Link $register)
  {
    //
  }
}
