@props(['title', 'data', 'type'])

<div class="download">
  <div class="download-title" id="{{ strtolower($title) }}">
    <span class="title">{!! $title !!}</span>
    <span class="note">{{ count($data) . ' ' . __('Arquivos') }}</span>
  </div>
  <div class="download-list {{ $type }}">
    @foreach($data as $item)
      @if($type == 'fotos')
      <a href="{{ localized_route('site.downloads.flickr', [$item->id, 'type' => 'fotos']) }}" class="download-item {{ $type }}-item">
        <x-image method="resizeCanvas" src="{{ $item->file }}" h="175" class="item-image" lazyload="1" />
        <span>{!! $item->title !!}</span>
      </a>
      @elseif($type == 'flickr')
      <a href="{{ $item->file }}" class="download-item {{ $type }}-item popup-image" data-download="{{ $item->download }}">
        <x-image method="canvas" src="{{ $item->file }}" w="150" class="item-image " lazyload="1" />
      </a>
      @elseif($type == 'videos')
      @php
        $videoUrl = url_get_youtube_id($item->link);
      @endphp
      <a href="https://www.youtube.com/watch?v={{ $videoUrl }}" class="download-item {{ $type }}-item popup-youtube">
        <div class="lazyload" data-src="https://img.youtube.com/vi/{{ $videoUrl }}/maxresdefault.jpg" data-background="1"></div>
        @svg('site-play')
        <span class="video-subtitle">{{ $item->title }}</span>
      </a>
      @else
      <a href="{{ localized_route('site.download.download', [$item->id]) }}" target="_blank" class="download-item {{ $type }}-item">
        <div class="download-item-title">{{ $item->title }}</div>
        <span class="download-item-size">{{ $item->type }}</span>
        @if($item->size)
          <span class="download-item-size">{{ __('Peso do arquivo: :size', ['size' => $item->size]) }}</span>
        @endif
        <div class="download-item-icon">@svg('site-download')</div>
      </a>
      @endif
    @endforeach
  </div>
</div>
