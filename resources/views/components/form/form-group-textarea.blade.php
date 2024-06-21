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
  'labelClass'  => 'col-lg-3',
  'required'    => false,
  'readonly'    => false,
  'placeholder' => null,
  'value'       => null,
  'helper'      => null
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
  $old = trim(str_replace('--', '-', preg_replace('/(\[|\])/', '-', $name)),'-');
@endphp

<div {{ $attributes->class(['row','align-items-top']) }}>

  <div class="col-12 {{ $labelClass }}">
    <x-form.label for="input-{{ $field }}" value="{{ $label }}" />
  </div>

  <div class="col">
    <textarea id="input-{{ $field }}" style="width: 100%; height: 200px" name="{{$name}}" type="textarea" class="{{$inputClass}}" @if($required)required @endif :helper="$helper" :readonly="$readonly" >{{old(str_replace('-', '.', $old), $value)}}</textarea>
    {{ $slot }}
    <x-form.input-error name="{{ str_replace('-', '.', $old) }}" />
  </div>

</div>
