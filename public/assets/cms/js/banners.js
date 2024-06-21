/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./resources/assets/cms/js/banners.js ***!
  \********************************************/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Banners = /*#__PURE__*/function () {
  function Banners() {
    _classCallCheck(this, Banners);

    this.init();
  }

  _createClass(Banners, [{
    key: "init",
    value: function init() {
      app.ckeditor('.ckeditor');
    }
  }]);

  return Banners;
}();

$(function () {
  new Banners();
});
/******/ })()
;