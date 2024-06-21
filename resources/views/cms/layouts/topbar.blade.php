<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="{{ route('cms.dashboard.index') }}" class="logo logo-dark">
                    @svg('site-logo', ['class' => 'w-25'])
                </a>

                <a href="{{ route('cms.dashboard.index') }}" class="logo logo-light">
                    @svg('site-logo', ['class' => 'w-25'])
                </a>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect waves-light"
                data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                <i class="bx bx-menu"></i>
            </button>
        </div>

        <div class="d-flex">
            <div class="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="mdi mdi-magnify"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown">

                    <form class="p-3">
                        <div class="form-group m-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search ..."
                                    aria-label="Recipient's username">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit">
                                        <i class="mdi mdi-magnify"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item waves-effect" data-bs-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <img src="{{ asset('/assets/imgs/flags/' . data_get($languages, session()->get('locale', 'pt_BR'), $languages['pt_BR'])->image) }}"
                        alt="flag-{{ data_get($languages, session()->get('locale', 'pt_BR'), $languages['pt_BR'])->code }}"
                        height="30"></span>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                    @foreach ($languages as $language)
                        <a href="{{ route('cms.default.lang', $language->code) }}"
                            class="dropdown-item notify-item language" data-lang="{{ $language->code }}">
                            <img src="{{ asset('/assets/imgs/flags/' . $language->image) }}"
                                alt="flag-{{ $language->code }}" class="me-1" height="12">
                            <span class="align-middle">{{ __($language->name) }}</span>
                        </a>
                    @endforeach
                </div>
            </div>

            <div class="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" class="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                    <i class="bx bx-fullscreen"></i>
                </button>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    @if (Auth::user()->avatar)
                        <img class="rounded-circle header-profile-user" src="{{ asset(Auth::user()->avatar) }}"
                            alt="Avatar">
                    @else
                        @svg('avatar', ['class' => 'rounded-circle header-profile-user'])
                    @endif
                    <span class="d-none d-xl-inline-block ms-1" key="t-henry">
                        {{ ucfirst(Auth::user()->name) }}
                    </span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                    @can('Visualizar Definições')
                        <a class="dropdown-item" href="{{ route('cms.definicoes.index') }}">
                            <i class="bx bx-cog font-size-16 align-middle me-1"></i>
                            <span key="t-definitions">{{ __('Definições') }}</span>
                        </a>
                    @endcan
                    <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target=".change-password">
                        <i class="bx bx-wrench font-size-16 align-middle me-1"></i>
                        <span key="t-settings">{{ __('Alterar Senha') }}</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="javascript:void();"
                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                        <span key="t-logout">{{ __('Sair') }}</span>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </div>
            </div>
        </div>
    </div>
</header>

{{-- Change-Password --}}
<div class="modal fade change-password" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="myLargeModalLabel">{{ __('Atualizar Senha') }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form method="POST" id="change-password" action="{{ route('cms.password.update') }}">
                    @csrf
                    <div class="mb-3">
                        <label for="current_password">{{ __('Senha Atual') }}</label>
                        <input id="current-password" type="password"
                            class="form-control @error('current_password') is-invalid @enderror"
                            name="current_password" autocomplete="current_password"
                            placeholder="{{ __('Digite sua senha atual') }}" value="{{ old('current_password') }}">
                        <div class="text-danger" id="current_passwordError" data-ajax-feedback="current_password">
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="newpassword">{{ __('Nova Senha') }}</label>
                        <input id="password" type="password"
                            class="form-control @error('password') is-invalid @enderror" name="password"
                            autocomplete="new_password" placeholder="{{ __('Digite sua nova senha') }}">
                        <div class="text-danger" id="passwordError" data-ajax-feedback="password"></div>
                    </div>

                    <div class="mb-3">
                        <label for="userpassword">{{ __('Confirme a Nova Senha') }}</label>
                        <input id="password-confirm" type="password" class="form-control"
                            name="password_confirmation" autocomplete="password_confirmation"
                            placeholder="{{ __('Digite sua nova senha') }}">
                        <div class="text-danger" id="password_confirmError" data-ajax-feedback="password-confirm">
                        </div>
                    </div>

                    <div class="mt-3 d-grid">
                        <button class="btn btn-primary waves-effect waves-light UpdatePassword" type="submit">
                            {{ __('Alterar Senha') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
