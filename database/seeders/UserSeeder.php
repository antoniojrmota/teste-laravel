<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $user = new User;
    $user->forceFill([
      'name'         => 'Ezoom',
      'email'        => 'ezoom@ezoom.com.br',
      'password'     => Hash::make('ezoom'),
    ]);
    $user->save();

    $user->assignRole('Super Admin');
  }
}
