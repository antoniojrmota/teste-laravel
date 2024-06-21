{{--
  Para definir propriedades separadas dos atributos
  você deve informá-las em props, pode inclusive definir valores padrões
  Lembre-se: pascal-casing => pascalCasing
--}}
@props([
  'name',
  'label'       => 'undefined',
  'labelClass'  => 'col-lg-3',
  'required'    => false,
  'placeholder' => null,
  'value'       => 0,
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
  $old = str_replace('-', '.', $field);
@endphp

<div {{ $attributes->class(['row', 'align-items-center']) }}>
  <div class="col-12 {{ $labelClass }}">
    <x-form.label for="input-{{ $field }}" value="{{ $label }}" />
  </div>
  <div class="col">
    <div class="form-check form-switch form-switch-lg">
      <input id="input-{{ $field }}" name="{{ $name }}" value="1" type="checkbox" class="form-check-input" {{ old($old, $value) == 1 ? ' checked' : '' }} {{ $required ? 'required' : null }} />
    </div>
    <x-form.input-error name="{{ $old }}" />
  </div>
</div>
