@extends('cms.layouts.master', ['title' => __($module)])

@section('content')
<div class="card">
  <form id="form-user" action="{{ isset($register) ? route($route.'.update', $register->uuid) : route($route.'.store') }}" method="POST">
    @csrf
    @if(isset($register))
      @method('PUT')
    @endif

    {{-- Cabeçalho --}}
    <div class="card-header bg-white">
      <x-breadcrumb
        :title="isset($register) ? __('Editar Usuário') : __('Cadastrar Usuário')"
        :routes="[['link' => route($route.'.index'), 'title' => __($module)]]"
        />
    </div>

    {{-- Conteúdo --}}
    <div class="card-body">
      <div class="bg-primary rounded-top lh-1">&nbsp;</div>
      <div class="p-3 rounded-bottom border border-top-0">
        <div class="row">
          <div class="col-12 col-lg-6">
            <x-form.form-group-status name="status" :label="__('Status')" value="{{ $register->status ?? 0 }}" class="mb-3" />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6">
            <x-form.form-group name="name" :label="__('Nome')" value="{{ $register->name ?? null }}" class="mb-3" required />
            <x-form.form-group name="password" type="password" :label="__('Senha')" class=" mb-3" :required="!isset($register)" />
          </div>
          <div class="col-12 col-lg-6">
            <x-form.form-group name="email" type="email" :label="__('E-mail')" value="{{ $register->email ?? null }}" class="mb-3" required />
            {{-- <x-form.form-group name="phone" :label="__('Telefone')" value="{{ $register->phone ?? null }}" class="mb-3" required /> --}}
          </div>
        </div>
        @if(auth()->user()->hasRoleSystem(\App\Models\Role::MASTER))
          <div class="form-group mb-3">
            <label for="input-role">{{ __('Grupo') }}</label>
            <select id="input-role" name="role" class="form-control">
              <option value="">{{ __('Selecione') }}</option>
              @foreach ($roles as $role)
                <option value="{{ $role->name }}" data-permissions="{{ $role->_permissions }}" {{ old('role', $register->_role ?? null) == $role->name ? 'selected' : '' }}>{{ $role->name }}</option>
              @endforeach
            </select>
          </div>
          <div class="form-group mb-3">
            <label for="input-name">{{ __('Permissões') }}</label>
            <div class="list-group shadow">
              @foreach($permissions as $modules)
                <div class="list-group-item">
                  <div class="row align-items-center">
                    <div class="col text-primary fw-bold">
                      {{ $modules[0]->module }}
                    </div>
                    @foreach($modules as $permission)
                      <div class="col col-auto">
                        <label class="mb-0">
                          <input type="checkbox" name="permissions[]" value="{{ $permission->id }}" {{ in_array($permission->id, old('permissions', $register->_permissions ?? [])) ? ' checked' : '' }} />
                          {{ str_replace(' '.$modules[0]->module, '', $permission->name) }}
                        </label>
                      </div>
                    @endforeach
                  </div>
                </div>
              @endforeach
            </div>
          </div>
        @endif
      </div>
    </div>

    {{-- Ações --}}
    <div class="card-footer bg-white text-center">
      <x-form.actions />
    </div>
  </form>
</div>

@endsection

@push('scripts')
  <script src="{{ asset('assets/libs/inputmask/jquery.inputmask.min.js') }}"></script>
  <script src="{{ asset(mix('assets/cms/js/user.js')) }}"></script>
@endpush
