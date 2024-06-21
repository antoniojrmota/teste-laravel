{{--
  Para definir propriedades separadas dos atributos
  você deve informá-las em props, pode inclusive definir valores padrões
  Lembre-se: pascal-casing => pascalCasing
--}}
@props([
  'name',
  'maxlength'   => null,
  'label'       => 'undefined',
  'inputClass'  => null,
  'required'    => false,
  'placeholder' => null,
  'value'       => null,
  'data'        => [],
  'dataKey'     => 'uuid',
  'dataValue'   => 'name',
  'helper'      => null,
  'multiple'    => null
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
@endphp

<div {{ $attributes->class(['row', 'align-items-center']) }}>
  <div class="col-12 col-lg-3">
    <x-form.label for="input-{{ $field }}" value="{{ $label }}" />
  </div>
  <div class="col">
    <x-form.select :name="$name" :data="$data" :data-key="$dataKey" :data-value="$dataValue" :value="$value" :placeholder="$placeholder ?? $label" :class="$inputClass" :maxlength="$maxlength" :required="$required" :helper="$helper" :multiple="$multiple" />
    <x-form.input-error name="{{ str_replace('-', '.', $field) }}" />
  </div>
</div>
