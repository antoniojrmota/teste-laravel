/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************************************!*\
  !*** ./resources/assets/components/form/select2.js ***!
  \*****************************************************/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormSelect2 = /*#__PURE__*/function () {
  function FormSelect2() {
    _classCallCheck(this, FormSelect2);

    this.init();
  }

  _createClass(FormSelect2, [{
    key: "init",
    value: function init() {
      $('.select2').select2();
    }
  }, {
    key: "reinit",
    value: function reinit() {
      console.error('FormSelect2 reinit called');
      this.init();
    }
  }]);

  return FormSelect2;
}();

$(function () {
  window.comp.formSelect2 = new FormSelect2();
});
/******/ })()
;