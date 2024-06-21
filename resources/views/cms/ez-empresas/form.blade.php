@extends('cms.layouts.master', ['title' => __('Empresas') ])

@section('content')
  @component('components.breadcrumb', [
    'routes' => [
      [
        'link' => route($route.'.index'),
        'title' => __('Empresas')
      ]
    ],
    'title' => isset($register) ? __('Editar Empresa') : __('Cadastrar Empresa')
  ])
  @endcomponent

  @if ($message = session('message'))
    <x-alert type="success" :message="$message" class="mb-4" />
  @elseif (!$errors->isEmpty())
    <x-alert type="danger" :message="$errors->all()" class="mb-4" />
  @endif

  <form id="form.{{ $route }}" action="{{ route($route.'.store', $uuid) }}" method="POST" enctype="multipart/form-data">

    @csrf

    @if(isset($register))
      @method('PUT')
    @endif

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12">

        <div class="row">
          <x-form.form-group-status name="status" :label="__('Status')" value="{{ $register->status ?? 0 }}" class="col col-md-6 mb-3" />
        </div>

        <div class="row">
          <x-form.form-group name="nome" :label="__('Nome')" value="{{ $register->nome ?? null }}" class="col col-md-6 mb-3" />
        </div>

        <div class='row'>
          <x-form.form-group name="dominio" :label="__('Domínio')" value="{{ $register->dominio ?? null }}" class="col col-md-6 mb-3" />
        </div>


        <div class="row">

          <x-form.form-group-file name="logo" :label="__('Logo').' (300x100)'" class="col col-md-6  mb-3" />
          @if( isset($register)&& $register->logo )
          <div class='col col-md-6'>
            <img src='/uploads/{{ $register->logo }}' responsive />
            <div style="inset:0; position: absolute; display: flex; align-items:center; justify-content:center">
              <button data-field="logo" type="button" class='btn btn-primary deleteImage'>
                <img src="/assets/cms/img/delete.svg" />
                Remover Imagem
              </button>
            </div>
          </div>
          @endif

        </div>

        <details>
          <summary>Social Links</summary>
          <p>Defina os links para suas redes sociais aqui</p>

          <div class="row">
            <x-form.form-group name="socialFacebook" :label="__('Facebook')" value="{{ $register->socialFacebook ?? null }}" class="col col-md-6 mb-3" />
            <x-form.form-group name="socialInstagram" :label="__('Instagram')" value="{{ $register->socialInstagram ?? null }}" class="col col-md-6 mb-3" />
            <x-form.form-group name="socialTwitter" :label="__('Twitter')" value="{{ $register->socialTwitter ?? null }}" class="col col-md-6 mb-3" />
            <x-form.form-group name="socialYoutube" :label="__('Youtube')" value="{{ $register->socialYoutube ?? null }}" class="col col-md-6 mb-3" />
            <x-form.form-group name="socialLinkedIn" :label="__('LinkedIn')" value="{{ $register->socialLinkedIn ?? null }}" class="col col-md-6 mb-3" />
            <x-form.form-group name="socialOther" :label="__('Outra')" value="{{ $register->socialOther ?? null }}" class="col col-md-6 mb-3" />
          </div>
        </details>


        <details>
          <summary>Scripts</summary>
          <p>Utilize esta seção para configurar scripts de terceiros</p>

          <div class="row">
            <x-form.form-group-textarea name="scriptsHead" :label="__('Head Scripts')" :value="$register->scriptsHead ?? null" class="col col-md-12 mb-3" />
          </div>

          <div class="row">
            <x-form.form-group-textarea name="scriptsBodyStart" :label="__('Body Start Scripts')" :value="$register->scriptsBodyStart" class="col col-md-12 mb-3" />
          </div>

          <div class="row">
            <x-form.form-group-textarea name="scriptsBodyEnd" :label="__('Body End Scripts')" :value="$register->scriptsBodyEnd" class="col col-md-12 mb-3" />
          </div>
        </details>


        <details>
          <summary>SMTP</summary>
          <p>Configure aqui o servidor de envio de Email</p>

          <div class="row">
            <x-form.form-group name="smtpHost" :label="__('Host')" value="{{ $register->smtpHost ?? null }}" class="col col-md-6 mb-3" />
          </div>

          <div class="row">
            <x-form.form-group name="smtpUser" :label="__('User')" value="{{ $register->smtpUser ?? null }}" class="col col-md-6 mb-3" />
          </div>

          <div class="row">
            <x-form.form-group name="smtpPort" :label="__('Port')" value="{{ $register->smtpPort ?? null }}" class="col col-md-6 mb-3" />
          </div>

          <div class="row">
            <x-form.form-group name="smtpPass" :label="__('Password')" value="{{ $register->smtpPass ?? null }}" class="col col-md-6 mb-3" />
          </div>
        </details>


        <x-form.nav-lang>
          @foreach ($languages as $language)
          <div class="tab-pane fade show{{ $loop->first ? ' active' : ''}}" id="tab-lang-{{ $language->id }}-panel" role="tabpanel" aria-labelledby="tab-lang-{{ $language->id }}-panel">
            <div class="row">

              <x-form.form-group-status
                name="languages[{{ $language->id }}][langEnabled]"
                :label="__('Habilitar idioma')"
                value="{{ $register->descriptions[$language->id]->langEnabled ?? 0 }}"
                class="col col-md-6 mb-3"
              />

              <h2>Otimização para ferramentas de Busca</h2>

              <x-form.form-group name="languages[{{ $language->id }}][seoTitle]" :label="__('Título')" value="{{ $register->descriptions[$language->id]->seoTitle ?? null }}" class="mb-3" :required="$language->id == 1" />

              <x-form.form-group name="languages[{{ $language->id }}][seoDescription]" :label="__('Descrição')" value="{{ $register->descriptions[$language->id]->seoDescription ?? null }}" class="mb-3" :required="$language->id == 1" />

              <x-form.form-group name="languages[{{ $language->id }}][seoKeywords]" :label="__('Palavras Chave')" value="{{ $register->descriptions[$language->id]->seoKeywords ?? null }}" class="mb-3" :required="$language->id == 1" />

              <h2>Vídeo Institucional</h2>
              <p>Cole um link do youtube aqui</p>

              <div class="row">

                <x-form.form-group name="languages[{{ $language->id }}][videoUrl]" :label="__('Vídeo do Youtube')" :value="$register->descriptions[$language->id]->videoUrl ?? null" class="col col-md-12 mb-3" />

                <x-form.form-group name="languages[{{ $language->id }}][videoDescr]" :label="__('Título do Vídeo')" :value="$register->descriptions[$language->id]->videoDescr ?? null" class="col col-md-12 mb-3" />

                  <div class="row">

                    <x-form.form-group-file
                      name="languages[{{ $language->id }}][videoImage]"
                      :label="__('Imagem').' (800x500)'"
                      class="col col-md-6  mb-3"
                    />

                    @if( isset($register) && $register->descriptions[$language->id]->videoImage )
                    <div class='col col-md-6'>
                      <img src='/uploads/{{ $register->descriptions[$language->id]->videoImage }}' responsive />
                      <div style="inset:0; position: absolute; display: flex; align-items:center; justify-content:center">
                        <button data-field="{{$language->id}}.videoImage" type="button" class='btn btn-primary deleteImage'>
                          <img src="/assets/cms/img/delete.svg" />
                          Remover Imagem
                        </button>
                      </div>
                    </div>
                    @endif

                  </div>

              </div>


            </div>
          </div>
          @endforeach
        </x-form.nav-lang>

        </div>

      </div>

      <div style="margin-bottom: 32px"></div>

      <div class="col-xs-12 col-sm-12 col-md-12 text-center mb-3">
        <div class="row justify-content-sm-center">
          <div class="d-grid gap-2 col col-sm-3 col-md-2 mb-1">
            <a href="{{ route($route.'.index') }}" class="btn btn-dark">{{ __('Cancelar') }}</a>
          </div>
          <div class="d-grid gap-2 col col-sm-3 col-md-2 mb-1">
            <button type="submit" class="btn btn-primary">{{ __('Salvar') }}</button>
          </div>
        </div>
      </div>
    </div>
  </form>
