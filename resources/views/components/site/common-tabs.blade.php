@props(['tabs', 'local', 'theme'])

@isset($tabs)
<div class="common-tabs" {{ $attributes }}>
  <div class="tabs-wrapper {{ isset($theme) ? $theme : '' }}">
    <div class="tabs-header">
      @foreach($tabs as $tab)
        <a href="{{ $tab->href }}" name="{{ $tab->href }}" class="tabs-item {{ isset($tab->active) && $tab->active ? 'active' : '' }}">
          <span>{{ __($tab->title) }}</span>
        </a>
      @endforeach
    </div>

    @if(isset($tabs[0]->content))
    <div class="tabs-body">
      @foreach($tabs as $tab)
        <div class="tabs-content {{ isset($tab->active) && $tab->active ? 'active' : '' }}" data-id="{{ $tab->id }}">
          <x-site.common-tabs-content :data="$tab->content" />
        </div>
      @endforeach
    </div>
    @endif
  </div>
</div>
@endisset
