/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./resources/assets/cms/js/register.js ***!
  \*********************************************/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Register = /*#__PURE__*/function () {
  function Register() {
    _classCallCheck(this, Register);

    this.init();
  }

  _createClass(Register, [{
    key: "init",
    value: function init() {
      var self = this;
      $('#input-phone').inputmask({
        mask: '(99) 9 9999.9999'
      });
      $('.password-addon').on('click', function () {
        if ($(this).siblings('input').length > 0) {
          $(this).siblings('input').attr('type') == 'password' ? $(this).siblings('input').attr('type', 'input') : $(this).siblings('input').attr('type', 'password');
        }
      });
      var currentFormat = self.trans('daterange.format'),
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
  }, {
    key: "trans",
    value: function trans(key) {
      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18n = key.split('.').reduce(function (t, i) {
        return t[i] || null;
      }, window.i18n);

      for (var placeholder in replace) {
        i18n = i18n.replace(':${placeholder}', replace[placeholder]);
      }

      return i18n;
    }
  }]);

  return Register;
}();

$(function () {
  new Register();
});
/******/ })()
;