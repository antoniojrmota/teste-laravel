<?php

if (!function_exists('text_format')) {

  /**
   * Formata uma string segundo a máscara solicitada
   * @param string $format => document, phone, postcode...
   * @param string $value
   * @return string
   */
  function text_format($format, $value)
  {

    if (!$value)
      return '';

    switch ($format) {
      case 'document':
        $value = preg_replace('/\D/', '', $value);
        if (strlen($value) == 11)
          $formated = substr($value, 0, 3) . '.' . substr($value, 3, 3) . '.' . substr($value, 6, 3) . '-' . substr($value, 9);
        else
          $formated = substr($value, 0, 2) . '.' . substr($value, 2, 3) . '.' . substr($value, 5, 3) . '/' . substr($value, 8, 4) . '-' . substr($value, 12, 2);
        break;
      case 'phone':
        $value = preg_replace('/\D/', '', $value);
        if (strlen($value) == 10)
          $formated =  '(' . substr($value, 0, 2) . ') ' . substr($value, 2, 4) . '.' . substr($value, 6);
        else
          $formated =  '(' . substr($value, 0, 2) . ') ' . substr($value, 2, 5) . '.' . substr($value, 7);
        break;
      case 'postcode':
        $value = preg_replace('/\D/', '', $value);
        $formated = substr($value, 0, 5) . '-' . substr($value, 5);
        break;
      case 'date':
        $datetime = array_pad(explode(' ', $value), 2, null);
        $date = implode('/', array_reverse(explode('-', $datetime[0])));
        $formated = $date;
        break;
      case 'date2':
        $date = now()->parse($value);
        $formated = $date->format('d/m/Y');
        break;
      case 'datetime':
        $date = now()->parse($value);
        $formated = $date->format('d/m/Y H:i');
        break;
      case 'datetime_js':
        $date = now()->parse($value);
        $formated = $date->format(text_js2php_date_format());
        break;
      case 'hour':
        $formated = (strlen($value) > 5) ? substr($value, 0, -3) : $value;
        break;
      case 'number':
        $formated = number_format($value, 2, trans('javascript.format.money.radixPoint'), trans('javascript.format.money.groupSeparator'));
        break;
      case 'number0':
        $formated = number_format($value, 0, trans('javascript.format.money.radixPoint'), trans('javascript.format.money.groupSeparator'));
        break;
      case 'number3':
        $formated = number_format($value, 3, trans('javascript.format.money.radixPoint'), trans('javascript.format.money.groupSeparator'));
        break;
      default:
        $formated = __('formato não reconhecido');
    }

    return $formated;
  }
}

if (!function_exists('text_js2php_date_format')) {

  /**
   * Aproveitamos a informação que adicionamos no Lang para formatar as datas
   * Entretanto o padrão entre a formatação da data no JS e PHP muda
   * Ajusta essa formatação para não precisarmos duplicar
   *
   * @return string
   */
  function text_js2php_date_format($withTime = true)
  {
    if ($withTime) {
      $dateFix = str_replace('HH:', 'H:', trans('javascript.datetimeFormat'));
      $dateFix = str_replace(':mm', ':i', $dateFix);
      $dateFix = str_replace('DD', 'd', $dateFix);
      $dateFix = str_replace('MM', 'm', $dateFix);
      $dateFix = str_replace('YYYY', 'Y', $dateFix);
    } else {
      $dateFix = str_replace('DD', 'd', trans('javascript.daterange.format'));
      $dateFix = str_replace('MM', 'm', $dateFix);
      $dateFix = str_replace('YYYY', 'Y', $dateFix);
    }

    return $dateFix;
  }
}

if (!function_exists('text_md5_uuid')) {

  /**
   * Retorna um md5 formatado no padrão uuid
   *
   * @return string
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  function text_md5_uuid($value)
  {
    $md5 = md5($value);
    $uuid = substr($md5, 0, 8) . '-' .
      substr($md5, 8, 4) . '-' .
      substr($md5, 12, 4) . '-' .
      substr($md5, 16, 4) . '-' .
      substr($md5, 20);

    return $uuid;
  }
}


if (!function_exists('text_sql_bindings')) {
  /**
   * Debugar uma query
   *
   * @param Illuminate\Database\Eloquent\Builder $query
   * @return string
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  function text_sql_bindings($query)
  {
    return vsprintf(str_replace('?', '%s', $query->toSql()), collect($query->getBindings())->map(function ($binding) {
      return is_numeric($binding) ? $binding : "'{$binding}'";
    })->toArray());
  }
}
