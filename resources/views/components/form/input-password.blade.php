@props([
  'name',
  'label'       => 'undefined',
  'placeholder' => null,
  'value'       => null,
  'required'    => false,
  'helper'      => null
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
@endphp

<div class="input-group auth-pass-inputgroup">
  <x-form.input
    :name="$name"
    type="password"
    placeholder="{{ $placeholder ?? $label }}"
    {{ $attributes->class(['form-control'])->merge(['is-invalid' => $errors->has($name)]) }}
    :required="$required" />
  <button class="btn btn-light password-addon" type="button"><i class="mdi mdi-eye-outline"></i></button>
</div>

@if($helper)
<span class="small text-muted">{{ $helper }}</span>
@endif
