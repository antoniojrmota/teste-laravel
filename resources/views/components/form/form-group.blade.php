{{--
  Para definir propriedades separadas dos atributos
  você deve informá-las em props, pode inclusive definir valores padrões
  Lembre-se: pascal-casing => pascalCasing
--}}
@props([
  'name',
  'type'        => 'text',
  'maxlength'   => null,
  'label'       => 'undefined',
  'inputClass'  => null,
  'labelClass'  => 'col-lg-3',
  'required'    => false,
  'readonly'    => false,
  'placeholder' => null,
  'value'       => null,
  'helper'      => null,
  'dataList'    => null
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
  $old = trim(str_replace('--', '-', preg_replace('/(\[|\])/', '-', $name)),'-');
@endphp

<div {{ $attributes->class(['row','align-items-center']) }}>
  <div class="col-12 {{ $labelClass }}">
    <x-form.label for="input-{{ $field }}" value="{{ $label }}" />
  </div>
  <div class="col">
    @if($type == 'password')
      <x-form.input-password :name="$name" :type="$type" :value="$value" :placeholder="$placeholder ?? $label" :class="$inputClass" :maxlength="$maxlength" :required="$required" :helper="$helper" />
    @else
      <x-form.input :name="$name" :type="$type" :value="$value" :placeholder="$placeholder ?? $label" :class="$inputClass" :maxlength="$maxlength" :required="$required" :helper="$helper" :readonly="$readonly" :data-list="$dataList" />
    @endif
    {{ $slot }}
    <x-form.input-error name="{{ str_replace('-', '.', $old) }}" />
  </div>
</div>
