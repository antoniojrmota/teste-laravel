const Swal = require('sweetalert2');
class App {

  constructor() {

    this.initSettings();
    this.initFullScreen();
    this.updatePassword();
    this.btnDelete();

    $('#side-menu').metisMenu();

    let ev = new Event('app:ready');
    ev.app = this;
    window.dispatchEvent(ev);

  }

  initFullScreen() {
    $('[data-toggle="fullscreen"]').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('fullscreen-enable');
      if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    });
    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('mozfullscreenchange', exitHandler);

    function exitHandler() {
      if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        $('body').removeClass('fullscreen-enable');
      }
    }
  }

  updatePassword() {
    $('#change-password').on('submit', function (event) {
      event.preventDefault();

      var current_password = $('#current-password').val();
      var password = $('#password').val();
      var password_confirmation = $('#password-confirm').val();
      $('#current_passwordError').text('');
      $('#passwordError').text('');
      $('#password_confirmationError').text('');
      $.ajax({
        url: $(this).attr('action'),
        type: 'POST',
        data: {
          '_token': $('meta[name="csrf-token"]').attr('content'),
          current_password,
          password,
          password_confirmation,
        },
        success: function (response) {
          if (response.status == true) {
            setTimeout(function () {
              window.location.href = '/';
            }, 1000);
          } else {
            $('#current_passwordError').text(response.message);
          }
        },
        error: function (response) {
          $('#current_passwordError').text(response.responseJSON.errors.current_password);
          $('#passwordError').text(response.responseJSON.errors.password);
          $('#password_confirmError').text(response.responseJSON.errors.password_confirmation);
        }
      });
    });
  }

  initSettings() {
    let self = this;
    if (window.sessionStorage) {
      var alreadyVisited = sessionStorage.getItem('theme_mode');
      if (!alreadyVisited) {
        sessionStorage.setItem('theme_mode', 'light');
      } else {
        self.updateThemeSetting(alreadyVisited);
      }
    }
    $('#light-mode-switch, #dark-mode-switch').on('change', function () {
      self.updateThemeSetting($(this).val());
    });

    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    });
  }

  updateThemeSetting(id) {
    if ($('#light-mode-switch').prop('checked') == true && id === 'light') {
      $('#dark-mode-switch').prop('checked', false);
      $('#bootstrap-style').attr('href', '/assets/css/bootstrap.css');
      $('#app-style').attr('href', '/assets/css/app.css');
      sessionStorage.setItem('theme_mode', 'light');
    } else if ($('#dark-mode-switch').prop('checked') == true && id === 'dark') {
      $('#light-mode-switch').prop('checked', false);
      $('#bootstrap-style').attr('href', '/assets/css/bootstrap-dark.css');
      $('#app-style').attr('href', '/assets/css/app-dark.css');
      sessionStorage.setItem('theme_mode', 'dark');
    }
  }

  btnDelete() {
    let self = this;
    let $btnDelete = $('.btn-delete');
    if ($btnDelete.length) {
      $btnDelete.on('click', function (e) {
        e.preventDefault();
        Swal.fire({
          title: self.trans('modal.delete.title'),
          text: self.trans('modal.delete.text'),
          icon: self.trans('modal.delete.icon'),
          confirmButtonText: self.trans('modal.btn.yes'),
          cancelButtonText: self.trans('modal.btn.cancel'),
          showCancelButton: true,
          reverseButtons: true
        }).then((action) => {
          if (action.isConfirmed) {
            $(this).closest('form').trigger('submit');
          }
        });
      });
    }
  }

  alertError(jqXHR) {
    let msg = '';
    if (typeof jqXHR.responseJSON.errors != 'undefined') {
      if (jqXHR.responseJSON.errors instanceof Object) {
        for (let key in jqXHR.responseJSON.errors) {
          msg += jqXHR.responseJSON.errors[key].toString() + '<br/>';
        }
      } else {
        msg = jqXHR.responseJSON.message;
      }
    } else {
      msg = jqXHR.statusText;
    }

    Swal.fire({
      title: this.trans('modal.error.title'),
      text: msg ?? this.trans('modal.error.text'),
      icon: this.trans('modal.error.icon'),
      confirmButtonText: this.trans('modal.btn.ok')
    });
  }

  viewPwd() {
    $('.password-addon').on('click', function () {
      let $input = $(this).siblings('input');
      if ($input.length > 0) {
        if ($input.attr('type') == 'password') {
          $input.attr('type', 'input');
          $(this).find('i').removeClass('mdi-eye-outline').addClass('mdi-eye-off-outline');
        } else {
          $input.attr('type', 'password');
          $(this).find('i').removeClass('mdi-eye-off-outline').addClass('mdi-eye-outline');
        }
      }
    });
  }

  trans(key, replace = {}) {
    let i18n = key.split('.').reduce((t, i) => t[i] || null, window.i18n);

    for (var placeholder in replace) {
      i18n = i18n.replace(':${placeholder}', replace[placeholder]);
    }

    return i18n;
  }

  stripTags(str) {
    return str.replace(/^\s+|\s+$/g, '');
    // return str.replace(/(<([^>]+)>)/gi, '');
  }

  slugify(str) {
    str = this.stripTags(str); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    let from = 'ãàáäâáº½èéëêìíïîõòóöôùúüûñç·/_,:;';
    let to = 'aaaaa--eeeeeiiiiooooouuuunc------';
    for (let x = 0; x < from.length; x++)
      str = str.replace(new RegExp(from.charAt(x), 'g'), to.charAt(x));

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    return str;
  }

  formValidate(form, errorPlacement, rules, messages) {

    let $form = $(form);

    let config = {
      focusInvalid: false,
      ignore: null,
      errorPlacement: errorPlacement ?? function (error, element) {
        error.addClass('invalid-feedback');
        error.insertAfter(element);
      },
      invalidHandler: function (f, v) {
        try {

          let firstInvalidElement = $(v.errorList[0].element);
          firstInvalidElement.trigger('focus');
          $('html,body').scrollTop(firstInvalidElement.offset().top - 200);

          let detail = firstInvalidElement[0].closest('details');
          if (detail) {
            detail.setAttribute('open', 'open');
          }

        } catch (e) {
          // ignore IE throwing errors when focusing hidden elements
        }
      },

      submitHandler: function (form) {

        if ($(form).data('loading'))
          return false;

        $(form).data('loading', true);
        $(form).find('button[type="submit"]').addClass('loading').prop('disabled', true);

        $(form)[0].submit();

      }
    };

    if (rules != undefined) config.rules = rules;
    if (messages != undefined) config.messages = messages;

    $form.validate(config);
    return $form;

  }

  ckeditor(className = '.ckeditor', route = null) {

    //https://artisansweb.net/how-to-use-ckeditor-5-in-laravel/
    class MyUploadAdapter {
      constructor(loader) {
        this.loader = loader;
      }

      upload() {
        return this.loader.file
          .then(file => new Promise((resolve, reject) => {
            this._initRequest();
            this._initListeners(resolve, reject, file);
            this._sendRequest(file);
          }));
      }

      abort() {
        if (this.xhr) {
          this.xhr.abort();
        }
      }

      _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();

        xhr.open('POST', route, true);
        xhr.responseType = 'json';
      }

      _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
          const response = xhr.response;

          if (!response || response.error) {
            return reject(response && response.error ? response.error.message : genericErrorText);
          }

          resolve(response);
        });

        if (xhr.upload) {
          xhr.upload.addEventListener('progress', evt => {
            if (evt.lengthComputable) {
              loader.uploadTotal = evt.total;
              loader.uploaded = evt.loaded;
            }
          });
        }
      }

      _sendRequest(file) {
        const data = new FormData();

        data.append('upload', file);

        this.xhr.send(data);
      }
    }

    function MyCustomUploadAdapterPlugin(editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        return new MyUploadAdapter(loader);
      };
    }

    let plugins = [];
    if (route != null)
      plugins.push(MyCustomUploadAdapterPlugin);

    let editors = {};
    $(className).each(function (idx, element) {
      const elID = element.id;
      ClassicEditor.create(document.querySelector('#' + elID), {
        licenseKey: '',
        extraPlugins: plugins
      }).then(editor => {
        editors[elID] = editor;
      }).catch(error => {
        console.error('Oops, something went wrong!');
        console.error(error);
      });
    });

  }

}

$(function () {
  window.app = new App();
  // Necessário para alguns componentes
  window.comp = {};
});
