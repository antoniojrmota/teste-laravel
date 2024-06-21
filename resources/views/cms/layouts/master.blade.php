<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8" />
  <title>{{ $title ?? null }}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  {{-- CSRF Token --}}
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta content="{{ config('app.name') }}" name="description" />
  <meta content="Ezoom" name="author" />

  <meta name="api_token" content="{{session('api_token')}}">

  {{-- App favicon --}}
  <link rel="shortcut icon" href="{{ asset('favicon.ico')}}">

  {{-- Bootstrap Css --}}
  <link href="{{ mix('assets/cms/css/bootstrap.css') }}" id="bootstrap-style" rel="stylesheet" type="text/css" />
  {{-- Icons Css --}}
  <link href="{{ asset('assets/libs/boxicons/css/boxicons.min.css') }}" rel="stylesheet" type="text/css" />
  {{-- Mdi Icons Css --}}
  <link href="{{ asset('assets/libs/mdi/css/materialdesignicons.min.css') }}" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
  {{-- Fontawesome Css --}}
  {{--
  <link href="{{ asset('assets/libs/@fortawesome/fontawesome-free/css/all.min.css')) }}" rel="stylesheet"
    type="text/css" /> --}}
  {{-- App Css --}}
  <link href="{{ mix('assets/cms/css/app.css') }}" id="app-style" rel="stylesheet" type="text/css" />

  <!--loadStyles-->
  @foreach( session('loadStyles', []) as $url=>$load )
  @if( $load )
  <link rel="stylesheet" href="{{$url}}" />
  @endif
  @endforeach
  <!--/loadStyles-->

  @stack('css')
</head>

<body data-topbar="light" data-sidebar="dark">
  {{-- Begin page content --}}
  <div id="layout-wrapper">

    @include('cms.layouts.topbar')
    {{--@include('cms.layouts.horizontal')--}}

    @include('cms.layouts.custom-left')

    {{-- Start main Content here --}}
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          @if ($message = session('message'))
          <x-alert :type="session('type', 'success')" :message="$message" class="mb-4" />
          @elseif($message = session('error'))
          <x-alert type="danger" :message="$message" class="mb-4" />
          @elseif (!$errors->isEmpty())
          <x-alert type="danger" :message="$errors->all()" class="mb-4" />
          @endif

          @yield('content')
        </div>
        {{-- container-fluid --}}
      </div>

      @include('cms.layouts.footer')
    </div>
    {{-- end main content --}}
  </div>
  {{-- End page content --}}

  <script src="{{ asset('assets/libs/jquery/jquery.min.js')}}"></script>
  <script src="{{ asset('assets/libs/jquery-validation/jquery.validate.min.js')}}"></script>
  <script src="{{ asset('assets/libs/popperjs/popper.min.js')}}"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
  <script src="{{ asset('assets/libs/bootstrap/bootstrap.min.js')}}"></script>

  <script src="{{ asset('assets/libs/metismenu/metisMenu.min.js')}}"></script>
  <script src="{{ asset('assets/libs/simplebar/simplebar.min.js')}}"></script>
  <script src="{{ asset('assets/libs/node-waves/waves.min.js')}}"></script>

  {{-- App Js --}}
  <script src="{{ mix('assets/cms/js/app.js') }}"></script>

  {{-- Localization Middleware --}}
  <script>
    window.i18n = {!! $i18n !!};
  </script>

  <!--loadScripts-->
  @foreach( session('loadScripts', []) as $url=>$load )
  @if( $load )
  <script src="{{$url}}"></script>
  @endif
  @endforeach
  <!--/loadscripts-->

  @stack('scripts')


</body>

</html>