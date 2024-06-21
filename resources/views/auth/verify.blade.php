@extends('cms.layouts.master-without-nav', ['title' => __('Verificar Senha') ])

@section('content')
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card overflow-hidden">
            <div class="bg-primary bg-soft">
              <div class="row">
                <div class="col-7">
                  <div class="text-primary p-4">
                    <h5 class="text-primary"> Verify Password</h5>
                    <p>Verify Password with Skote.</p>
                  </div>
                </div>
                <div class="col-5 align-self-end">
                  <img src="{{ URL::asset('/assets/cms/img/profile-img.png') }}" alt="" class="img-fluid">
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div>
                <a href="index">
                  <div class="avatar-md profile-user-wid mb-4">
                    <span class="avatar-title rounded-circle bg-light">
                      <img src="{{ URL::asset('/assets/cms/img/logo.svg') }}" alt="" class="rounded-circle" height="34">
                    </span>
                  </div>
                </a>
              </div>

              @if (session('resent'))
                <div class="alert alert-success" role="alert">
                  {{ __('Um link de verificação foi enviado para seu e-mail') }}
                </div>
              @endif

              {{ __('Verifique seu e-mail pelo link de verificação.') }}
              {{ __('Se você não recebeu este e-mail') }},
              <div class="p-2">
                <form class="form-horizontal" method="POST" action="{{ route('verification.resend') }}">
                  @csrf

                  <div class="text-end">
                    <button class="btn btn-primary w-md waves-effect waves-light"
                      type="submit">{{ __('Solicite novamente') }}</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
          <div class="mt-5 text-center">
            <p>{{ __('Lembrou da senha?') }} <a href="{{ url('login') }}" class="fw-medium text-primary"> {{ __('acesse aqui') }}</a></p>

            <p>© {{ date('Y')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

@endsection
