<div class="row align-items-center">
  <div class="col">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between">
      <h4 class="mb-sm-0 font-size-18 flex-grow-1">{{ $title }}</h4>
        <ol class="breadcrumb m-0 pe-0">
          @if(isset($routes))
            @foreach($routes as $route)
              <li class="breadcrumb-item"><a href="{{ $route['link'] ?? '#' }}">{{ $route['title'] ?? 'undefined?' }}</a></li>
            @endforeach
            @if(isset($title))
              <li class="breadcrumb-item active">{{ $title }}</li>
            @endif
          @endif
        </ol>
    </div>
  </div>
  {{ $slot }}
</div>
