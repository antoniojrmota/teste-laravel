<?php

namespace App\Policies;

use App\Models\Atuacao;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AtuacaoPolicy
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

    return $user->hasPermissionTo('Visualizar Atuação');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Atuacao $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Atuacao $register)
  {

    return $user->hasPermissionTo('Visualizar Atuação');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Atuação');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Atuacao $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Atuacao $register)
  {

    return $user->hasPermissionTo('Editar Atuação');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Atuacao $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Atuacao $register)
  {

    return $user->hasPermissionTo('Remover Atuação');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Atuacao $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Atuacao $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Atuacao $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Atuacao $register)
  {
    //
  }
}
