@props([
  'filters' => [
    'fields'   => [],
    'route'    => null,
    'dataList' => null
  ],
  'buttonName' => null,
  'icon'       => null,
  'route'      => null,
  'can'        => null,
  'model'      => null
])
<div class="mb-3">
  <form action="{{ $filters['route'] ?? url()->current() }}" method="GET">
    <div class="row d-flex align-items-center justify-content-start flex-wrap g-3 gb-1">
      @foreach($filters['fields'] as $filter)
      <div class="{{$filter['col'] ?? 'col'}}">
        @switch($filter['type'] ?? null)
          @case('select')
            <x-form.select
              :name="$filter['name']"
              :class="$filter['class'] ?? null"
              :placeholder="$filter['placeholder']"
              :data="$filter['data'] ?? null"
              :data-key="$filter['dataKey'] ?? null"
              :data-value="$filter['dataValue'] ?? null"
              :value="$filter['value'] ?? null"
              />
            @break
          @default
            <x-form.input type="text"
              :name="$filter['name']"
              :autoComplete="$filter['autoComplete'] ?? 'on'"
              :class="$filter['class'] ?? null"
              :placeholder="$filter['placeholder']"
              :value="$filter['value'] ?? null"
              :dataList="isset($filter['dataList']) ? $filter['dataList'] : null"
              />
        @endswitch
      </div>
      @endforeach
      <div class="col">
        <button type="submit" class="btn btn-primary">{{ __('Buscar') }}</button>
      </div>
      {{ $slot }}
      @if(isset($buttonName) && isset($icon) && isset($route) && isset($can) && isset($model))
        @can($can, $model)
          <div class="col text-end text-nowrap">
            <a class="btn btn-success" href="{{ route($route) }}">
              <i class="{{$icon}}"></i>
              <span class="d-none d-md-inline">{{ __($buttonName ?? null) }}</span>
            </a>
          </div>
        @endcan
      @endif
    </div>
  </form>
</div>

@push('scripts')
  <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
@endpush

@push('css')
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
@endpush
