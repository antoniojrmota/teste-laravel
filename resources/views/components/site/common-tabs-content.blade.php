@props(['data'])

<div class="content-wrapper">
  <div class="content-text">
    <h2 class="title">{{ $data->title }}</h2>
    <div class="common-text">{!! $data->text !!}</div>
  </div>
  <div class="content-media">
    <div class="swiper feature-swiper">
      <div class="swiper-wrapper">
        @foreach($data->gallery as $image)
        <div class="swiper-slide">
          <x-image method="fit" src="{{ $image->file ?: null }}" w="600" lazyload="1" />
        </div>
        @endforeach
      </div>
      <div class="swiper-navigation">
        <div class="swiper-button swiper-button-prev">@svg('site-arrow-right')</div>
        <div class="swiper-button swiper-button-next">@svg('site-arrow-right')</div>
      </div>
    </div>
  </div>
</div>
