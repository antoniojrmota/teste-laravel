@extends('cms.layouts.master', ['title' => __($module) ])

@section('content')
<div class="card">
  {{-- Cabeçalho --}}
  <div class="card-header bg-white">
    <x-breadcrumb :title="__($moduleTitle)" />
  </div>

  {{-- Conteúdo --}}
  <div class="card-body pt-0">

    <a href="{{ route($route.'.create') }}" class="mb-3 btn btn-primary">
      <i class="bx bx-plus"></i>
      {{ __('Cadastrar') }}
    </a>

    <x-table :table="$table">
      <x-slot name="filters">
        <x-table-filters :model="$model" :filters="$table['filters']" icon="bx bx-plus" />
      </x-slot>
    </x-table>
  </div>
</div>
@endsection
