@props([
  'register' => null,
  'key'      => 'uuid'
])
<div class="d-flex justify-content-sm-center justify-content-md-between">
  <a href="{{ route($route.'.index') }}" class="btn btn-outline-dark">{{ __('Cancelar') }}</a>
  {{ $slot }}
  <div>
    <button type="submit" class="btn btn-primary">{{ __('Salvar') }}</button>
    {{-- <button type="button" id="button-save-exit" data-action-button="{{isset($register) ? route($route.'.update', [$register->{$key}, 'redirect' => 'back']) : route($route.'.store', ['redirect' => 'back'])}}" class="btn btn-primary">{{ __('Salvar e Sair') }}</button>
    <script>
      document.getElementById('button-save-exit').addEventListener('click',function() {
        const form = document.querySelector('.form');
        form.action = this.getAttribute('data-action-button');
        form.submit()
      });
    </script> --}}
  </div>
</div>
