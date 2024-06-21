@extends('site.layouts.master')

@section('content')
<div id="faq">
  <x-site.common-banner :image="asset('/site/img/background.jpg')" :title="'Perguntas frequentes'" :breadcrumb="isset($breadcrumb) ? $breadcrumb : null" />

  <x-site.common-tabs :tabs="$tabs" />

  <section id="content" class="common-limiter">
    <h2 class="content-title">{{ __('Qual a sua dúvida?') }}</h2>
    <div class="content-faq">
      @foreach($faqs as $faq)
        <div class="faq-item">
          <div class="faq-item-title">{{ $faq->descr->title }}</div>
          <div class="faq-item-text common-text">{!! $faq->descr->text !!}</div>
        </div>
      @endforeach
    </div>
  </section>
</div>
@endsection

@push('css')
<link rel="stylesheet" href="{{ mix('assets/site/css/attendance/attendance.css') }}">
@endpush

@push('scripts')
<script src="{{ mix('assets/site/js/attendance/attendance.js') }}"></script>
@endpush
