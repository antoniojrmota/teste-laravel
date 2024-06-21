@props(['image', 'label', 'title', 'breadcrumb'])

<section id="common-banner" {{ $attributes }}>
    <div class="common-banner-background lazyload" data-src="{{ $image != '' ? $image : asset('/site/img/common-bg.jpg') }}" data-background="1" data-width="1920" data-height="500"></div>


    <div class="common-banner-content">
        @if (isset($label))
        <span class="common-banner-label">{{ $label }}</span>
        @endif
        @if (isset($title))
        <h1 class="common-banner-title">{!! $title !!}</h1>
        @endif
    </div>

    @isset($breadcrumb)
    <div class="breadcrumb">
        @foreach($breadcrumb as $key => $each)
        <a href="{{ $each->href }}" class="breadcrumb-item {{ $key == (count($breadcrumb) - 1) ? 'active' : '' }}">
            @if($key == 0)
            @svg('site-home')
            @else
            <span>{!! $each->title !!}</span>
            @endif
        </a>
        @endforeach
    </div>
    @endisset
</section>

<x-site.common-tabs />
