<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesAndPermissionsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // Reset cached roles and permissions
    app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

    Permission::updateOrCreate(['module' => 'Grupos', 'name' => 'Visualizar Grupos']);
    Permission::updateOrCreate(['module' => 'Grupos', 'name' => 'Cadastrar Grupos']);
    Permission::updateOrCreate(['module' => 'Grupos', 'name' => 'Editar Grupos']);
    Permission::updateOrCreate(['module' => 'Grupos', 'name' => 'Remover Grupos']);

    Permission::updateOrCreate(['module' => 'Arquivos', 'name' => 'Visualizar Arquivos']);
    Permission::updateOrCreate(['module' => 'Arquivos', 'name' => 'Cadastrar Arquivos']);
    Permission::updateOrCreate(['module' => 'Arquivos', 'name' => 'Editar Arquivos']);
    Permission::updateOrCreate(['module' => 'Arquivos', 'name' => 'Remover Arquivos']);

    Permission::updateOrCreate(['module' => 'Usuários', 'name' => 'Visualizar Usuários']);
    Permission::updateOrCreate(['module' => 'Usuários', 'name' => 'Cadastrar Usuários']);
    Permission::updateOrCreate(['module' => 'Usuários', 'name' => 'Editar Usuários']);
    Permission::updateOrCreate(['module' => 'Usuários', 'name' => 'Remover Usuários']);

    Permission::updateOrCreate(['module' => 'Definições', 'name' => 'Visualizar Definições']);
    //Permission::updateOrCreate(['module' => 'Definições', 'name' => 'Cadastrar Definições']);
    Permission::updateOrCreate(['module' => 'Definições', 'name' => 'Editar Definições']);
    //Permission::updateOrCreate(['module' => 'Definições', 'name' => 'Remover Definições']);

    Permission::updateOrCreate(['module' => 'Empresas', 'name' => 'Visualizar Empresas']);
    Permission::updateOrCreate(['module' => 'Empresas', 'name' => 'Cadastrar Empresas']);
    Permission::updateOrCreate(['module' => 'Empresas', 'name' => 'Editar Empresas']);
    Permission::updateOrCreate(['module' => 'Empresas', 'name' => 'Remover Empresas']);

    Permission::updateOrCreate(['module' => 'Segmentos', 'name' => 'Visualizar Segmentos']);
    Permission::updateOrCreate(['module' => 'Segmentos', 'name' => 'Cadastrar Segmentos']);
    Permission::updateOrCreate(['module' => 'Segmentos', 'name' => 'Editar Segmentos']);
    Permission::updateOrCreate(['module' => 'Segmentos', 'name' => 'Remover Segmentos']);

    Permission::updateOrCreate(['module' => 'Banners', 'name' => 'Visualizar Banners']);
    Permission::updateOrCreate(['module' => 'Banners', 'name' => 'Cadastrar Banners']);
    Permission::updateOrCreate(['module' => 'Banners', 'name' => 'Editar Banners']);
    Permission::updateOrCreate(['module' => 'Banners', 'name' => 'Remover Banners']);

    Permission::updateOrCreate(['module' => 'Páginas', 'name' => 'Visualizar Páginas']);
    Permission::updateOrCreate(['module' => 'Páginas', 'name' => 'Cadastrar Páginas']);
    Permission::updateOrCreate(['module' => 'Páginas', 'name' => 'Editar Páginas']);
    Permission::updateOrCreate(['module' => 'Páginas', 'name' => 'Remover Páginas']);

    Permission::updateOrCreate(['module' => 'Atuação', 'name' => 'Visualizar Atuação']);
    Permission::updateOrCreate(['module' => 'Atuação', 'name' => 'Cadastrar Atuação']);
    Permission::updateOrCreate(['module' => 'Atuação', 'name' => 'Editar Atuação']);
    Permission::updateOrCreate(['module' => 'Atuação', 'name' => 'Remover Atuação']);

    Permission::updateOrCreate(['module' => 'Categorias', 'name' => 'Visualizar Categorias']);
    Permission::updateOrCreate(['module' => 'Categorias', 'name' => 'Cadastrar Categorias']);
    Permission::updateOrCreate(['module' => 'Categorias', 'name' => 'Editar Categorias']);
    Permission::updateOrCreate(['module' => 'Categorias', 'name' => 'Remover Categorias']);

    Permission::updateOrCreate(['module' => 'Características', 'name' => 'Visualizar Características']);
    Permission::updateOrCreate(['module' => 'Características', 'name' => 'Cadastrar Características']);
    Permission::updateOrCreate(['module' => 'Características', 'name' => 'Editar Características']);
    Permission::updateOrCreate(['module' => 'Características', 'name' => 'Remover Características']);

    Permission::updateOrCreate(['module' => 'Dicas', 'name' => 'Visualizar Dicas']);
    Permission::updateOrCreate(['module' => 'Dicas', 'name' => 'Cadastrar Dicas']);
    Permission::updateOrCreate(['module' => 'Dicas', 'name' => 'Editar Dicas']);
    Permission::updateOrCreate(['module' => 'Dicas', 'name' => 'Remover Dicas']);

    Permission::updateOrCreate(['module' => 'Downcats', 'name' => 'Visualizar Downcats']);
    Permission::updateOrCreate(['module' => 'Downcats', 'name' => 'Cadastrar Downcats']);
    Permission::updateOrCreate(['module' => 'Downcats', 'name' => 'Editar Downcats']);
    Permission::updateOrCreate(['module' => 'Downcats', 'name' => 'Remover Downcats']);

    Permission::updateOrCreate(['module' => 'Downloads', 'name' => 'Visualizar Downloads']);
    Permission::updateOrCreate(['module' => 'Downloads', 'name' => 'Cadastrar Downloads']);
    Permission::updateOrCreate(['module' => 'Downloads', 'name' => 'Editar Downloads']);
    Permission::updateOrCreate(['module' => 'Downloads', 'name' => 'Remover Downloads']);

    Permission::updateOrCreate(['module' => 'Cidades', 'name' => 'Visualizar Cidades']);
    Permission::updateOrCreate(['module' => 'Cidades', 'name' => 'Cadastrar Cidades']);
    Permission::updateOrCreate(['module' => 'Cidades', 'name' => 'Editar Cidades']);
    Permission::updateOrCreate(['module' => 'Cidades', 'name' => 'Remover Cidades']);

    Permission::updateOrCreate(['module' => 'Estados', 'name' => 'Visualizar Estados']);
    Permission::updateOrCreate(['module' => 'Estados', 'name' => 'Cadastrar Estados']);
    Permission::updateOrCreate(['module' => 'Estados', 'name' => 'Editar Estados']);
    Permission::updateOrCreate(['module' => 'Estados', 'name' => 'Remover Estados']);

    Permission::updateOrCreate(['module' => 'Países', 'name' => 'Visualizar Países']);
    Permission::updateOrCreate(['module' => 'Países', 'name' => 'Cadastrar Países']);
    Permission::updateOrCreate(['module' => 'Países', 'name' => 'Editar Países']);
    Permission::updateOrCreate(['module' => 'Países', 'name' => 'Remover Países']);

    Permission::updateOrCreate(['module' => 'Faq', 'name' => 'Visualizar Faq']);
    Permission::updateOrCreate(['module' => 'Faq', 'name' => 'Cadastrar Faq']);
    Permission::updateOrCreate(['module' => 'Faq', 'name' => 'Editar Faq']);
    Permission::updateOrCreate(['module' => 'Faq', 'name' => 'Remover Faq']);

    Permission::updateOrCreate(['module' => 'Linhas', 'name' => 'Visualizar Linhas']);
    Permission::updateOrCreate(['module' => 'Linhas', 'name' => 'Cadastrar Linhas']);
    Permission::updateOrCreate(['module' => 'Linhas', 'name' => 'Editar Linhas']);
    Permission::updateOrCreate(['module' => 'Linhas', 'name' => 'Remover Linhas']);

    Permission::updateOrCreate(['module' => 'Links', 'name' => 'Visualizar Links']);
    Permission::updateOrCreate(['module' => 'Links', 'name' => 'Cadastrar Links']);
    Permission::updateOrCreate(['module' => 'Links', 'name' => 'Editar Links']);
    Permission::updateOrCreate(['module' => 'Links', 'name' => 'Remover Links']);

    Permission::updateOrCreate(['module' => 'Modais', 'name' => 'Visualizar Modais']);
    Permission::updateOrCreate(['module' => 'Modais', 'name' => 'Cadastrar Modais']);
    Permission::updateOrCreate(['module' => 'Modais', 'name' => 'Editar Modais']);
    Permission::updateOrCreate(['module' => 'Modais', 'name' => 'Remover Modais']);

    Permission::updateOrCreate(['module' => 'POS', 'name' => 'Visualizar POS']);
    Permission::updateOrCreate(['module' => 'POS', 'name' => 'Cadastrar POS']);
    Permission::updateOrCreate(['module' => 'POS', 'name' => 'Editar POS']);
    Permission::updateOrCreate(['module' => 'POS', 'name' => 'Remover POS']);

    Permission::updateOrCreate(['module' => 'Prêmios', 'name' => 'Visualizar Prêmios']);
    Permission::updateOrCreate(['module' => 'Prêmios', 'name' => 'Cadastrar Prêmios']);
    Permission::updateOrCreate(['module' => 'Prêmios', 'name' => 'Editar Prêmios']);
    Permission::updateOrCreate(['module' => 'Prêmios', 'name' => 'Remover Prêmios']);

    Permission::updateOrCreate(['module' => 'Produtos', 'name' => 'Visualizar Produtos']);
    Permission::updateOrCreate(['module' => 'Produtos', 'name' => 'Cadastrar Produtos']);
    Permission::updateOrCreate(['module' => 'Produtos', 'name' => 'Editar Produtos']);
    Permission::updateOrCreate(['module' => 'Produtos', 'name' => 'Remover Produtos']);

    Permission::updateOrCreate(['module' => 'Unidades', 'name' => 'Visualizar Unidades']);
    Permission::updateOrCreate(['module' => 'Unidades', 'name' => 'Cadastrar Unidades']);
    Permission::updateOrCreate(['module' => 'Unidades', 'name' => 'Editar Unidades']);
    Permission::updateOrCreate(['module' => 'Unidades', 'name' => 'Remover Unidades']);


    Role::updateOrCreate(['name' => 'Super Admin']);

    $role = Role::updateOrCreate(['name' => 'Administrador']);
    $role->givePermissionTo(Permission::all());
  }
}
