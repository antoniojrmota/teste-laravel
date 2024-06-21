@php
  if(!$category)
    $category = $item->categories->first();
@endphp
<a href="{{ localized_route('site.product.details', [$category?->descr?->slug, $item->descr?->slug]) }}" class="item">
  <x-image method="canvas" src="{{ url_add_path('storage/produtos/', ($item->site_image_front ?? $item->image)) }}" w="300" class="item-image" lazyload="1" />

  <div class="item-info">
    <span class="item-title">{!! $item->descr?->title !!}</span>
    <span class="item-segment">{{ $category?->descr?->title }}</span>
  </div>
  <button type="button" class="common-link">
    <span>{{ __('Conheça o modelo') }}</span>
  </button>
</a>
