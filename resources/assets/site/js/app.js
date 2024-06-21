'use strict';

const Swal = require('sweetalert2');

class App {
  constructor() {
    this.init();
  }

  init() {
    $('.lazyload').lazyload();
    this.menu();
  }

  menu() {
    $('body').on('click', '#header .menu-icon, #header .close', function () {
      $('body').toggleClass('menu-opened');
      $('#header').toggleClass('collapse');
    });

    $('body').on('click', '#header .search-icon, #header .close-search', function () {
      $('body').toggleClass('menu-opened');
      $('#header').toggleClass('search-mode');
      $('#header .search-wrapper input').trigger('focus');
    });

    $('body').on('click', '#header .mobile-menu .has-submenu', function () {
      $(this).toggleClass('active');
    });

    $('body').on('click', '#header .language-icon', function () {
      $(this).toggleClass('active');
    });
  }

  initSelect2(params) {
    var options = {
      language: 'pt-BR',
      width: '100%',
    };

    if (typeof params === 'object')
      options = $.extend(options, params);

    $('.select2').each(function () {
      if ($(this).attr('multiple') == 'multiple') {
        options.minimumInputLength = 1;
        options.closeOnSelect = false;
        options.ajax = {
          url: $(this).data('url'),
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              q: params.term,
              page: params.page
            };
          },
          processResults: function (data, params) {
            params.page = params.page || 1;

            return {
              results: data.items,
              pagination: {
                more: (params.page * 30) < data.total_count
              }
            };
          },
          cache: true
        };
        options.escapeMarkup = function (markup) { return markup; };
        options.templateResult = function (item) { return item.text || item.name; };
        options.templateSelection = function (item) { return item.text || item.name; };
      }

      $(this).select2(options);

      $(this).on('change', function () {
        $(this).removeClass('error');

        if ($(this).val()) {
          $(this).addClass('selected');
        } else {
          $(this).removeClass('selected');
        }
      });
    });
  }

  popupYoutube(objName = '.popup-youtube') {
    $(objName).magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  }

  masks() {
    // $('.phone-mask').mask('(00) 0000.00009');
    // $('.cpf-mask').mask('000.000.000-00');
    // $('.cnpj-mask').mask('00.000.000/0000-00');
    // $('.date-mask').mask('99/99/9999');
    // $('.cep-mask').mask('99999-999');
  }

  hexToRGB(hex, colorChange, isPct) {
    let r = 0, g = 0, b = 0;
    isPct = isPct === true;
    if (colorChange !== 'undefined')
      isPct = true;

    if (hex.length == 4) {
      r = '0x' + hex[1] + hex[1];
      g = '0x' + hex[2] + hex[2];
      b = '0x' + hex[3] + hex[3];
    } else if (hex.length == 7) {
      r = '0x' + hex[1] + hex[2];
      g = '0x' + hex[3] + hex[4];
      b = '0x' + hex[5] + hex[6];
    }

    if (isPct) {
      r = +(r / 255 * 100).toFixed(1);
      g = +(g / 255 * 100).toFixed(1);
      b = +(b / 255 * 100).toFixed(1);
    }

    if (colorChange) {
      r = +(r + colorChange).toFixed(1);
      g = +(g + colorChange).toFixed(1);
      b = +(b + colorChange).toFixed(1);
    }

    return 'rgb(' + (isPct ? r + '%,' + g + '%,' + b + '%' : +r + ',' + +g + ',' + +b) + ')';
  }
}

$(function () {
  window.app = new App();
  window.comp = {};

  window.addEventListener('newsletter-added', e => {
    Swal.fire(e.detail.title, e.detail.message, e.detail.icon);
  });

  $.expr.pseudos.data = $.expr.createPseudo(function (d) {
    return function (elem) {
      if (typeof d != 'undefined') {
        return $(elem).data(d);
      } else {
        return $(elem).data();
      }
    };
  });

  $.expr.pseudos.removeData = $.expr.createPseudo(function (attribute) {
    return function (elem) {
      $.each($(elem).data(), function (key, value) {
        let attr = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (typeof attribute == 'undefined' || attr == attribute) {
          $(elem).removeAttr('data-' + attr);
          $(elem).data(attr, value);
        }
      });
      return $(elem).data();
    };
  });
});
