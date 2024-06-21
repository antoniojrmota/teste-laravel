@props([
  'name',
  'label'       => 'undefined',
  'register' => null,
  'required'    => false,
  'helper'      => null,
  'multiple'    => false
])

@php

  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');

  $partes = explode("-", $name);

  $lat = $partes[0];
  $lng = $partes[1];

@endphp

<div class="row mb-3" >

  <div class="col col-12 col-lg-3">{{ $label }}</div>
  <div class="col col-12 col-lg-9">
    <input type="hidden" name="{{$lat}}" value="{{ $register->$lat ?? null }}" />
    <input type="hidden" name="{{$lng}}" value="{{ $register->$lng ?? null }}" />
    <div class="geo-point" data-name="{{$name}}"></div>
  </div>

</div>

@once
  @push('scripts')
  <script src="{{ asset(mix('assets/components/form/geo-point.js')) }}"></script>
  @endpush
@endonce
