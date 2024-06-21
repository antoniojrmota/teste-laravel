@extends('cms.layouts.master', ['title' => __($module) ])

@section('content')
<div class="card">
  <form action="{{ isset($register) ? route($route.'.update', $register->uuid) : route($route.'.store') }}" method="POST">
    @csrf
    @if(isset($register))
      @method('PUT')
    @endif

    {{-- Cabeçalho --}}
    <div class="card-header bg-white">
      <x-breadcrumb
        :title="isset($register) ? __('Editar Grupo') : __('Cadastrar Grupo')"
        :routes="[['link' => route($route.'.index'), 'title' => __($module)]]"
        />
    </div>

    {{-- Conteúdo --}}
    <div class="card-body">
      <div class="bg-primary rounded-top lh-1">&nbsp;</div>
      <div class="p-3 rounded-bottom border border-top-0">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <div class="row">
            <div class="col-12 col-lg-6">
              <x-form.form-group-status name="status" :label="__('Status')" value="{{ $register->status ?? 0 }}" class="mb-3" />
              <x-form.form-group name="name" :label="__('Nome')" value="{{ $register->name ?? null }}" class="mb-3" required />
              <div class="row mb-3">
                <div class="col-12 col-lg-3">
                  <x-form.label for="system-1" value="{{ __('Painel') }}" />
                </div>
                <div class="col">
                  <div class="d-flex">
                    <div class="btn-group" role="group" aria-label="{{ __('Painel') }}">
                      @foreach($panels as $panel)
                        <input type="radio" class="btn-check" name="system" value="{{ $panel->id }}" id="input-system-{{ $panel->id }}" autocomplete="off" {{ old('system', $register->system->id ?? null) == $panel->id ? 'checked' : '' }}>
                        <label for="input-system-{{ $panel->id }}" class="btn btn-sm btn-outline-primary">
                          {{ $panel->name }}
                        </label>
                      @endforeach
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="input-name">{{ __('Permissões') }}</label>
            <div class="list-group shadow">
            @foreach($permissions as $modules)
              <div class="list-group-item">
                <div class="row align-items-center">
                  <div class="col text-primary fw-bold">
                    {{ __($modules[0]->module) }}
                  </div>
                  @foreach($modules as $permission)
                  <div class="col col-auto">
                    <label class="mb-0">
                      <input type="checkbox" name="permissions[]" value="{{ $permission->id }}" {{ isset($register) && in_array($permission->id, $rolePermissions) ? ' checked' : '' }} />
                      {{ __(str_replace(' '.$modules[0]->module, '', $permission->name)) }}
                    </label>
                  </div>
                  @endforeach
                </div>
              </div>
            @endforeach
            </div>
          </div>
        </div>
      </div>
    </div>

    {{-- Ações --}}
    <div class="card-footer bg-white text-center">
      <x-form.actions />
    </div>
  </form>
</div>
@endsection
