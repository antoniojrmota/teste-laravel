@props([
  'name',
  'val',
  'placeholder' => null,
  'helper'      => null,
  'autoComplete' => 'on'
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
  $old = trim(str_replace('--', '-', preg_replace('/(\[|\])/', '-', $name)),'-');
@endphp

<textarea id="input-{{ $field }}"
  name="{{ $name }}"
  placeholder="{{ $placeholder ?? $label }}"
  autocomplete="{{$autoComplete}}"
  {{ $attributes->class(['form-control'])->merge(['is-invalid' => $errors->has($name)]) }}
  >{{ old(str_replace('-', '.', $old), $val) }}</textarea>


@if($helper)
<span class="small text-muted">{{ $helper }}</span>
@endif
