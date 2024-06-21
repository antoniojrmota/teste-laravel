<?php

namespace App\Traits;

trait HasLanguageDescription
{
  /**
   * Retorna a descrição de acordo com o idioma selecionado
   *
   * @param integer $fallBacklangId
   * @return object
   * @author Fábio Neis <fabio@ezoom.com.br>
   */
  public function getDescriptionAttribute(int $fallBacklangId = null)
  {
    $currentLang = app('languages')[session()->get('locale', 'pt_BR')];
    return $this->descriptions[$currentLang->id] ?? $this->descriptions[$fallBacklangId ?? 1] ?? [($fallBacklangId ?? 1) => null];
  }


  /**
   * Descr
   * A ideia é dar um merge na descrição na linguagem padrão
   * com a descrição na outra linguagem para evitar nulls
   * @return object
   * @author Rodrigo Nishino <rodrigo.nishino@ezoom.com.br>
   */
  function getDescrAttribute()
  {
    $currentLang = app('languages')[session()->get('locale', 'pt_BR')];
    $description = $this->descriptions[$currentLang->id] ?? $this->descriptions[1];

    foreach ($description->getAttributes() as $attr => $currentValue) {
      $portugueseValue = $this->descriptions[1]->getOriginal($attr);
      if (!$currentValue && $portugueseValue)
        $description->setAttribute($attr, $portugueseValue);
    }

    return $description;
  }
}
