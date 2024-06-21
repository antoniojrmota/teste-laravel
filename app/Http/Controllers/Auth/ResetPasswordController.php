<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\DefaultController;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends DefaultController
{
  /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

  use ResetsPasswords;

  /**
   * Where to redirect users after resetting their password.
   *
   * @var string
   */
  protected $redirectTo = RouteServiceProvider::HOME;

  /**
   * Atualiza a senha do usuário no cms
   *
   * @param Request $request
   * @return \Illuminate\Http\Response
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function updatePassword(Request $request)
  {
    if (!$request->expectsJson())
      abort(404);

    $request->validate([
      'current_password' => ['required', 'string', 'current_password'],
      'password'         => ['required', 'string', 'min:8', 'confirmed'],
    ]);

    $user = $request->user();
    $user ?? abort(404);

    $user->password = Hash::make($request->get('password'));
    $user->update();
    if ($user) {
      $data = [
        'status' => true,
        'message' => __('Senha atualizada com sucesso!')
      ];
    } else {
      $data = [
        'status' => false,
        'message' => __('Não foi possível executar esta operação.')
      ];
    }

    return response()->json(
      $data,
      200
    );
  }
}
