@props([
  'label'  => null,
  'button' => null,
  'value'  => null,
  'name'   => 'file',
  'dim'    => '200x200',
])

@php
  $field = trim(str_replace('--', '-', preg_replace('/(\[|\])/', '-', $name)),'-');

  $remove = $name.'_remove';
  if(strpos($name, ']') !== false)
    $remove = preg_replace("/]$/i", "_remove]", $name);
@endphp

<div class="text-center" x-data="{photoName: null, photoPreview: '{{$value}}', removeFile: null}">
  <input type="hidden" name="{{ $remove }}" x-ref="removeFile" value="0" />
  <input type="file"
    id="input-{{ $field }}"
    name="{{ $name }}"
    class="d-none"
    x-ref="photo"
    x-on:change="
      photoName = $refs.photo.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => {
          photoPreview = e.target.result;
          removeFile = 0;
      };
      reader.readAsDataURL($refs.photo.files[0]);
    " />

  @if($label)
    <x-form.label for="input-{{ $field }}" value="{{ $label }}" />
  @endif

  <x-form.label x-show="!photoPreview" for="input-{{ $field }}">
    <div class="mt-2 border rounded">
    </div>
    <span class="btn d-block border mt-2">{{ $button ?? $label }}</span>
  </x-form.label>

  <div class="mt-2" x-show="photoPreview">
    <span class="d-block m-auto"
      x-bind:style="'background-size: cover; width: 7rem; height: 7rem; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'">
    </span>
    <button
      type="button"
      class="btn d-block border m-auto mt-2"
      x-show="!removeFile"
      x-on:click="
        removeFile = 1;
        photoPreview = null;
        $refs.removeFile.value = removeFile;
      ">
      {{ __('Remover') }}
    </button>
  </div>

</div>

@push('scripts')
  <script defer src="https://unpkg.com/alpinejs@3.2.2/dist/cdn.min.js"></script>
@endpush
