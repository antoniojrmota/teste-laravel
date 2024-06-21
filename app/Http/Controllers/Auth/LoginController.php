<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\DefaultController;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LoginController extends DefaultController
{
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

  use AuthenticatesUsers;

  /**
   * Where to redirect users after login.
   *
   * @var string
   */
  protected $redirectTo = RouteServiceProvider::HOME;

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }

  public function login(Request $request)
  {
    $this->validateLogin($request);

    // If the class is using the ThrottlesLogins trait, we can automatically throttle
    // the login attempts for this application. We'll key this by the username and
    // the IP address of the client making these requests into this application.
    if (
      method_exists($this, 'hasTooManyLoginAttempts') &&
      $this->hasTooManyLoginAttempts($request)
    ) {
      $this->fireLockoutEvent($request);

      return $this->sendLockoutResponse($request);
    }

    if ($this->attemptLogin($request)) {
      if ($request->has('back')) {
        return redirect($request->back);
      }

      return $this->sendLoginResponse($request);
    }

    // If the login attempt was unsuccessful we will increment the number of attempts
    // to login and redirect the user back to the login form. Of course, when this
    // user surpasses their maximum number of attempts they will get locked out.
    $this->incrementLoginAttempts($request);

    return $this->sendFailedLoginResponse($request);
  }

  /**
   * The user has been authenticated.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  mixed  $user
   * @return mixed
   */
  protected function authenticated(Request $request, $user)
  {
    $token = $request->user()->createToken($request->user()->name . '_token')->plainTextToken;
    $request->session()->put('api_token', $token);

    if ($user->status == 0) {
      $this->guard()->logout();

      $request->session()->invalidate();

      throw ValidationException::withMessages([
        $this->username() => [trans('auth.failed')],
      ]);
    }
  }

  public function logout(Request $request)
  {
    if ($request->user()->currentAccessToken())
      $request->user()->currentAccessToken()->delete();

    $this->guard()->logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    if ($response = $this->loggedOut($request)) {
      return $response;
    }

    return $request->wantsJson()
      ? new JsonResponse([], 204)
      : redirect('/');
  }
}
