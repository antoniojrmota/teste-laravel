{{--
  Para definir propriedades separadas dos atributos
  você deve informá-las em props, pode inclusive definir valores padrões
  Lembre-se: pascal-casing => pascalCasing
--}}
@props([
  'name',
  'label'         => 'undefined',
  'labelClass'    => 'col-lg-3',
  'required'      => false,
  'placeholder'   => null,
  'multiple'      => null,
  'value'         => null,
  'forceRequired' => 0,
  'helper'        => null,
  'accept'        => null,
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');
  $old = str_replace('-', '.', $field);
  $value = empty($value) ? null : $value;

  $remove = $name.'_remove';
  if(strpos($name, ']') !== false)
    $remove = preg_replace("/]$/i", "_remove]", $name);
@endphp

<div {{ $attributes->class(['row', 'align-items-center', 'input-file']) }}>

  <div class="col-12 {{ $labelClass }}">
    <x-form.label for="input-{{ $field }}" value="{{ $label }}" />
  </div>

  <label class="col d-flex mb-0">
    <span class="form-control overflow-hidden text-nowrap text-truncate text-muted"
      data-placeholder="{{ $placeholder ?? $label }}">
      {{ $value ?? $placeholder ?? $label }}
    </span>
    <span class="input-group-btn">
      <span class="btn btn-primary" data-force-required="{{ $forceRequired ? 1 : 0 }}">{{ trans(!$value ? 'javascript.fileInput.add' : 'javascript.fileInput.remove') }}</span>
      <input id="input-{{ $field }}"
        name="{{ $name }}"
        class="d-none"
        data-old="{{ $value ? 'yes' : 0 }}"
        {{ $multiple ? 'required' : null }}
        {{ $required ? 'required' : null }}
        accept="{{$accept ?? null}}"
        type="file">
      <input id="input-{{ $field }}-remove" type="hidden" name="{{ $remove }}" value="0" />
    </span>
  </label>
  @if($helper)
    <span class="small text-muted">{{ $helper }}</span>
  @endif
  <x-form.input-error name="{{ $old }}" />
</div>




@once
  @push('scripts')
  <script src="{{ asset(mix('assets/components/form/form-group-file.js')) }}"></script>
  @endpush
@endonce
