@extends('layouts.cms.master-without-nav', ['title' => __('Esqueci a senha')])

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
                @if (session('status'))
                  <div class="alert alert-success text-center mb-4" role="alert">
                    {{ session('status') }}
                  </div>
                @endif
                <form class="form-horizontal" method="POST" action="{{ route('password.email') }}">
                  @csrf
                  <div class="mb-3">
                    <label for="useremail" class="form-label">{{ __('E-mail') }}</label>
                    <input type="email" class="form-control @error('email') is-invalid @enderror"
                      id="useremail" name="email" placeholder="{{ __('Digite seu e-mail') }}"
                      value="{{ old('email') }}" id="email">
                    @error('email')
                      <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                  </div>

                  <div class="text-end">
                    <button class="btn btn-primary w-md waves-effect waves-light"
                      type="submit">{{ __('Solicitar Senha') }}</button>
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
            <p>© {{ date('Y')}}</p>
          </div>

        </div>
      </div>
    </div>
  </div>

@endsection
