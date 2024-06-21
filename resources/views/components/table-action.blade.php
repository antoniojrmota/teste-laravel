@props([
  'register'   => null,
  'primaryKey' => null,
  'action'     => [
    'type' => null
  ]
])

@php
  $link = '#';
  if(isset($action['route']))
    if($action['route'] instanceof \Closure)
      $link = $action['route']($register);
    else
      $link = route($action['route'], data_get($register, $primaryKey));
  else if(isset($action['field']))
    $link = data_get($register, $action['field']);
  else if(isset($action['method']))
    $link = $register->{$action['method']['name']}($action['method']['params'] ?? null);
  else if(isset($action['url']))
    $link = $action['url'];

@endphp
@if($action['type'] == 'link')
  <a href="{{ $link }}"
    class="btn btn-link d-block text-start" target="{{$action['target'] ?? '_self'}}">
    <i class="{{ $action['icon'] }}"></i>
    {{ $action['name'] }}
  </a>
@elseif($action['type'] == 'delete')
  <form action="{{ $link }}"
    class="d-inline"
    method="POST">
    @csrf
    @method('DELETE')
    <button
      type="submit"
      class="btn btn-link d-block text-decoration-none text-start btn-delete">
      <i class="{{ $action['icon'] }}"></i>
      {{ $action['name'] }}
    </button>
  </form>
@endif
