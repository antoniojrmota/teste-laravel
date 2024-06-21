@extends('cms.layouts.master-without-nav', ['title' => __('Registro'), 'localization' => true ])

@section('content')

  <div class="mb-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="mb-5 col-12 col-md-8">
          <div class="text-center">
            <div class="my-3 text-center">
              @svg('site-ezoom', ['class' => 'w-50'])
              {{-- <img src="{{ asset('assets/cms/img/LogoLT.png') }}" alt="logo"> --}}
            </div>
            <div class="mb-4">
              <h1 class="h6 text-primary fw-bold mb-0">{{ __('Olá, identificamos que este é seu primeiro acesso!') }}</h1>
              {{ __('Para garantir uma melhor experiência, preencha as informações abaixo:') }}
            </div>
            <p>{{__('Já tem um cadastro ?')}} <a href="{{route('login', ['back' => "/tag/{$code}"])}}">{{__('Clique aqui para entrar.')}}</a></p>
          </div>
          <div class="card overflow-hidden">
            <div class="card-body">
              <div class="p-2">
                <form method="POST" class="form-horizontal" action="{{ route('auth.register.save') }}" enctype="multipart/form-data">
                  @csrf
                  <input type="hidden" name="code" value="{{ $code }}" />
                  <div class="row">

                    <div class="col-12 col-md-6 mb-3">
                      <label for="input-name" class="form-label">{{ __('Nome') }}</label>
                      <input id="input-name" type="text" class="form-control @error('name') is-invalid @enderror"
                        value="{{ old('name') }}" name="name" placeholder="{{ __('Digite seu nome') }}" autofocus required>
                      @error('name')
                        <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                        </span>
                      @enderror
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                      <label for="input-email" class="form-label">{{ __('E-mail') }}</label>
                      <input id="input-email" type="email" class="form-control @error('email') is-invalid @enderror"
                        value="{{ old('email') }}" name="email" placeholder="{{ __('Digite seu e-mail') }}" autofocus required>
                      @error('email')
                        <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                        </span>
                      @enderror
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                      <label for="input-phone" class="form-label">{{ __('Telefone') }}</label>
                      <input id="input-phone" type="text" class="form-control @error('email') is-invalid @enderror"
                        value="{{ old('phone') }}" name="phone" placeholder="{{ __('Digite seu telefone') }}" autofocus required>
                      @error('phone')
                        <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                        </span>
                      @enderror
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                      <label for="datepicker">{{ __('Aniversário') }}</label>
                      <div class="input-group">
                        <input id="datepicker" type="text" class="form-control @error('dob') is-invalid @enderror"
                          value="{{ old('dob') }}" name="dob" placeholder="{{ __('Informe seu aniversário') }}" required>
                        <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                        @error('dob')
                          <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                      </div>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                      <label id="input-password" class="form-label">{{ __('Senha')}}</label>
                      <div
                        class="input-group auth-pass-inputgroup @error('password') is-invalid @enderror">
                        <input type="password" name="password"
                          class="form-control  @error('password') is-invalid @enderror"
                          id="input-password" value="" placeholder="{{ __('Digite sua senha') }}"
                          aria-label="{{ __('Digite sua senha') }}" aria-describedby="password-addon" required>
                        <button class="btn btn-light password-addon" type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                        @error('password')
                          <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                      </div>
                    </div>

                    <div class="col-12 col-md-6 mb-3">
                      <label id="input-password-c" class="form-label">{{ __('Confirme a Senha') }}</label>
                      <div
                        class="input-group auth-pass-inputgroup @error('password') is-invalid @enderror">
                        <input type="password" name="password_confirmation"
                          class="form-control  @error('password') is-invalid @enderror"
                          id="input-password-c" value="" placeholder="{{ __('Confirme sua senha') }}"
                          aria-label="{{ __('Confirme a Senha') }}" aria-describedby="password-addon-c" required>
                        <button class="btn btn-light password-addon" type="button" id="password-addon-c"><i class="mdi mdi-eye-outline"></i></button>
                        @error('password_confirmation')
                          <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                          </span>
                        @enderror
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 d-grid">
                    <button class="btn btn-primary waves-effect waves-light" type="submit">{{ __('Cadastrar') }}</button>
                  </div>

                  {{-- @include('auth.social') --}}

                  <div class="mt-4 text-center">
                    <p class="mb-0">
                      {!! __('Ao registrar você confirma que leu e concorda os <a href="javascript:void(0)" class="text-primary">:terms</a>', ['terms' => __('Termos de Uso')]) !!}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <p>© {{ date('Y') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@push('css')
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
@endpush

@push('scripts')
  <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
  <script src="{{ asset('assets/libs/inputmask/jquery.inputmask.min.js') }}"></script>
  <script src="{{ asset(mix('assets/cms/js/register.js')) }}"></script>
@endpush
