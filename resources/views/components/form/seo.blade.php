{{--
  Para definir propriedades separadas dos atributos
  você deve informá-las em props, pode inclusive definir valores padrões
  Lembre-se: pascal-casing => pascalCasing
--}}
@props([
  'langID' => null,
  'register' => null
])


<details>

  <summary>SEO</summary>

  <div class="row">

    <x-form.form-group name="languages[{{ $langID }}][meta_title]" :label="__('Título')" value="{{ $register->descriptions[$langID]->meta_title ?? null }}" class="mb-3" />

    <x-form.form-group name="languages[{{ $langID }}][meta_description]" :label="__('Descrição')" value="{{ $register->descriptions[$langID]->meta_description ?? null }}" class="mb-3" />

    <x-form.form-group name="languages[{{ $langID }}][meta_keywords]" :label="__('Palavras Chave')" value="{{ $register->descriptions[$langID]->meta_keywords ?? null }}" class="mb-3" />

  </div>

</details>

