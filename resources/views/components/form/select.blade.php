@props([
  'name',
  'label'       => 'undefined',
  'placeholder' => null,
  'value'       => null,
  'data'        => [],
  'dataKey'     => 'uuid',
  'dataValue'   => 'name',
  'required'    => false,
  'helper'      => null,
  'multiple'    => null
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
  $old = trim(str_replace('--', '-', preg_replace('/(\[|\])/', '-', $name)),'-');

  if($value instanceof \Illuminate\Database\Eloquent\Collection){
    $new_value = [];
    foreach ($value as $each) {
      $new_value[] = $each->id;
    }

    $value = $new_value;
  }
@endphp

<select
  id="input-{{ $field }}"
  name="{{ $name }}"
  placeholder="{{ $placeholder ?? $label }}"
  {{ $attributes->class(['form-control', 'form-select'])->merge(['is-invalid' => $errors->has($name)]) }}
  {{ $required ? 'required' : null }}
  {{ $multiple ? 'multiple' : null }}
  >
  <option value="" {{ $multiple ? 'disabled' : null }}>{{ $placeholder ?? $label ?? __('Selecione') }}</option>
  @foreach($data as $row)
    <option value="{{ data_get($row, $dataKey) }}" {{ old(str_replace('-', '.', $old), (is_array($value) ? (in_array(data_get($row, $dataKey), $value) ? data_get($row, $dataKey) : null) : $value) ?? null) == data_get($row, $dataKey) ? 'selected' : '' }}>
      {{ data_get($row, $dataValue) }}
    </option>
  @endforeach
</select>

@if($helper)
<span class="small text-muted">{{ $helper }}</span>
@endif
