@props([
  'name',
  'label'       => 'undefined',
  'register' => null,
  'required'    => false,
  'helper'      => null,
  'multiple'    => false,
  'options'     => [],
  'selected'    => [],
  'dataKey'     => 'uuid',
  'dataValue'   => 'name',
])

@php

  // eu realmente não sei pra que serve isso --Nishino
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\]|\_)/', '-', $name)),'-');

  $selectedIDs = [];

  try {
    //code...
    foreach( $selected as $item)
    {
      $selectedIDs[data_get($item, $dataKey)] = $item;
    }
  } catch (\Throwable $th) {
    error_log("select2 component exception: $name");
  }

  $fieldName = ($multiple) ? $name.'[]' : $name;

@endphp

<div class="row mb-3" >

  <div class="col col-12 col-lg-3">{{ $label }}</div>
  <div class="col col-12 col-lg-9">
    <select class="select2" name="{{$fieldName}}" @if($multiple) multiple @endif >
      @foreach( $options as $item )

      @php

      $selected = "";

      if ( isset($selectedIDs[ data_get($item, $dataKey) ])  ){
        $selected = "selected";
      }

      @endphp

      <option value="{{ data_get($item, $dataKey) }}" {{$selected}}>
        {{ data_get($item, $dataValue) }}
      </option>

      @endforeach
    </select>
  </div>

</div>

@once

  @push('css')
  <link rel="stylesheet" href="/assets/libs/select2/select2.css" />
  @endpush

  @push('scripts')
  <script src="/assets/libs/select2/select2.js"></script>
  <script src="{{asset(mix('/assets/components/form/select2.js'))}}"></script>
  @endpush

@endonce
