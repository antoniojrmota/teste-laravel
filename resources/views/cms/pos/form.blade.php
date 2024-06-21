@extends('cms.layouts.master', ['title' => __($module) ])

@section('content')

@if ($message = session('message'))
<x-alert type="success" :message="$message" class="mb-4" />
@elseif (!$errors->isEmpty())
<x-alert type="danger" :message="$errors->all()" class="mb-4" />
@endif

<div class="card">
  <form id="form.{{ $route }}" action="{{ route($route.(isset($uuid) ? '.update' : '.store'), $uuid ?? null) }}"
    method="POST" enctype="multipart/form-data">
    @csrf
    @if(isset($register))
    @method('PUT')
    @endif

    {{-- Cabeçalho --}}
    <div class="card-header bg-white">
      <x-breadcrumb :title="isset($register) ? __('Editar Representante') : __('Cadastrar Representante')"
        :routes="[['link' => route($route.'.index'), 'title' => __($moduleTitle)]]" />
    </div>

    {{-- Conteúdo --}}
    <div class="card-body">

      <div class="row">
        <x-form.form-group-status name="status" :label="__('Status')" value="{{ $register->status ?? 0 }}"
          class="col col-12 mb-3" />
        <x-form.form-group name="ordem" :label="__('Ordem')" value="{{ $register->order_by ?? null }}"
          class="col col-12 mb-3" />
        <x-form.form-group-select name="area" :label="__('Atividade')" :data="$areas" data-key="id" data-value="title"
          value="{{ $register->area ?? null }}" class="mb-3" />
        <x-form.form-group name="name" value="{{ $register->name ?? null }}" :label="__('Nome')" class="col-12 mb-3" />
        <x-form.form-group name="site" value="{{ $register->site ?? null }}" :label="__('Site')" class="col-12 mb-3" />
        <x-form.form-group type="email" name="email" value="{{ $register->email ?? null }}" :label="__('Email')"
          class="col-12 mb-3" />
        <x-form.form-group type="email" name="email_negotiator" value="{{ $register->email_negotiator ?? null }}"
          :label="__('Email Negociador')" class="col-12 mb-3" />
        <x-form.form-group name="phone" value="{{ $register->phone ?? null }}" :label="__('Phone 1')"
          class="col-12 mb-3" />
        <x-form.form-group name="phone2" value="{{ $register->phone2 ?? null }}" :label="__('Phone 2')"
          class="col-12 mb-3" />

        <x-form.address :register="$register ?? null" :countries="$countries" :states="$states" />
      </div>

      {{-- Ações --}}
      <div class="card-footer bg-white text-center">
        <x-form.actions :register="$register ?? null" key="id" />
      </div>
  </form>
</div>
@endsection

{{--@push('scripts')
<script type="text/javascript" src="{{ asset('assets/cms/js/ckeditor.js') }}"></script>
<script type="text/javascript" src="{{ asset(mix('assets/cms/js/banners.js')) }}"></script>
@endpush--}}