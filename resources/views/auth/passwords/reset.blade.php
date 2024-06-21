@extends('layouts.cms.master-without-nav', ['title' => __('Recuperar Senha') ])

@section('content')
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card overflow-hidden">
            <div class="card-body pt-0">
              <div class="my-3 text-center">
                @svg('site-ezoom', ['class' => 'w-50'])
                {{-- <img src="{{ asset('assets/cms/img/LogoLT.png') }}" alt="logo"> --}}
              </div>
              <div class="p-2">
                <form class="form-horizontal" method="POST" action="{{ route('password.update') }}">
                  @csrf
                  <input type="hidden" name="token" value="{{ $token }}">
                  <div class="mb-3">
                    <label for="useremail" class="form-label">{{ __('E-mail') }}</label>
                    <input type="email" class="form-control @error('email') is-invalid @enderror"
                      id="useremail" name="email" placeholder="{{ __('Digite seu e-mail') }}"
                      value="{{ $email ?? old('email') }}" id="email">
                    @error('email')
                      <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                  </div>

                  <div class="mb-3">
                    <label for="userpassword">{{ __('Senha') }}</label>
                    <input type="password"
                      class="form-control @error('password') is-invalid @enderror" name="password"
                      id="userpassword" placeholder="{{ __('Digite sua nova senha') }}">
                    @error('password')
                      <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                  </div>

                  <div class="mb-3">
                    <label for="userpassword">{{ __('Confirme a senha')}}</label>
                    <input id="password-confirm" type="password" name="password_confirmation"
                      class="form-control" placeholder="{{ __('Confirme sua nova senha') }}">
                  </div>

                  <div class="text-end">
                    <button class="btn btn-primary w-md waves-effect waves-light"
                      type="submit">{{ __('Alterar Senha') }}</button>
                  </div>

                  <div class="mt-4 text-center">
                    <a href="{{ route('login') }}" class="text-muted">
                      <i class="mdi mdi-lock-open me-1"></i>{{ __('Lembrou da senha?') }}
                    </a>
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
