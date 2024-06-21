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
        <x-breadcrumb :title="isset($register) ? __('Editar Banner') : __('Cadastrar Banner')"
          :routes="[['link' => route($route.'.index'), 'title' => __($module)]]" />
      </div>

      {{-- Conteúdo --}}
      <div class="card-body">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">

            <div class="row">
              <x-form.form-group-status name="status" :label="__('Status')" value="{{ $register->status ?? 0 }}" class="col col-md-6 mb-3" />
              <x-form.form-group name="ordem" :label="__('Ordem')" value="{{ $register->ordem ?? null }}" class="col col-md-6 mb-3" />

              <x-form.form-group-select name="type" :label="__('Tipo')" :data="$types" data-key="id" data-value="title" value="{{ $register->descr->type ?? null }}" class="mb-3" required />
            </div>

            <div class="row">
              <x-form.nav-lang>
                @foreach ($languages as $language)
                <div class="tab-pane fade show{{ $loop->first ? ' active' : ''}}" id="tab-lang-{{ $language->id }}-panel" role="tabpanel" aria-labelledby="tab-lang-{{ $language->id }}-panel">
                  <div class="row">

                    <x-form.form-group name="languages[{{ $language->id }}][title]" :label="__('Título')" value="{{ $register->descriptions[$language->id]->title ?? null }}" class="mb-3" />

                    <x-form.form-group name="languages[{{ $language->id }}][subtitle]" :label="__('Subtítulo')" value="{{ $register->descriptions[$language->id]->subtitle ?? null }}" class="mb-3" />

                    <x-form.form-group-textarea name="languages[{{ $language->id }}][text]" :label="__('Descrição')" :value="$register->descriptions[$language->id]->text ?? null" input-class="ckeditor" class="mb-3" />

                    <x-form.form-group name="languages[{{ $language->id }}][link]" :label="__('Link')" value="{{ $register->descriptions[$language->id]->link ?? null }}" class="mb-3" />

                    <x-form.form-group name="languages[{{ $language->id }}][label]" :label="__('Link Label')" value="{{ $register->descriptions[$language->id]->label ?? null }}" class="mb-3" />

                    <x-form.form-group-select name="languages[{{ $language->id }}][target]" :label="__('Abrir Link')" :data="$targets" data-key="id" data-value="title" value="{{ $register->descriptions[$language->id]->target ?? null }}" class="mb-3" />

                    <x-form.form-group-file name="languages[{{ $language->id }}][video]" :label="__('Vídeo MP4')" class="mb-3" :value="$register->descriptions[$language->id]->video ?? null" />

                    <div class="col-12 col-md-3 col-lg-2 mb-3">
                      <x-form.file value="{{ url_add_path('storage/banners/', $register->normalized_image ?? null) }}" name="languages[{{ $language->id }}][image]" :dim="$image_dim ?? null"
                        :button="__('Nova Imagem')" />
                    </div>

                  </div>
                </div>
                @endforeach
              </x-form.nav-lang>
            </div>
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

@push('scripts')
<script type="text/javascript" src="{{ asset('assets/cms/js/ckeditor.js') }}"></script>
<script type="text/javascript" src="{{ asset(mix('assets/cms/js/banners.js')) }}"></script>
@endpush
