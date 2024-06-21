@props(['name'])

@php
  $field = trim(str_replace('..', '.', preg_replace('/(\[|\])/', '.', $name)),'.');
@endphp

@error($field)
  <div {{ $attributes->merge(['class' => 'small text-danger']) }}>{{ $message }}</div>
@enderror
