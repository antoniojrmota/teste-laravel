<?php

namespace App\Services;

use App\Models\EzLanguage;
use Exception;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

/**
 * Busca os feeds do WP da revista viajante
 *
 * Aparência editor de arquivos adicionar no final do functions.php
 *
 * add_action('atom_entry', function(){
 *   global $post;
 *   if(has_post_thumbnail($post->ID)){
 *     $output = '';
 *     $thumbnail_ID = get_post_thumbnail_id( $post->ID );
 *     $thumbnail = wp_get_attachment_image_src($thumbnail_ID, 'thumbnail');
 *     $output .= '<image>';
 *     $output .= '<url>'. $thumbnail[0] .'</url>';
 *     $output .= '<width>'. $thumbnail[1] .'</width>';
 *     $output .= '<height>'. $thumbnail[2] .'</height>';
 *     $output .= '</image>';
 *     echo $output;
 *   }
 * });
 *
 * @return array
 * @author Fábio Neis <fabio@ezoom.com.br>
 */
class WpFeed
{

  /**
   * Busca os feeds de acordo com o idioma
   *
   * @param EzLanguage $lang
   * @return array
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function getFeed(EzLanguage $lang, string $search = null)
  {
    // Definimos a categoria com base no idioma
    $category = null;
    switch ($lang->code) {
      case 'it':
      case 'en':
        $category = 'en/categoria/news-route/';
        break;
      case 'es':
        $category = 'es/categoria/ruta-de-noticias/';
        break;
      case 'pt':
      default:
        $category = 'categoria/rota-das-noticias/';
        break;
    }

    // Adicionamos no cache para não deixar lento
    $cacheName = Str::slug('rss_' . $lang->id . '_' . $search);
    //Cache::forget($cacheName);
    $xml = Cache::remember($cacheName, now()->addMinutes(60), function () use ($category, $search) {
      try {
        $context = stream_context_create([
          'http' => [
            'method'  => 'GET',
            'timeout' => 5
          ]
        ]);

        $url = 'https://viajante.marcopolo.com.br/' . $category . 'feed/atom';
        if ($search)
          $url .= '?s=' . $search;

        $xml = file_get_contents($url, false, $context);
        return $xml;
      } catch (Exception $e) {
        Log::info('WpFeed RSS: ' . $e->getMessage());
        return false;
      }
    });

    $rss = [];
    if ($xml !== false) {

      libxml_use_internal_errors(true);
      $xml = simplexml_load_string($xml);

      if ($xml) {
        foreach ($xml->entry as $entry) {
          $image = (string) $entry?->image?->url;
          $rss[] = (object) [
            'title'   => (string) $entry->title,
            'summary' => strip_tags((string) $entry->summary),
            'link'    => (string) $entry->link->attributes()->href,
            'image'   => $image ?? asset('assets/site/img/no-image.jpg'),
            'date'    => now()->parse((string) $entry->published)
          ];
        }
      }
    }

    return $rss;
  }
}
