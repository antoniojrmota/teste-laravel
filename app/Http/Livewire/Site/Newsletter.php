<?php

namespace App\Http\Livewire\Site;

use App\Models\SiteNewsletter;
use Livewire\Component;

class Newsletter extends Component
{
  public $email = null;
  public $accepted = null;

  public function submit()
  {
    $input = $this->validate(
      [
        'email'    => 'required|email',
        'accepted' => 'accepted'
      ],
      [],
      [
        'email'    => __('e-mail'),
        'accepted' => __('confirmar recebimento de conteúdos')
      ]
    );

    // Edita ou cadastra
    SiteNewsletter::updateOrCreate(
      [
        'company_id' => 1,
        'email'      => $input['email'],
      ],
      [
        'accepted'   => $input['accepted']
      ]
    );

    // Limpa os campos
    $this->reset(['email', 'accepted']);

    // Este dispatch requer um listener
    // window.addEventListener('email-added', event => {
    //   alert(event.detail.message);
    // })
    $this->dispatchBrowserEvent('newsletter-added', [
      'title'   => __('Sucesso'),
      'message' => __('Seu e-mail adicionado com sucesso!'),
      'icon'    => 'success'
    ]);
  }

  public function render()
  {
    return view('livewire.site.newsletter');
  }
}
