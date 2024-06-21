<?php

use Illuminate\Support\Facades\Storage;

if (!function_exists('url_add_path')) {

  /**
   * Valida se já existe http, se não adiciona o path
   *
   *
   * @param string $file
   * @param string $path
   * @return string
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  function url_add_path(string $path, ?string $file = null): ?string
  {
    if (!$file)
      return null;

    return strpos($file, 'http') !== false
      ? $file
      : asset($path . $file);
  }

  /**
   * Remove a url base
   *
   * @param string $file
   * @param string $disk
   * @return string
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  function url_remove_basepath(string $file, string $disk = null)
  {
    if (!$disk)
      $disk = config('filesystems.default');

    // Se tiver uma url, devemos remover antes
    if (strstr($file, 'http')) {
      $url = str_replace('a.jpg', '', Storage::disk($disk)->url('a.jpg')); //Nome qualquer de arquivo
      $file = str_replace($url, '', $file);
    }

    return $file;
  }
}

if (!function_exists('table_check_rules')) {

  /**
   * Valida as regras de acesso
   *
   * @param array|Closure $rules
   * @param Model $register
   * @return boolean
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  function url_check_rules($register, $rules = null)
  {
    if (is_array($rules)) {
      foreach ($rules as $rule => $value) {
        if ($rule == 'can') {
          if (is_array($value))
            $check = auth()->user()->can($value['route'], $value['model']);
          else
            $check = auth()->user()->can($value, $register);
        }
        if ($check)
          break;
      }
    } else if ($rules instanceof Closure) {
      $check = $rules($register);
    } else {
      $check = true;
    }

    return $check;
  }
}

if (!function_exists('url_get_youtube_id')) {
  /**
   * Retorna a url do youtube
   *
   * @param string $value
   * @return string|boolean
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  function url_get_youtube_id($value)
  {
    preg_match("/(?<=(v|i)=)[a-zA-Z0-9-]+(?=&)|(?<=(?:v|i)\/)[^&\n]+|(?<=embed\/)[^\"&\n]+|(?<=(?:v|i)=)[^&\n]+|(?<=youtu.be\/)[^&\n]+/", $value, $matches);
    return isset($matches[0]) ? $matches[0] : false;
  }
}
