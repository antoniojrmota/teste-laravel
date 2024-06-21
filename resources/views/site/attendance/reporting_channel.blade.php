@extends('site.layouts.master')

@section('content')
<div id="reporting-channel">
  <x-site.common-banner :image="asset('/site/img/background.jpg')" :title="$page->descr->title" :breadcrumb="isset($breadcrumb) ? $breadcrumb : null" />

  <x-site.common-tabs :tabs="$tabs" />

  <section id="content" class="common-limiter">
    <h2 class="content-title">{{ $page->descr->subtitle }}</h2>
    <div class="common-text">{!! $page->descr->text !!}</div>
  </section>
</div>
@endsection

@push('css')
<link rel="stylesheet" href="{{ mix('assets/site/css/attendance/attendance.css') }}">
@endpush

@push('scripts')
<script src="{{ mix('assets/site/js/attendance/attendance.js') }}"></script>
@endpush
