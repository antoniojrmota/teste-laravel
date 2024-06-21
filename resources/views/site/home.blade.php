@extends('site.layouts.master')

@section('content')
<div id="home">
  <div class="gradient-wrapper">
    <div class="gradient-overlay"></div>

    <section id="banner">
      <div class="swiper banner-swiper">
        <div class="swiper-wrapper">
          @foreach($banners as $banner)
          <div class="swiper-slide">
            @if($banner->descr->type == 'video')
            <div class="swiper-slide-video">
              <video width="100%" height="auto" autoplay muted loop>
                <source src="{{ url_add_path('storage/banners/', $banner->descr->video) }}" type="video/mp4">
              </video>
            </div>
            @else
            <div class="swiper-slide-image lazyload" data-src="{{ url_add_path('storage/banners/', $banner->normalized_image) }}" data-background="1"></div>
            @endif
            <div class="swiper-slide-content">
              <div class="title">{{ $banner->descr->full_title }}</div>
              @if($banner->descr->link)
              <a href="{{ $banner->descr->link }}" class="common-button light-button" target="{{ $banner->descr->target }}">
                <span>{{ $banner->descr->label ?? __('Veja Mais') }}</span>
              </a>
              @endif
            </div>
          </div>
          @endforeach
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-navigation">
          <div class="swiper-button swiper-button-prev"></div>
          <span class="swiper-divisor"></span>
          <div class="swiper-button swiper-button-next"></div>
        </div>
      </div>
    </section>
  </div>

  <section id="assistance" data-aos="fade-up" data-aos-delay="300">
    <div class="common-limiter">
      <div class="assistance-wrapper">
        <div class="assistance-title">{{ __('Encontre peças e serviços') }}</div>
        <div class="common-text">{{ __('Encontre a Assistência técnica ou revenda de peças mais próxima de você.') }}</div>
        <form action="{{ localized_route('site.assistance.index') }}" class="common-form" id="assistance-form">
          @csrf
          <div class="row">
            <div class="field my-location">
              @svg('site-pin')
              <input type="text" id="searchPlaces" name="address" class="input-field" placeholder="{{ __('Digite a cidade, bairro ou endereço') }}">
            </div>
          </div>
          <button class="common-button">
            <span>{{ __('Buscar') }}</span>
            @svg('site-search')
          </button>
        </form>
      </div>
    </div>
  </section>

  @if(!empty($news))
  <x-site.blog :news="$news" data-aos="slide-up" data-aos-delay="300" />
  @endif

</div>
@endsection

@push('css')
<link rel="stylesheet" href="{{ asset(mix('assets/site/css/home.css')) }}">
@endpush

@push('scripts')
<script src="https://maps.google.com/maps/api/js?libraries=places&key={{config('google.gmapkey')}}&language={{ str_replace('_', '-', app()->getLocale()) }}"></script>
<script src="{{ mix('assets/site/js/home.js') }}"></script>
@endpush
