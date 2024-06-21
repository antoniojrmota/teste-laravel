'use strict';

class Register {
  constructor() {
    this.init();
  }
  init() {
    let self = this;
    $('#input-phone').inputmask({
      mask: '(99) 9 9999.9999',
    });

    $('.password-addon').on('click', function () {
      if ($(this).siblings('input').length > 0) {
        $(this).siblings('input').attr('type') == 'password' ? $(this).siblings('input').attr('type', 'input') : $(this).siblings('input').attr('type', 'password');
      }
    });

    let currentFormat = self.trans('daterange.format'),
      currentDate = moment().format(currentFormat);
    $('#datepicker').daterangepicker({
      locale: self.trans('daterange'),
      alwaysShowCalendars: true,
      autoApply: true,
      singleDatePicker: true,
      showDropdowns: true,
      maxDate: currentDate
    });
  }
  trans(key, replace = {}) {
    let i18n = key.split('.').reduce((t, i) => t[i] || null, window.i18n);

    for (var placeholder in replace) {
      i18n = i18n.replace(':${placeholder}', replace[placeholder]);
    }

    return i18n;
  }
}

$(function () {
  new Register();
});
