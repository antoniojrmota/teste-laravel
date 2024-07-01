@extends('cms.layouts.master', ['title' => __($module) ])

@section('content')

  @if ($message = session('message'))
    <x-alert type="success" :message="$message" class="mb-4" />
  @elseif (!$errors->isEmpty())
    <x-alert type="danger" :message="$errors->all()" class="mb-4" />
  @endif

  <div class="card">
    <form id="form.{{ $route }}" class="mustValidate" action="{{ route($route.(isset($uuid) ? '.update' : '.store'), $uuid ?? null) }}" method="POST" enctype="multipart/form-data">
      @csrf
      @if(isset($register))
        @method('PUT')
      @endif

      {{-- Cabeçalho --}}
      <div class="card-header bg-white">
        <x-breadcrumb :title="isset($register) ? __('Editar Empresa') : __('Cadastrar Empresa')"
          :routes="[['link' => route($route.'.index'), 'title' => __($module)]]" />
      </div>

      {{-- Conteúdo --}}
      <div class="card-body">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">

            <div class='row'>
              <x-form.form-group-status name="status" :label="__('Status')" value="{{ $register->status ?? 0 }}" class="col col-md-6 mb-3" />

              <x-form.form-group name="order_by" :type="'number'" :label="__('Ordem')" value="{{ $register->order_by ?? null }}" class="col col-md-6 mb-3" />

              <div class="col-12 col-md-3 col-lg-2 mb-3">
                <x-form.file value="{{ url_add_path('uploads/', $register->image ?? null) }}" name="image" :dim="$image_dim ?? null"
                  :button="__('Nova Imagem')" />
              </div>
            </div>

            <x-form.nav-lang>
              @foreach ($languages as $language)
              <div class="tab-pane fade show{{ $loop->first ? ' active' : ''}}" id="tab-lang-{{ $language->id }}-panel" role="tabpanel" aria-labelledby="tab-lang-{{ $language->id }}-panel">

                <div class="row">

                  <x-form.form-group
                    name="languages[{{ $language->id }}][title]"
                    :label="__('Título')"
                    :value="$register->descriptions[$language->id]->title ?? null"
                    class="col col-12 col-md-12 mb-3"
                  />

                  <x-form.form-group
                    name="languages[{{ $language->id }}][link]"
                    :label="__('Link')"
                    :value="$register->descriptions[$language->id]->link ?? null"
                    class="col col-12 col-md-12 mb-3"
                  />

                </div>

              </div>
              @endforeach
            </x-form.nav-lang>
          </div>
        </div>
      </div>

      {{-- Ações --}}
      <div class="card-footer bg-white text-center">
        <x-form.actions :register="$register ?? null" key="id" />
      </div>
    </form>
  </div>
@endsection
