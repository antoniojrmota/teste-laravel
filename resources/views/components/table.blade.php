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
<div class="shadow table-responsive rounded">
  <table class="table mb-0">
  <thead class="">
    <tr>
      @foreach($table['columns'] as $column)
      <th scope="col">
        <div class="d-flex g-2">
          @if(isset($column['sortable']))
            @php
              if(request()->has('page')) {
                  if(isset($column['column']) && $column['column'] instanceof \Closure || $column['type'] == 'multifield') {
                      $url = route($route.'.index', [
                     'page' => request()->get('page'),
                     'sortable' => [$column['name'] => !boolval(request()->get('sortable')[$column['name']] ?? false) ?? false]
                     ]);
                  } else {
                      $url = route($route.'.index', [
                     'page' => request()->get('page'),
                     'sortable' => [$column['column'] => !boolval(request()->get('sortable')[$column['column']] ?? false) ?? false]
                     ]);
                  }
              } else {
                  if(isset($column['column']) && $column['column'] instanceof \Closure || $column['type'] == 'multifield') {
                      $url = route($route.'.index', ['sortable' => [$column['name'] => !boolval(request()->get('sortable')[$column['name']] ?? false) ?? false]]);
                  } else {
                      $url = route($route.'.index', ['sortable' => [$column['column'] => !boolval(request()->get('sortable')[$column['column']] ?? false) ?? false]]);
                  }
              }
            @endphp
            @if(request()->has('sortable'))

                @if(isset($column['column']) && $column['column'] instanceof \Closure || $column['type'] == 'multifield')
                  <a class="text-white" style="margin-left: 2px;" href="{{$url}}">
                    {{ $column['name'] }}
                    @if(isset(request()->get('sortable')[$column['name']]) && request()->get('sortable')[$column['name']] == 1)
                      <i class='bx bx-sort-down'></i>
                    @elseif(isset(request()->get('sortable')[$column['name']]) && request()->get('sortable')[$column['name']] == 0)
                      <i class='bx bx-sort-up'></i>
                    @endif
                  </a>
                @else
                  <a class="text-white" style="margin-left: 2px;" href="{{$url}}">
                    {{ $column['name'] }}
                    @if(isset(request()->get('sortable')[$column['column']]) && request()->get('sortable')[$column['column']] == 1)
                      <i class='bx bx-sort-down'></i>
                    @elseif(isset(request()->get('sortable')[$column['column']]) && request()->get('sortable')[$column['column']] == 0)
                      <i class='bx bx-sort-up'></i>
                    @endif
                  </a>
                @endif
              @else
              @if(isset($column['column']) && $column['column'] instanceof \Closure || $column['type'] == 'multifield')
                <a class="text-white" href="{{$url}}">
                  {{ $column['name'] }}
                </a>
              @else
                <a class="text-white" href="{{$url}}">
                  {{ $column['name'] }}
                </a>
              @endif
            @endif
          @else
            {{ $column['name'] }}
          @endif
        </div>
      </th>
      @endforeach
      <th scope="col" class="text-end" width="10%">
        <span class="visually-hidden">{{ __('Ações') }}</span>
      </th>
    </tr>
  </thead>
  <tbody>
    @if(isset($table['registers']))
      @forelse($table['registers'] as $register)
        <tr>
          @foreach($table['columns'] as $column)
            <td class="align-middle">
              @if(isset($column['type']) && $column['type'] == 'multifield')
                @foreach($column['fields'] as $row)
                  <x-table-cell :register="$register" :column="$row" />
                @endforeach
              @else
                <x-table-cell :register="$register" :column="$column" />
              @endif
            </td>
          @endforeach
          <td class="align-middle text-nowrap text-end" width="10%">
            @foreach($table['actions'] as $action)
              @if(url_check_rules($register, $action['rules'] ?? null))
                <x-table-action :action="$action" :primary-key="$table['primaryKey']" :register="$register" />
              @endif
            @endforeach
          </td>
        </tr>
      @empty
        <tr>
          <td class="p-2 px-6" colspan="{{ count($table['columns']) + 1 }}">{{ __('Nenhum registro encontrado.') }}</td>
        </tr>
      @endforelse
    @endif
  </tbody>
  </table>
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
