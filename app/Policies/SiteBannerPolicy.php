<?php

namespace App\Policies;

use App\Models\SiteBanner;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SiteBannerPolicy
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

    return $user->hasPermissionTo('Visualizar Banners');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteBanner $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, SiteBanner $register)
  {
    return $user->hasPermissionTo('Visualizar Banners');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {
    return $user->hasPermissionTo('Cadastrar Banners');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteBanner $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, SiteBanner $register)
  {

    return $user->hasPermissionTo('Editar Banners');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteBanner $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, SiteBanner $register)
  {

    return $user->hasPermissionTo('Remover Banners');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteBanner $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, SiteBanner $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\SiteBanner $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, SiteBanner $register)
  {
    //
  }
}
