/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/assets/cms/js/login.js ***!
  \******************************************/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Login = /*#__PURE__*/function () {
  function Login() {
    _classCallCheck(this, Login);

    this.init();
  }

  _createClass(Login, [{
    key: "init",
    value: function init() {
      $(".password-addon").on("click", function () {
        if ($(this).siblings("input").length > 0) {
          $(this).siblings("input").attr("type") == "password" ? $(this).siblings("input").attr("type", "input") : $(this).siblings("input").attr("type", "password");
        }
      });
    }
  }]);

  return Login;
}();

$(function () {
  new Login();
});
/******/ })()
;