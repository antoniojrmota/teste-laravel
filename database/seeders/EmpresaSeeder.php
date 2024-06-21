<?php

namespace Database\Seeders;

use App\Models\Empresa;
use Illuminate\Database\Seeder;

class EmpresaSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    // there must be a first company
    $empresa = new Empresa();
    $empresa->nome = "Primeira Empresa";
    $empresa->dominio = "127.0.0.1";
    $empresa->save();

    for( $i=1 ; $i <= 4; $i++ )
    {
      $empresa->descriptions()->create([
        'language_id'    => $i,
        'seoTitle'       => 'Edite as configuações da empresa',
        'seoDescription' => 'Edite as configuações da empresa',
        'seoKeywords'    => 'Edite as configuações da empresa'
      ]);
    }

  }
}
