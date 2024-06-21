@if($lazyload)
<div class="{{ $class }} lazyload" data-src="{{ $src }}" data-background="{{ $lazyloadBackground }}" @if($xRef)
  x-ref="{{ $xRef }}" @endif></div>
@else
<img src="{{ $src }}" @if($class) class="{{ $class }}" @endif @if($alt) alt="{{ $alt }}" @endif @if($xRef)
  x-ref="{{ $xRef }}" @endif />
@endif