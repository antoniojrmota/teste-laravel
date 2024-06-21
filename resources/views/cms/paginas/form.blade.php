@extends('cms.layouts.master', ['title' => __($module) ])

@section('content')

  @if ($message = session('message'))
    <x-alert type="success" :message="$message" class="mb-4" />
  @elseif (!$errors->isEmpty())
    <x-alert type="danger" :message="$errors->all()" class="mb-4" />
  @endif

  <div class="card">
    <form id="form.{{ $route }}" action="{{ route($route.(isset($uuid) ? '.update' : '.store'), $uuid ?? null) }}" method="POST" enctype="multipart/form-data">
      @csrf
      @if(isset($register))
        @method('PUT')
      @endif

      {{-- Cabeçalho --}}
      <div class="card-header bg-white">
        <x-breadcrumb :title="isset($register) ? __('Editar Produto') : __('Cadastrar Produto')"
          :routes="[['link' => route($route.'.index'), 'title' => __($module)]]" />
      </div>

      {{-- Conteúdo --}}
      <div class="card-body">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <x-form.form-group-status name="status" :label="__('Status')" value="{{ $register->status ?? 0 }}" class="mb-3" />
            {{-- <x-form.form-group-status name="protect" :label="__('Proteger Página?')" value="{{ $register->protect ?? 0 }}" class="mb-3" /> --}}

            <x-form.form-group name="area" :label="__('Área')" value="{{ $register->descr->area ?? null }}" class="mb-3" :data-list="$areas ?? null" required />
            <x-form.form-group name="subarea" :label="__('Subárea')" value="{{ $register->descr->subarea ?? null }}" class="mb-3" :data-list="$subareas ?? null" />
            <x-form.form-group name="slug" :label="__('Slug Interno')" value="{{ $register->slug ?? null }}" class="mb-3" :required="true" />

            <div class="row align-items-center mb-3">
              <div class="col-12 col-lg-3">
                <label for="input-image-width">{{ __('Dimensões das Imagens') }}</label>
              </div>
              <div class="col-xs-6 col-md-2">
                <x-form.input name="image_width" type="number" :label="__('Largura Imagem')" value="{{ $register->image_width ?? 2000 }}" />
              </div>
              <div class="col-xs-6 col-md-2">
                <x-form.input name="image_height" type="number" :label="__('Altura Imagem')" value="{{ $register->image_height ?? 757 }}" />
              </div>
            </div>

          </div>
          <x-form.nav-lang>
            @foreach ($languages as $language)
            <div class="tab-pane fade show{{ $loop->first ? ' active' : ''}}" id="tab-lang-{{ $language->id }}-panel" role="tabpanel" aria-labelledby="tab-lang-{{ $language->id }}-panel">
              <div class="row">
                <x-form.form-group name="languages[{{ $language->id }}][title]" :label="__('Título')" value="{{ $register->descriptions[$language->id]->title ?? null }}" class="mb-3" />
                <x-form.form-group name="languages[{{ $language->id }}][subtitle]" :label="__('Subtítulo')" value="{{ $register->descriptions[$language->id]->title ?? null }}" class="mb-3" />
                <x-form.form-group-textarea name="languages[{{ $language->id }}][text]" :label="__('Descrição')" :value="$register->descriptions[$language->id]->text ?? null" input-class="ckeditor" class="mb-3" />
                <x-form.form-group name="languages[{{ $language->id }}][youtube_id]" :label="__('Youtube ID')" value="{{ $register->descriptions[$language->id]->youtube_id ?? null }}" class="mb-3" />
                <x-form.form-group name="languages[{{ $language->id }}][link]" :label="__('Link')" value="{{ $register->descriptions[$language->id]->link ?? null }}" class="mb-3" />
                <x-form.form-group name="languages[{{ $language->id }}][link_label]" :label="__('Link Label')" value="{{ $register->descriptions[$language->id]->link_label ?? null }}" class="mb-3" />

                <x-form.form-group-file name="languages[{{ $language->id }}][archive]" :label="__('Arquivo')" class="mb-3" :value="$register->descriptions[$language->id]->archive ?? null" />

                <div class="col-12 col-md-3 col-lg-2 mb-3">
                  <x-form.file value="{{ url_add_path('storage/paginas/', $register->descriptions[$language->id]->image ?? null) }}" name="languages[{{ $language->id }}][image]" dim="{{ (($register->image_width ?? null) && ($register->image_height ?? null)) ? $register->image_width.'x'.$register->image_height : '1980x757' }}" :button="__('Nova Imagem')" />
                </div>
              </div>
            </div>
            @endforeach
          </x-form.nav-lang>
        </div>
      </div>

      {{-- Ações --}}
      <div class="card-footer bg-white text-center">
        <x-form.actions :register="$register ?? null" key="id" />
      </div>
    </form>
  </div>
@endsection

@push('scripts')
<script type="text/javascript" src="/assets/cms/js/ckeditor.js"></script>
<script type="text/javascript" src="{{ asset(mix('assets/cms/js/paginas.js')) }}"></script>
@endpush