@endsection

@push('scripts')
<script type="text/javascript" src="/assets/cms/js/ckeditor.js"></script>
<script type="text/javascript">

let editors = {};

let $editors = document.querySelectorAll('.editor')
$editors.forEach(element => {

  let elID = element.id

  ClassicEditor

  .create( document.querySelector( '#'+elID ), {
      licenseKey: ''
    } )

    .then( editor => {
      editors[elID] = editor;
    } )

    .catch( error => {
      console.error( 'Oops, something went wrong!' );
      console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
      console.warn( 'Build id: w8jxrsj022h9-m8g5bb418734' );
      console.error( error );
    } );

});

function deleteImage(ev)
  {

    let btn = ev.target
    if ( btn.tagName != "BUTTON" )
    {
      btn = btn.closest('button')
    }

    const xhr = this.xhr = new XMLHttpRequest();
    xhr.open( 'POST', "{{route('cms.empresas.deleteImage', ['_token' => csrf_token() ])}}", true );
    xhr.addEventListener('load', function()
    {
      console.log(btn)
      let col = btn.closest('.col')
      col.remove()
    })

    let fm = new FormData()
    fm.append('uuid', '{{ isset($register) ? $register->uuid : '' }}')
    fm.append('field', btn.dataset.field)
    xhr.send(fm)

  }

  let $deleteImage = document.querySelectorAll('.deleteImage');
  $deleteImage.forEach(element => {
    element.addEventListener('click', deleteImage)
  })

</script>
@endpush
