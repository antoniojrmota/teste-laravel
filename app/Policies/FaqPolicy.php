<?php

namespace App\Policies;

use App\Models\Faq;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FaqPolicy
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
    return $user->hasPermissionTo('Visualizar Faq');
  }

  /**
   * Determine whether the user can view the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Faq $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function view(User $user, Faq $register)
  {
    return $user->hasPermissionTo('Visualizar Faq');
  }

  /**
   * Determine whether the user can create models.
   *
   * @param  \App\Models\User  $user
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function create(User $user)
  {

    return $user->hasPermissionTo('Cadastrar Faq');
  }

  /**
   * Determine whether the user can update the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Faq $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function update(User $user, Faq $register)
  {

    return $user->hasPermissionTo('Editar Faq');
  }

  /**
   * Determine whether the user can delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Faq $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function delete(User $user, Faq $register)
  {

    return $user->hasPermissionTo('Remover Faq');
  }

  /**
   * Determine whether the user can restore the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Faq $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function restore(User $user, Faq $register)
  {
    //
  }

  /**
   * Determine whether the user can permanently delete the model.
   *
   * @param  \App\Models\User  $user
   * @param  \Spatie\Permission\Models\Faq $register
   * @return \Illuminate\Auth\Access\Response|bool
   */
  public function forceDelete(User $user, Faq $register)
  {
    //
  }
}
