@props([
  'table'
])
@if(isset($table['filters']) || isset($filters))
  @if(isset($table['filters']) && isset($filters))
    {{$filters}}
    @elseif(!isset($filters) && isset($table['filters']))
    <x-table-filters :filters="$table['filters']" />
  @endif
@endif

<div>
  @if(isset($table['registers']) && $table['registers']->hasPages())
    {{ $table['registers']->links() }}
  @elseif(isset($table['registers']) && !$table['registers']->isEmpty())
    <p class="mb-2">
      {{ __('Mostrando :x resultado:s', ['x' => $table['registers']->total(), 's' => $table['registers']->total() == 1 ? '' : 's']) }}
    </p>
  @endif
</div>

<div id='gallery'>

    @if(isset($table['registers']))
      @forelse($table['registers'] as $register)

      <div class='card'>
        <div class='card-body'>

          <a href="{{route($route.".edit", $register->uuid)}}">
            <img
              title="{{$register->descr->subtitle}}"
              responsive src="/uploads/{{$register->image}}"
            />
          </a>

          <a
            data-route="{{route($route.".destroy", $register->uuid)}}"
            data-uuid="{{$register->uuid}}"
            class='galleryDeleteBtn'
            href="{{route($route.".destroy", $register->uuid)}}">❌</a>

        </div>
      </div>

      @empty
        {{ __('Nenhum registro encontrado.') }}
      @endforelse
    @endif

</div>

<div class="mt-3">
  @if(isset($table['registers']) && $table['registers']->hasPages())
    {{ $table['registers']->links() }}
  @elseif(isset($table['registers']) && !$table['registers']->isEmpty())
    <p class="mt-n2">
      {{ __('Mostrando :x resultado:s', ['x' => $table['registers']->total(), 's' => $table['registers']->total() == 1 ? '' : 's']) }}
    </p>
  @endif
</div>

@once
  @push('scripts')
  <script src="{{ asset(mix('assets/components/gallery.js')) }}"></script>
  @endpush
@endonce
