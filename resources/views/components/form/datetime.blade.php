@props([
  'name',
  'label'       => 'undefined',
  'register' => null,
  'required'    => false,
  'helper'      => null
])

@php

  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');

  $value = $register->$name ?? null;

  if ( $value != null )
  {
    $partes = explode(" ", $value);
    $value = $partes[0]."T".substr($partes[1], 0, 5);
  }

@endphp

<div class="row mb-3" >

  <div class="col col-12 col-lg-3">{{ $label }}</div>
  <div class="col col-12 col-lg-9">
    <input type="datetime-local" name="{{$name}}" value="{{ $value }}" />
  </div>

</div>
