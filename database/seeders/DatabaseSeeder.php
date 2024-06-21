<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {

    $this->call([
      LanguageSeeder::class,
      RolesAndPermissionsSeeder::class,
      UserSeeder::class,
      EmpresaSeeder::class,
      UpdateRepresentativesPermission::class
    ]);

    $this->command->newLine();
    $this->command->info('IMPORTANTE: utilize o ez-geo.sql para pegar as cidades');
    $this->command->newLine();
    $this->command->info('IMPORTANTE: utilize o dump.sql para pegar as páginas já criadas');
    $this->command->newLine();
    $this->command->info('IMPORTANTE: edite o AppServiceProvider para liberar a empresa');
    $this->command->newLine();

  }
}
