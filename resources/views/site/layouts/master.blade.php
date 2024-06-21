<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta content="{{ config('app.name') }}" name="description" />
  <meta content="Ezoom" name="author" />

  <title>{{ config('app.name') }}</title>

  {{-- CSRF Token --}}
  <meta name="csrf-token" content="{{ csrf_token() }}">

  {{-- SEO --}}
  {{-- {!! SEO::generate(true) !!} --}}

  {{-- App favicon --}}
  <link rel="shortcut icon" href="{{ asset('favicon.ico')}}">

  {{-- App Css --}}
  <link href="{{ mix('assets/site/css/app.css') }}" id="app-style" rel="stylesheet" type="text/css" />

  @stack('css')
  @livewireStyles
  
</head>

<body {{ isset($body) ? ' class="' .$body.'"' : null }}>

  {{-- Begin page wrapper --}}
  <div id="layout-wrapper">
    @include('site.layouts.header')

    <main>
      @if ($message = session('message'))
      <x-alert :type="session('type', 'success')" :message="$message" class="mb-4" />
      @elseif($message = session('error'))
      <x-alert type="danger" :message="$message" class="mb-4" />
      @elseif (!$errors->isEmpty())
      <x-alert type="danger" :message="$errors->all()" class="mb-4" />
      @endif

      @yield('content')
    </main>

    @include('site.layouts.footer')
  </div>
  {{-- End page wrapper --}}

  <script src="/assets/libs/swiper/swiper-bundle.min.js"></script>
  <script src="/assets/libs/swiper/swiper-config.js"></script>

  {{-- App Js --}}
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://kit.fontawesome.com/286820aea3.js" crossorigin="anonymous"></script>
  <script src="{{ asset('assets/libs/jquerymask/jquery.mask.js')}}"></script>
  <script src="{{ asset('assets/libs/magnific-popup/jquery.magnific-popup.min.js') }}"></script>
  <script src="{{ asset('assets/libs/select2/select2.js')}}"></script>
  <script src="{{ mix('assets/site/js/app.js') }}"></script>

  {{-- Localization Middleware --}}
  <script>
    window.i18n = {!! $i18n !!};
    window.base_url = '{{ url("/") }}';
  </script>

  @stack('scripts')
  @livewireScripts

</body>

</html>