@props([
  'register',
  'column' => [
    'column' => 'id',
    'type'   => null,
  ]
])

@php
  if($column['column'] instanceof \Closure)
    $result = call_user_func($column['column'], $register);
  else
    $result = data_get($register, $column['column']);
@endphp

@if($column['type'] == 'text')
  {!! $result !!}

@elseif($column['type'] == 'list')
  @foreach($result as $row)
    <div class="col">
      @if($row['icon'] ?? false)
        <i class="{{ $row['icon'] }}"></i>
      @endif
      {{ $row['value'] ?? $row }}
    </div>
  @endforeach

@elseif($column['type'] == 'image')
  <img src="{{ $result }}" class="img-thumbnail rounded d-block" width="{{ $column['size'] ?? 75 }}" onerror="this.src='{{ asset('assets/cms/img/no-image.png') }}';" />

@elseif($column['type'] == 'status')

  <span class="p-2 rounded-pill badge {{ $result ? 'bg-primary' : 'bg-secondary' }} ">
    {{ $result ? 'Ativo' : 'Inativo' }}
  </span>

@elseif($column['type'] == 'progress')
  @if($result['total_legend'] ?? false)
    <div class="mb-1 fw-bold">{{ $result['total_legend'] }}</div>
  @endif
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuemin="0"
      aria-valuenow="{{ $result['used'] }}" aria-valuemax="{{ $result['total'] }}"
      style="width: {{ $result['total'] > 0 ? ceil($result['used']*100 / $result['total']) : 0 }}%">
    </div>
  </div>
  @if($result['used_legend'] ?? false)
    <div class="mt-1 fs-6 text-muted">{{ $result['used_legend'] }}</div>
  @endif

@elseif($column['type'] == 'link')
  <a href="{{ $result['href'] }}" target="{{ $result['target'] ?? '_self' }}"
    class="{{ $column['class'] ?? 'text-primary' }}">
    {{ $result['name'] ?? '??' }}
  </a>

@elseif(in_array($column['type'], ['date', 'date2','datetime', 'document', 'phone', 'postcode']))
  {{ text_format($column['type'], $result) }}

@else
  {{ $result }}

@endif
