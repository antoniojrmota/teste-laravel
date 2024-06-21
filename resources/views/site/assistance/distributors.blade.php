@foreach($distributors as $key => $distributor)
<div class="list-item" id="gps-{{ $key }}" data-id="{{ $key }}" data-code="{{ $distributor->id }}" data-gps="{{ $distributor->gps }}"  data-company="{{ json_encode($distributor) }}">
  <div class="info-box">
    <div class="info-box-title">{{ $distributor->name }}</div>
    <span class="info-box-address">{{ $distributor->full_address }}</span>
    @if($distributor->email && $distributor->email != '-')
      <a class="info-box-contact" href="mailto:{{ $distributor->email }}">
        @svg('site-mail')
        <span>{{ $distributor->email }}</span>
      </a>
    @endif
    @if($distributor->phone && $distributor->phone != '-')
      <a class="info-box-contact" href="tel:{{ preg_replace('/\D+/i', '', $distributor->phone) }}">
        @svg('site-phone')
        <span>{{ $distributor->phone }}</span>
      </a>
    @endif
  </div>
  @if($distributor->gps_latitude && $distributor->gps_longitude)
    <div class="info-trace">
      <a href="https://www.google.com/maps/search/?api=1&query={{ $distributor->gps_latitude }},{{ $distributor->gps_longitude }}" target="_blank">
        @svg('site-pin')
      </a>
      <a href="https://www.google.com/maps/dir/?api=1&destination={{ $distributor->gps_latitude }},{{ $distributor->gps_longitude }}" target="_blank">
        @svg('site-route')
      </a>
    </div>
  @endif
</div>
@endforeach
