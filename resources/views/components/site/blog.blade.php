@props(['news'])

<div id="blog">
  <div class="common-limiter">
    <div class="blog-title" {{ $attributes }}>
      <h2 class="title">{{ ('Blog Viajante') }}</h2>
      <a href="" class="common-button dark-button" target="_blank">
        <span>{{ __('Acessar agora') }}</span>
        @svg('site-arrow-right')
      </a>
    </div>

    <div class="swiper blog-swiper" {{ $attributes }}>
      <div class="swiper-wrapper">
        @foreach($news as $row)
        <div class="swiper-slide">
          <a href="{{ $row->link }}">
            <div class="swiper-slide-image lazyload" data-src="{{ $row->image }}" data-background="1"></div>
            <div class="swiper-slide-info">
              <div class="slide-content-title">
                <span>{{ $row->title }}</span>
                @svg('site-arrow-right')
              </div>
              <div class="slide-content-date">
                {{ $row->date->format('d/m/Y') }}
              </div>
            </div>
          </a>
        </div>
        @endforeach
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</div>
