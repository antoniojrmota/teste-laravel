@props([
  'products',
  'category' => null
])

<div class="content-models">
  <span class="title">{{ __('Confira os modelos') }}</span>
  <div class="list">
    @forelse ($products as $product)
      <x-site.product-item :item="$product" :category="$category" />
    @empty
      <div class="content-info">
        <p class="common-text">{{ __('Nenhum modelo localizado') }}</p>
      </div>
    @endforelse
  </div>
</div>
