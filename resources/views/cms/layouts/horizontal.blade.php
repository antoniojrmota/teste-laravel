<header id="page-topbar">
  <div class="navbar-header">
    <div class="d-flex">
      <!-- LOGO -->
      <div class="navbar-brand-box">
        <a href="{{ route('cms.dashboard.index') }}" class="logo logo-dark">
          @svg('site-ezoom', ['class' => 'w-25'])
        </a>

        <a href="{{ route('cms.dashboard.index') }}" class="logo logo-light">
          @svg('site-ezoom', ['class' => 'w-25'])
        </a>
      </div>

      <button type="button" class="btn btn-sm px-3 font-size-24 d-lg-none header-item waves-effect waves-light" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
        <i class="bx bx-menu"></i>
      </button>

      <!-- App Search-->
      <form class="app-search d-none d-lg-block">
        <div class="position-relative">
          <input type="text" name="search[q]" class="form-control" placeholder="{{ __('Buscar') }}">
          <span class="bx bx-search-alt"></span>
        </div>
      </form>
    </div>

    <div class="d-flex">

      <div class="dropdown d-inline-block d-lg-none ml-2">
        <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="mdi mdi-magnify"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
          aria-labelledby="page-header-search-dropdown">

          <form class="p-3">
            <div class="form-group m-0">
              <div class="input-group">
                <input type="text" name="search[q]" class="form-control" placeholder="{{ __('Buscar') }}" aria-label="{{ __('Buscar') }}">
                <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item waves-effect"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <img src="{{ asset('/assets/imgs/flags/'.data_get($languages, session()->get('locale', 'pt_BR'), $languages['pt_BR'])->image) }}" alt="flag-{{ data_get($languages, session()->get('locale', 'pt_BR'), $languages['pt_BR'])->code }}" height="30"></span>
        </button>
        <div class="dropdown-menu dropdown-menu-end">
          @foreach($languages as $language)
          <a href="{{ route('cms.default.lang', $language->directory) }}" class="dropdown-item notify-item language" data-lang="{{ $language->code }}">
            <img src="{{ asset('/assets/imgs/flags/'.$language->image) }}" alt="flag-{{ $language->code }}" class="me-1" height="12">
            <span class="align-middle">{{ __($language->name) }}</span>
          </a>
          @endforeach
        </div>
      </div>

      <div class="d-none d-lg-inline-block ml-1">
        <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
          <i class="bx bx-fullscreen"></i>
        </button>
      </div>

      <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
          data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          @if(Auth::user()->avatar)
            <img class="rounded-circle header-profile-user" src="{{ asset(Auth::user()->avatar) }}" alt="Avatar">
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
          <a class="dropdown-item text-danger" href="javascript:void();" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
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

{{-- Menu superior --}}
<div class="topnav">
  <div class="container-fluid">
    <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
      <div class="collapse navbar-collapse" id="topnav-menu-content">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.dashboard.index') }}" role="button">
              <span key="t-dashboard">{{ __('Painel') }}</span>
            </a>
          </li>

          @can('Visualizar Páginas')
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.paginas.index') }}" role="button">
              <span key="t-client">{{ __('Páginas') }}</span>
            </a>
          </li>
          @endcan

          @can('Visualizar Banners')
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.banners.index') }}" role="button">
              <span key="t-client">{{ __('Banners') }}</span>
            </a>
          </li>
          @endcan

          @can('Visualizar Empresas')
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.empresas.index') }}" role="button">
              <span key="t-client">{{ __('Empresas') }}</span>
            </a>
          </li>
          @endcan

          @can('Visualizar Unidades')
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.unidades.index') }}" role="button">
              <span key="t-client">{{ __('Unidades') }}</span>
            </a>
          </li>
          @endcan

          @can('Visualizar Downloads')
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.downloads.index') }}" role="button">
              <span key="t-client">{{ __('Downloads') }}</span>
            </a>
          </li>
          @endcan

          @can('Visualizar Links')
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.links.index') }}" role="button">
              <span key="t-client">{{ __('Links') }}</span>
            </a>
          </li>
          @endcan

          @can('Visualizar Config')
          <li class="nav-item">
            <a class="nav-link" href="{{ route('cms.config.index') }}" role="button">
              <span key="t-client">{{ __('Configurações') }}</span>
            </a>
          </li>
          @endcan

        </ul>
          @canany(['Visualizar Usuários', 'Visualizar Grupos'])
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle arrow-none" id="topnav-admin" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bx bx-cog me-2"></i><span key="t-admin">{{ __('Administração') }}</span> <div class="arrow-down"></div>
                </a>
                <div class="dropdown-menu" aria-labelledby="topnav-admin">
                  @can('Visualizar Usuários')
                    <a href="{{ route('cms.usuarios.index') }}" class="dropdown-item" key="t-user">{{ __('Usuários') }}</a>
                  @endcan
                  @can('Visualizar Grupos')
                    <a href="{{ route('cms.grupos.index') }}" class="dropdown-item" key="t-groups">{{ __('Grupos') }}</a>
                  @endcan
                </div>
              </li>
            </ul>
          @endcanany
      </div>
    </nav>
  </div>
</div>

{{-- Change-Password --}}
<div class="modal fade change-password" tabindex="-1" role="dialog"
  aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myLargeModalLabel">{{ __('Atualizar Senha')}}</h5>
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
            <div class="text-danger" id="current_passwordError" data-ajax-feedback="current_password"></div>
          </div>

          <div class="mb-3">
            <label for="newpassword">{{ __('Nova Senha') }}</label>
            <input id="password" type="password"
              class="form-control @error('password') is-invalid @enderror" name="password"
              autocomplete="new_password" placeholder="{{ __('Digite sua nova senha') }}">
            <div class="text-danger" id="passwordError" data-ajax-feedback="password"></div>
          </div>

          <div class="mb-3">
            <label for="userpassword">{{ __("Confirme a Nova Senha")}}</label>
            <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
              autocomplete="password_confirmation" placeholder="{{ __('Digite sua nova senha') }}">
            <div class="text-danger" id="password_confirmError" data-ajax-feedback="password-confirm"></div>
          </div>

          <div class="mt-3 d-grid">
            <button
              class="btn btn-primary waves-effect waves-light UpdatePassword"
              type="submit">{{ __('Alterar Senha') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
