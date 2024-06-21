<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <title>{{ $title ?? $templateTitle}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta content="Ezoom" name="author" />
    {{-- App favicon --}}
    <link rel="shortcut icon" href="{{ asset('favicon.ico')}}">

    @stack('css')

    {{-- Bootstrap Css --}}
    <link href="{{ asset(mix('assets/cms/css/bootstrap.css')) }}" id="bootstrap-style" rel="stylesheet" type="text/css" />
    {{-- Icons Css --}}
    <link href="{{ asset('assets/libs/boxicons/css/boxicons.min.css') }}" rel="stylesheet" type="text/css" />
    {{-- Mdi Icons Css --}}
    <link href="{{ asset('assets/libs/mdi/css/materialdesignicons.min.css') }}" rel="stylesheet" type="text/css" />
    {{-- Fontawesome Css --}}
    {{-- <link href="{{ asset('assets/libs/@fortawesome/fontawesome-free/css/all.min.css')) }}" rel="stylesheet" type="text/css" /> --}}
    {{-- App Css --}}
    <link href="{{ asset(mix('assets/cms/css/app.css')) }}" id="app-style" rel="stylesheet" type="text/css" />

  </head>
  <body style="background: {{$background ?? ''}}">
    @yield('content')

    <script src="{{ asset('assets/libs/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap/bootstrap.min.js')}}"></script>

    @stack('scripts')

    @if(isset($localization))
    {{-- Localization Middleware --}}
    <script>
      window.i18n = {!! $i18n !!};
    </script>
    @endif
  </body>
</html>
