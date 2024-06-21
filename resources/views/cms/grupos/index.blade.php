@extends('cms.layouts.master', ['title' => __($module) ])

@section('content')
<div class="card">
  {{-- Cabeçalho --}}
  <div class="card-header bg-white">
    <x-breadcrumb :title="__($moduleTitle)" />
  </div>

  {{-- Conteúdo --}}
  <div class="card-body pt-0">
    <x-table :table="$table">
      <x-slot name="filters">
        <x-table-filters :filters="$table['filters']" :model="$model" can="create" :route="$route.'.create'" :button-name="__('Novo Grupo')" icon="bx bx-plus" />
      </x-slot>
    </x-table>
  </div>
</div>
@endsection
