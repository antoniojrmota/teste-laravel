<section id="newsletter">
  <div class="newsletter-wrapper">
    <div class="newsletter-title">
      {{ __('Fique por dentro do nosso universo') }}
      <span class="newsletter-subtitle">{{ __('Acesse nossas redes sociais') }}</span>
    </div>

    <form id="newsletter-form" wire:submit.prevent="submit">
      @csrf
      <div class="newsletter-fields">
        <input class="field" type="email" placeholder="{{ __('seu@email.com.br') }}" required wire:model="email" />
        @error('email') <span class="error">{{ $message }}</span> @enderror

        <label for="newsletter-input-accepted">
          <input type="checkbox" id="newsletter-input-accepted" wire:model="accepted">
          <span>{{ __('Confirmo que aceito receber conteúdos e ofertas') }}</span>
        </label>
        @error('accepted') <span class="error">{{ $message }}</span> @enderror
      </div>
      <button class="common-button send-newsletter">
        <span>{{ __('Inscrever') }}</span>
        @svg('site-arrow-right')
      </button>
    </form>
  </div>
</section>
