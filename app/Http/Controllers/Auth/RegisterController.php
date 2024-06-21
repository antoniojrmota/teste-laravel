<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\DefaultController;
use App\Models\Role;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RegisterController extends DefaultController
{
  /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

  use RegistersUsers;

  /**
   * Where to redirect users after registration.
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
    $this->middleware('guest');
  }

  /**
   * Exibe a tela de cadastro
   *
   * @param Request $request
   * @return \Illuminate\Contracts\View\View
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function showRegistrationForm(Request $request)
  {
    return view('auth.register');
  }

  /**
   * Get a validator for an incoming registration request.
   *
   * @param  array  $data
   * @return \Illuminate\Contracts\Validation\Validator
   */
  protected function validator(array $data)
  {
    return Validator::make($data, [
      'name' => ['required', 'string', 'max:255'],
      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
      'password' => ['required', 'string', 'min:6', 'confirmed'],
      //'dob' => ['required', 'string', 'date_format:' . text_js2php_date_format(false)],
      //'phone' => ['required', 'string'],
      'code' => 'required|string'
      //'avatar' => ['required', 'image', 'mimes:jpg,jpeg,png', 'max:1024'],
    ]);
  }

  /**
   * Create a new user instance after a valid registration.
   *
   * @param  array  $input
   * @return \App\Models\User
   */
  protected function create(array $input)
  {
    // if (request()->has('avatar')) {
    //   $avatar = request()->file('avatar');
    //   $avatarName = time() . '.' . $avatar->getClientOriginalExtension();
    //   $avatarPath = public_path('/images/');
    //   $avatar->move($avatarPath, $avatarName);
    // }

    $user = User::create([
      'name'     => $input['name'],
      'email'    => $input['email'],
      'password' => Hash::make($input['password'])
    ]);

    if ($user) {
      // Seta a permissão
      $role = Role::where('system', Role::SITE)->firstOrFail();
      $user->assignRole($role);
    }

    return $user;
  }
}
