<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class FixingPermissionsTable extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $permissions = Permission::where('module', 'Caracat')->get(['id', 'module', 'name']);

    foreach ($permissions as $item)
    {
      $newModule = str_ireplace('Caracat', 'Categorias', $item->module);
      $newName = str_ireplace('Caracat', 'Categorias', $item->name);

      Permission::updateOrCreate(
        [
          'id' => $item->id,
        ], 
        [
          'name' => $newName,
          'module' => $newModule,
        ],
      );
    }

    $incorrectName = Permission::where('module', 'Catagorias')->get(['id', 'module', 'name']);

    foreach ($incorrectName as $item)
    {
      $newModule = str_ireplace('Catagorias', 'Categorias', $item->module);
      $newName = str_ireplace('Catagorias', 'Categorias', $item->name);

      Permission::updateOrCreate(
        [
          'id' => $item->id,
        ], 
        [
          'name' => $newName,
          'module' => $newModule,
        ],
      );
    }
  }
}
