<livewire:site.newsletter />

<footer id="footer">
  <div class="companies-wrapper">
    @foreach($companies as $siteCompany)
    <a class="lazyload companies-item" target="{{ $siteCompany->descr->target }}" href="{{ $siteCompany->descr->link }}" title="{{ $siteCompany->descr->title }}" data-src="{{ (strpos($siteCompany->image, 'http') !== false) ? $siteCompany->image : asset('storage/empresas/'.$siteCompany->image) }}" data-background="0" data-height="47px"></a>
    @endforeach
  </div>
  <div class="footer-wrapper">
    <div class="left">
      <div class="menu-list">
        <div class="menu-group">
          <a class="menu-group-title" href="{{ localized_route('site.assistance.index') }}"><span> {{ __('Vendas e Pós-vendas') }} </span></a>
          <a href="{{ localized_route('site.assistance.agent') }}"><span> {{ __('Nossos Representates') }} </span></a>
          <a href="{{ localized_route('site.assistance.index') }}"><span> {{ __('Assistência técnica e venda de peças') }} </span></a>
          <a href="{{ localized_route('site.home.index') }}"><span> {{ __('Dicas de manutenção') }} </span></a>
          <a href="{{ localized_route('site.home.index') }}"><span> {{ __('Treinamentos') }} </span></a>
        </div>
      </div>

      <div class="logo">
        <a href="{{ localized_route('site.home.index') }}" title="{{ 'Deux' }}"> @svg('site-logo') </a>
      </div>

      <span class="note"> {{ __('Imagens meramente ilustrativas.') }} </span>

      <div class="ezoom-logo">
        <a href="https://www.ezoom.com.br" title="{{ 'Ezoom' }}"> @svg('site-ezoom') </a>
      </div>

    </div>
    <div class="right">

      <div class="menu-list">
        <div class="menu-group">
          <a class="menu-group-title" href="{{ localized_route('site.attendance.index') }}"><span> {{ __('Atendimento') }} </span></a>
          <a href="{{ localized_route('site.attendance.faq') }}"><span> {{ __('Perguntas Frequentes') }} </span></a>
          <a href="{{ localized_route('site.attendance.funding') }}"><span> {{ __('Financiamento') }} </span></a>
        </div>
      </div>

      @if($company->description->facebook || $company->description->instagram || $company->description->linkedin || $company->description->twitter || $company->description->youtube || $company->description->google)
      <div class="socials">
        <span class="socials-title">{{ __('Siga a Deux') }}</span>
        <div class="socials-list">
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
          @isset($company->description->google)
          <div class="menu-list">
            <div class="menu-group">
               <a class="menu-group-title" target="_blank" href="{{ $company->description->google }}"><span> {{ __('Link Fixo: google') }} </span></a>
            </div>
          </div>
          @endisset
        </div>
      </div>

      @endif
    </div>
  </div>
</footer>
