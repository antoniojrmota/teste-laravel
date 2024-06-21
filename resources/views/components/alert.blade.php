@props([
  'type' => 'info',
  'message'
])

<div {{ $attributes->merge(['class' => 'alert alert-'.$type]) }}>
  @if(is_array($message))
    <ul class="list-unstyled mb-0">
    @foreach($message as $msg)
      <li>{{ $msg }}</li>
    @endforeach
    </ul>
  @else
  {{ $message }}
  @endif
</div>
