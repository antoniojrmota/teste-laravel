@props([
  'register',
  'column'
])

<div class="{{ $column['class'] ?? '' }}">
  <x-table-cell-item :register="$register" :column="$column" />
</div>
