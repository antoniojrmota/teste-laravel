<header id="header" class="">
  <div class="main-menu">
    <nav class="main-menu-item menu">
      <a href="{{ localized_route('site.assistance.index') }}" class="menu-item"><span>{{ __('Vendas e Pós-vendas') }}</span></a>
      <a href="{{ localized_route('site.attendance.index') }}" class="menu-item"><span>{{ __('Atendimento') }}</span></a>
    </nav>
    <div class="main-menu-item logo">
      <a href="{{ localized_route('site.home.index') }}" title="{{ 'Marcopolo' }}">
        @svg('site-logo')
      </a>
    </div>
    <div class="main-menu-item items">
      <div class="icons">
        <button class="icon-item search-icon"> @svg('site-search') </button>
        <div class="icon-item language-icon">
          <button type="button">@svg('site-world')</button>
          <div class="language-dropdown">
            @foreach($languages as $language)
            <a href="{{ route('default.lang', [$language->code]) }}" class="dropdown-item">
              <span>{{ $language->abrv }}</span>
            </a>
            @endforeach
          </div>
        </div>
        <button class="icon-item menu-icon"> @svg('site-menu') </button>
      </div>
    </div>
  </div>
  <div class="search-wrapper">
    <button class="close-search"> @svg('site-close') </button>
    <form class="search-form" method="GET" action="{{ localized_route('site.institutional.search') }}">
      <div class="row">
        <div class="field">
          <input name="search" type="text" class="input-field" placeholder="{{ __('Pesquisar') }}">
          <button>@svg('site-search')</button>
        </div>
      </div>
    </form>
  </div>
  <div class="mobile-menu">
    <div class="menu-header">
      <div class="menu-header-item first-item">
        <a href="{{ localized_route('site.home.index') }}" class="logo" title="{{ 'Marcopolo' }}">
          @svg('site-logo')
        </a>
        <button class="close"> @svg('site-close') </button>
      </div>
      <div class="menu-header-item second-item">
        <div class="languages">
          @svg('site-world')
          @foreach($languages as $language)
          <a href="{{ route('default.lang', [$language->code]) }}" class="languages-item">
            <span>{{ $language->abrv }}</span>
          </a>
          @endforeach
        </div>
        <div class="socials">
          @isset($company->description->facebook)
          <a href="{{ $company->description->facebook }}" target="_blank" class="socials-item"> @svg('site-facebook') </a>
          @endisset
          @isset($company->description->instagram)
          <a href="{{ $company->description->instagram }}" target="_blank" class="socials-item"> @svg('site-instagram') </a>
          @endisset
          @isset($company->description->linkedin)
          <a href="{{ $company->description->linkedin }}" target="_blank" class="socials-item"> @svg('site-linkedin') </a>
          @endisset
          @isset($company->description->twitter)
          <a href="{{ $company->description->twitter }}" target="_blank" class="socials-item"> @svg('site-twitter') </a>
          @endisset
          @isset($company->description->youtube)
          <a href="{{ $company->description->youtube }}" target="_blank" class="socials-item"> @svg('site-youtube') </a>
          @endisset
        </div>
      </div>
      <div class="menu-header-item third-item">
        <form class="search-form" method="GET" action="{{ localized_route('site.institutional.search') }}">
          <div class="row">
            <div class="field">
              <input name="search" type="text" class="input-field" placeholder="{{ __('Pesquisar') }}">
              <button>@svg('site-search')</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <nav class="menu">
      <button class="menu-item has-submenu">
        <span class="submenu-title">{{ __('Vendas e pós vendas') }}</span>
        <div class="submenu">
          <a href="{{ localized_route('site.assistance.agent') }}" class="submenu-item"><span> {{ __('Nossos Representantes') }} </span></a>
          <a href="{{ localized_route('site.assistance.index') }}" class="submenu-item"><span> {{ __('Assistência técnica e venda de peças') }} </span></a>
          <a href="{{ localized_route('site.home.index') }}" class="submenu-item"><span> {{ __('Dicas de manutenção') }} </span></a>
          <a href="{{ localized_route('site.home.index') }}" class="submenu-item"><span> {{ __('Treinamentos') }} </span></a>
        </div>
      </button>
      <button class="menu-item has-submenu">
        <span class="submenu-title">{{ __('Atendimento') }}</span>
        <div class="submenu">
          <a href="{{ localized_route('site.attendance.faq') }}" class="submenu-item"><span> {{ __('Perguntas Frequentes') }} </span></a>
          <a href="{{ localized_route('site.attendance.funding') }}" class="submenu-item"><span> {{ __('Financiamento') }} </span></a>
        </div>
      </button>
    </nav>
  </div>
</header>
