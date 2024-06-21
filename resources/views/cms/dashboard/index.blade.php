@extends('cms.layouts.master', ['title' => __('Painel') ])

@section('content')
  <div class="card bg-transparent shadow-none">

    {{-- Cabeçalho --}}
    <div class="card-header bg-transparent">
      <x-breadcrumb :title="__('Seja Bem Vindo!')"/>
    </div>

    {{-- Conteúdo --}}
    <div class="card-body">
      <div id="dashboard" class='container'>

        <p>Utilize o menu ao lado para acessar as sessões disponíveis. </p>

        <p>Ao clicar em algum item, será exibida a página de visualização de
          conteúdo respectivo à sessão selecionada onde você poderá realizar a
          inclusão de novas informações, fazer a edição dos itens disponíveis
          e até mesmo excluir algo que você não queira mais.
        </p>

        <p>
          Qualquer dúvida, sugestão ou problema que você possa ter,
          não deixe de enviar-nos uma mensagem.
        </p>

        <div class="cols">

            <a class='well' href="mailto:suporte@ezoom.com.br">
              <i class="bx bx-help-circle"></i>
              Suporte
            </a>

            <a class='well' href="https://www.instagram.com/ezoom/">
              <i class="bx bxl-instagram"></i>
              Instagram
            </a>

            <a class='well' href="https://www.facebook.com/AgenciaEzoom">
              <i class="bx bxl-facebook-circle"></i>
              Facebook
            </a>

          </div>

        </div>

      </div>
    </div>
  </div>

  <style>

    .cols
    {
      margin-top: 32px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 32px;
    }

    .well{
      padding: 16px;
      background: #eee;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .cols i.bx
    {
      display: block;
      font-size: 70px;
    }


  </style>

@endsection
{{-- @push('scripts')
  <script src="{{mix('assets/cms/js/dashboard.js')}}"></script>
@endpush --}}
