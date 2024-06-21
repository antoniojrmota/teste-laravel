<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class UpdateRepresentativesPermission extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::updateOrCreate(
            ['module' => 'POS', 'name' => 'Visualizar POS'],
            ['module' => 'Representantes', 'name' => 'Visualizar Representantes']
        );

        Permission::updateOrCreate(
            ['module' => 'POS', 'name' => 'Cadastrar POS'],
            ['module' => 'Representantes', 'name' => 'Cadastrar Representantes']
        );

        Permission::updateOrCreate(
            ['module' => 'POS', 'name' => 'Editar POS'],
            ['module' => 'Representantes', 'name' => 'Editar Representantes']
        );

        Permission::updateOrCreate(
            ['module' => 'POS', 'name' => 'Remover POS'],
            ['module' => 'Representantes', 'name' => 'Remover Representantes']
        );
    }
}
