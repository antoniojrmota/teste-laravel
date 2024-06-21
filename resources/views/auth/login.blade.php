@extends('cms.layouts.master-without-nav', ['title' => __('Login') ])

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
                <p class="fw-bold">{{ __('Preencha seus dados para acessar o sistema') }}</p>
                <form class="form-horizontal" method="POST" action="{{ route('login') }}">
                  @csrf
                  @if(request()->has('back'))
                    <input type="hidden" name="back" value="{{request()->back}}">
                  @endif
                  <div class="mb-3">
                    <label for="username" class="form-label">{{ __('E-mail') }}</label>
                    <input name="email" type="email"
                      class="form-control @error('email') is-invalid @enderror"
                      value="{{ old('email') }}" id="username"
                      placeholder="{{ __('Digite seu e-mail') }}" autocomplete="email" required autofocus>
                    @error('email')
                      <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                  </div>

                  <div class="mb-3">
                    <label class="form-label">{{ __('Senha')}}</label>
                    <div
                      class="input-group auth-pass-inputgroup @error('password') is-invalid @enderror">
                      <input type="password" name="password"
                        class="form-control @error('password') is-invalid @enderror"
                        id="userpassword" value="" placeholder="{{ __('Digite sua senha') }}"
                        aria-label="Password" aria-describedby="password-addon" required>
                      <button class="btn btn-light password-addon" type="button" id="password-addon"><i
                          class="mdi mdi-eye-outline"></i></button>
                      @error('password')
                        <span class="invalid-feedback" role="alert">
                          <strong>{{ $message }}</strong>
                        </span>
                      @enderror
                    </div>
                  </div>

                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember"
                      {{ old('remember') ? 'checked' : '' }}>
                    <label class="form-check-label" for="remember">
                      {{ __('Continuar Logado') }}
                    </label>
                  </div>

                  <div class="mt-3 d-grid">
                    <button class="btn btn-primary waves-effect waves-light" type="submit">{{ __('Entrar') }}</button>
                  </div>

                  <div class="mt-4 text-center">
                    <a href="{{ route('password.request') }}" class="text-muted">
                      <i class="mdi mdi-lock me-1"></i> {{ __('Esqueceu a senha?') }}
                    </a>
                  </div>
                </form>
              </div>

            </div>
          </div>
          <div class="mt-5 text-center">
            <p>© {{ date('Y')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection

@push('scripts')
  <script src="{{ asset(mix('assets/cms/js/login.js')) }}"></script>
@endpush
