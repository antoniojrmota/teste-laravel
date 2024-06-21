@extends('site.layouts.master')

@section('content')
<div id="funding">

  <x-site.common-banner :image="asset('/site/img/background.jpg')" :title="'Financiamento'" :breadcrumb="isset($breadcrumb) ? $breadcrumb : null" />

  <x-site.common-tabs :tabs="$tabs" />

  <section id="content" class="common-limiter">
    <div class="common-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut est sed est feugiat feugiat. Vivamus in placerat quam. Ut accumsan suscipit libero ac accumsan. Ut sit amet turpis quam. Integer porttitor magna a velit interdum, a commodo sapien elementum. Integer commodo accumsan mi eu tincidunt. Aliquam sem justo, suscipit nec nibh at, tincidunt faucibus risus. Cras vel convallis lectus. Morbi blandit dui ut massa tristique, id faucibus mauris placerat. Suspendisse pulvinar leo vel leo luctus, ut tincidunt nisl sollicitudin. Vestibulum volutpat, magna in mattis finibus, quam enim tempor velit, eget pretium sapien justo quis nisl. Vestibulum elementum leo ac justo ullamcorper, nec elementum leo mattis. Quisque convallis justo elementum, eleifend arcu et, rhoncus justo. Maecenas congue eros ac orci cursus suscipit. Nam eu scelerisque massa, sed commodo est. Nam tellus ante, semper id neque id, fringilla laoreet libero. Maecenas gravida metus lacus, id facilisis ipsum luctus id. Ut interdum massa sit amet lectus accumsan, vel gravida sem rhoncus. Curabitur ac interdum erat. Morbi aliquet nisi ultricies maximus porta. Mauris non mi nec ante luctus facilisis sed in ante. Aenean commodo aliquam aliquam. Vivamus ut odio eget tortor ornare tempor. Aenean facilisis massa vitae efficitur consectetur. Curabitur sollicitudin consectetur metus vitae dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui elit, luctus vel eros eu, blandit faucibus nunc. Nullam gravida, velit ut tristique facilisis, neque est ultrices augue, eu vestibulum lacus erat in lectus. Etiam enim nisl, imperdiet nec ante eu, mollis malesuada mauris. Donec at nisi ac libero gravida egestas. Donec mi lectus, facilisis sit amet finibus sit amet, hendrerit a mi. 
    </div>
    <div class="note">{{ __('* Aprovação sujeita a análise de crédito.') }}</div>
  </section>
</div>
@endsection

@push('css')
<link rel="stylesheet" href="{{ mix('assets/site/css/attendance/attendance.css') }}">
@endpush

@push('scripts')
<script src="{{ mix('assets/site/js/attendance/attendance.js') }}"></script>
@endpush