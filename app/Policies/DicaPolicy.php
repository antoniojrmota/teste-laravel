<?php

namespace App\Policies;

use App\Models\Dica;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DicaPolicy
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

    return $user->hasPermissionTo('Visualizar Dicas');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Dica $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Dica $register)
  {

    return $user->hasPermissionTo('Visualizar Dicas');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Dicas');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Dica $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Dica $register)
  {

    return $user->hasPermissionTo('Editar Dicas');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Dica $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Dica $register)
  {

    return $user->hasPermissionTo('Remover Dicas');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Dica $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Dica $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Dica $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Dica $register)
  {
    //
  }
}
