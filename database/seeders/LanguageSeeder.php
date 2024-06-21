<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $languages = [
      [
        'id'            => 1,
        'name'          => 'Português',
        'code'          => 'pt_BR',
        'timezone'      => '-03:00',
        'lc_time_names' => 'pt_BR',
        'image'         => 'pt_BR.png',
        'directory'     => 'pt_BR',
        'order_by'      => 1,
        'status'        => 1,
        'site'          => 1,
      ],
      [
        'id'            => 2,
        'name'          => 'Inglês',
        'code'          => 'en',
        'timezone'      => '-04:00',
        'lc_time_names' => 'en_US',
        'image'         => 'en.png',
        'directory'     => 'en',
        'order_by'      => 2,
        'status'        => 1,
        'site'          => 1,
      ],
      [
        'id'            => 3,
        'name'          => 'Espanhol',
        'code'          => 'es',
        'timezone'      => '-04:00',
        'lc_time_names' => 'es_ES',
        'image'         => 'es.png',
        'directory'     => 'es',
        'order_by'      => 3,
        'status'        => 1,
        'site'          => 1,
      ],
      [
        'id'            => 4,
        'name'          => 'Francês',
        'code'          => 'fr',
        'timezone'      => '01:00',
        'lc_time_names' => 'fr',
        'image'         => 'fr.png',
        'directory'     => 'fr',
        'order_by'      => 4,
        'status'        => 1,
        'site'          => 1,
      ],
      [
        'id'            => 5,
        'name'          => 'Italiano',
        'code'          => 'it',
        'timezone'      => '01:00',
        'lc_time_names' => 'it_IT',
        'image'         => 'it.png',
        'directory'     => 'it',
        'order_by'      => 5,
        'status'        => 0,
        'site'          => 0,
      ]
    ];
    foreach ($languages as $lang) {
      $language = new Language;
      $language->forceFill($lang);
      $language->save();
    }
  }
}
