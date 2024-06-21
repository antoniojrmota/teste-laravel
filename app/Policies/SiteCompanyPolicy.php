<?php

namespace App\Policies;

use App\Models\SiteCompany;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SiteCompanyPolicy
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
    return $user->hasPermissionTo('Visualizar Empresas');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteCompany $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, SiteCompany $register)
  {
    return $user->hasPermissionTo('Visualizar Empresas');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {
    return $user->hasPermissionTo('Cadastrar Empresas');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteCompany $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, SiteCompany $register)
  {
    return $user->hasPermissionTo('Editar Empresas');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteCompany $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, SiteCompany $register)
  {
    return $user->hasPermissionTo('Remover Empresas');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteCompany $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, SiteCompany $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteCompany $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, SiteCompany $register)
  {
    //
  }
}
