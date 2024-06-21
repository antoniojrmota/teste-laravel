/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./resources/assets/cms/js/user.js ***!
  \*****************************************/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Users = /*#__PURE__*/function () {
  function Users() {
    _classCallCheck(this, Users);

    this.init();
    this.form();
  }

  _createClass(Users, [{
    key: "init",
    value: function init() {
      app.viewPwd();
      $('#input-phone').inputmask({
        mask: '(99) 9 9999.9999'
      });
    }
  }, {
    key: "form",
    value: function form() {
      var $form = $('#form-user');

      if ($form) {
        $('#input-role').on('change', function (e) {
          if ($(this).val()) {
            var permissions = $(e.target).find('option:selected').data('permissions');

            if (typeof permissions != 'undefined' && Object.keys(permissions).length > 0) {
              $('.list-group .list-group-item').each(function (i, el) {
                var group = $(el).find('.fw-bold').text().trim();

                if (typeof permissions[group] != 'undefined') {
                  for (var permission in permissions[group]) {
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
  }]);

  return Users;
}();

$(function () {
  new Users();
});
/******/ })()
;