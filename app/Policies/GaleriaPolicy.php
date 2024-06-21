<?php

namespace App\Policies;

use App\Models\Foto;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class GaleriaPolicy
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
    return $user->hasPermissionTo('Visualizar Galeria');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Foto $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Foto $register)
  {
    return $user->hasPermissionTo('Visualizar Galeria');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Galeria');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Foto $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Foto $register)
  {

    return $user->hasPermissionTo('Editar Galeria');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Foto $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Foto $register)
  {

    return $user->hasPermissionTo('Remover Galeria');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Foto $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Foto $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Foto $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Foto $register)
  {
    //
  }
}
