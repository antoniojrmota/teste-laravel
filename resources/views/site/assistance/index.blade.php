@extends('site.layouts.master')

@section('content')
<div id="assistance">
  <x-site.common-banner :image="asset('/site/img/background.jpg')" :title="'Assistência'" :breadcrumb="isset($breadcrumb) ? $breadcrumb : null" />

  <div class="common-limiter">
    <section id="maps">
      <div class="maps-wrapper">

        <form action="{{ route('site.assistance.send') }}" class="map-form" autocomplete="off" data-all="true">
          @csrf

          <div class="row">
            <div class="field big-field my-location">
              @svg('site-location')
              <input type="text" id="searchPlaces" name="address" placeholder="{{ __('Digite seu endereço...') }}">
              <input type="hidden" id="searchDirection" name="direction" value="0">
              <input type="hidden" id="myLocation" name="location" value="0">
              <input type="hidden" name="state" value="">
              <input type="hidden" name="city" value="">
            </div>

            <div class="field big-field no-attributes">
              <select name="country" class="select2 change-country" data-placeholder="{{ __('País') }}">
                <option value="" disabled selected></option>
                @foreach ($countries as $key => $value)
                <option value="{{ $value->description->slug }}">{{ $value->description->name }}</option>
                @endforeach
              </select>
            </div>

            <div class="field no-attributes radio-field">
              <input type="radio" name="type" value="1" id="input-selling" checked>
              <label for="input-selling">{{ __('Venda de Carrocerias') }}</label>
            </div>

            <div class="field no-attributes radio-field">
              <input type="radio" name="type" value="2" id="input-assistance">
              <label for="input-assistance">{{ __('Assistência Técnica e Venda de Peças') }}</label>
            </div>

            <button class="common-button">
              <span>{{ __('Buscar') }}</span>
              @svg('site-search')
            </button>
          </div>
        </form>

        <div class="result-box">
          <div class="list-box">
            <h3 class="list-title">{{ __('Veja os endereços pesquisados') }}</h3>
            <div class="list">
              @include('site.assistance.distributors')
            </div>
          </div>
          <div class="map-box">
            <div id="gmaps"></div>
          </div>
        </div>

      </div>
    </section>
  </div>
</div>
@endsection

@push('css')
<link rel="stylesheet" href="{{ mix('assets/site/css/assistance/assistance.css') }}">
<link href="{{ asset('assets/site/css/select2.min.css') }}" rel="stylesheet" type="text/css" />
@endpush

@push('scripts')
<script src="https://maps.google.com/maps/api/js?libraries=places&key={{config('google.gmapkey')}}&language={{ str_replace('_', '-', app()->getLocale()) }}"></script>
<script src="{{ asset('assets/libs/infobox.min.js') }}"></script>
<script src="{{ asset('assets/libs/markerclusterer.min.js') }}"></script>
<script src="{{ mix('assets/site/js/assistance/assistance.js') }}"></script>
@endpush
