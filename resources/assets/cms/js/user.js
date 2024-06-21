'use strict';

class Users {
  constructor() {
    this.init();
    this.form();
  }

  init() {
    app.viewPwd();
    $('#input-phone').inputmask({
      mask: '(99) 9 9999.9999',
    });
  }

  form() {
    let $form = $('#form-user');
    if ($form) {
      $('#input-role').on('change', function (e) {
        if ($(this).val()) {
          let permissions = $(e.target).find('option:selected').data('permissions');
          if (typeof permissions != 'undefined' && Object.keys(permissions).length > 0) {
            $('.list-group .list-group-item').each(function (i, el) {
              let group = $(el).find('.fw-bold').text().trim();
              if (typeof permissions[group] != 'undefined') {
                for (let permission in permissions[group]) {
                  $(el).find('input[name="permissions[]"][value="' + permissions[group][permission] + '"]').prop('checked', true);
                }
              }
            });
          } else {
            $('.list-group .list-group-item input[name="permissions[]"]').prop('checked', false);
          }
        }
      });
      $('#input-role').trigger('change');
    }
  }
}

$(function () {
  new Users();
});
