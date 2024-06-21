@props([
  'name',
  'label'        => 'undefined',
  'placeholder'  => null,
  'value'        => '',
  'helper'       => null,
  'autoComplete' => 'on',
  'dataList'     => null,
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
  $old = trim(str_replace('--', '-', preg_replace('/(\[|\])/', '-', $name)),'-');
@endphp

<input id="input-{{ $field }}"
  name="{{ $name }}"
  value="{{ old(str_replace('-', '.', $old), $value ?? null) }}"
  placeholder="{{ $placeholder ?? $label }}"
  autocomplete="{{$autoComplete}}"
  {{ $attributes->class(['form-control'])->merge(['is-invalid' => $errors->has($name)]) }}
  @if( is_array($dataList) ) list="datalist-{{ $field }}" @endif/>

@if( $dataList )
<datalist id="datalist-{{ $field }}">
  @foreach ($dataList as $item)
  <option value="{{ $item }}" />
  @endforeach
</datalist>
@endif

@if($helper)
<span class="small text-muted">{{ $helper }}</span>
@endif
