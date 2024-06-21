@props([
  'tabLang' => 'tab-lang'
])
<div class="row">
  <ul class="nav nav-tabs id="{{ $tabLang . '-tab' }}" role="tablist">
    @foreach($languages as $language)
    <li class="nav-item" role="presentation">
      <button class="nav-link{{ $loop->first ? ' active' : '' }}" id="{{ $tabLang .'-'. $language->id }}"
        data-bs-toggle="pill"
        data-bs-target="#{{ $tabLang .'-'. $language->id.'-panel' }}"
        type="button"
        role="tab"
        aria-controls="{{ $tabLang .'-'. $language->id.'-panel' }}"
        aria-selected="true">
        <img src="{{ asset('/assets/imgs/flags/'.$language->image) }}" alt="flag-{{ $language->code }}" class="me-1" height="12">
        <span class="align-middle">{{ __($language->name) }}</span>
      </button>
    </li>
    @endforeach
  </ul>
  <div class="tab-content" id="{{ $tabLang . '-content' }}">
    {{ $slot }}
  </div>
</div>
