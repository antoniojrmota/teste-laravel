<?php

namespace App\Policies;

use App\Models\SiteAgent;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RepresentativesPolicy
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
    return $user->hasPermissionTo('Visualizar Representantes');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  App\Models\SiteAgent $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, SiteAgent $register)
  {
    return $user->hasPermissionTo('Visualizar Representantes');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {
    return $user->hasPermissionTo('Cadastrar Representantes');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  App\Models\SiteAgent $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, SiteAgent $register)
  {
    return $user->hasPermissionTo('Editar Representantes');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  App\Models\SiteAgent $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, SiteAgent $register)
  {
    return $user->hasPermissionTo('Remover Representantes');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  App\Models\SiteAgent $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, SiteAgent $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  App\Models\SiteAgent $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, SiteAgent $register)
  {
    //
  }
}
