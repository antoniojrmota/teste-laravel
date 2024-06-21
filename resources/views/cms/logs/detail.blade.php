@extends('cms.layouts.master', ['title' => __('Links') ])

@section('content')
  @component('components.breadcrumb', [
    'routes' => [
      [
        'link' => route($route.'.index'),
        'title' => __('Logs')
      ]
    ],
    'title' => __('Detalhamento de Log')
  ])
  @endcomponent

  @if ($message = session('message'))
    <x-alert type="success" :message="$message" class="mb-4" />
  @elseif (!$errors->isEmpty())
    <x-alert type="danger" :message="$errors->all()" class="mb-4" />
  @endif

  <div class="card">
  <div class="card-body">

  <h2>{{$log->description}}</h2>
  <p>Model: {{$log->subject_type}} [ID {{$log->subject_id}}]</p>

  <p>
    User:
    <a href="/cms/usuarios/{{$causer->uuid}}">
      {{ $causer->name }}
      &lt; {{ $causer->email }}  &gt;
    </a>
  </p>

  @if( $log->properties['attributes'] )
  <table class="table table-striped">

    <thead>
    <tr>
      <td>CAMPO</td>

      @if(isset($log->properties['old']))

      <td>ANTES</td>
      @endif

      <td>MUDANÇA</td>

    </tr>
  </thead>

  <tbody>

  @foreach( $log->properties['attributes'] as $attr=>$val )

  <tr>
    <td>{{ $attr }}</td>

    @if(isset($log->properties['old']))

    <td>{{ $log->properties['old'][$attr] ?? "NULL" }}</td>
    @endif

    <td>{{ $val }}</td>

  </tr>

  @endforeach

  </tbody>
  </table>
  @endif

  </div>
  </div>

@endsection

