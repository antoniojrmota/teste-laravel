@props(['attributes'])

<section id="newsletter">
  <div class="newsletter-wrapper">
    <span class="newsletter-title">{{ __('Fique por dentro do universo Deux.') }}</span>
    <form id="newsletter-form" method="POST" class="form-validation">
      @csrf
      <input class="field" type="email" name="email" placeholder="{{ __('seu@email.com.br') }}" required />
      <button class="common-button send-newsletter">
        <span>{{ __('Inscrever') }}</span>
        @svg('site-arrow-right')
      </button>
    </form>
  </div>
</section>
