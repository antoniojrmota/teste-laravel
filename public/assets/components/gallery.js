/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./resources/assets/components/gallery.js ***!
  \************************************************/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Gallery = /*#__PURE__*/function () {
  function Gallery() {
    _classCallCheck(this, Gallery);

    this.init();
  }

  _createClass(Gallery, [{
    key: "init",
    value: function init() {
      var _this = this;

      var $deleteFile = document.querySelectorAll('.galleryDeleteBtn');
      $deleteFile.forEach(function (element) {
        element.href = '#';
        element.addEventListener('click', _this.deleteFile);
      });
    }
  }, {
    key: "reinit",
    value: function reinit() {
      $('.galleryDeleteBtn').off('click');
      this.init();
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(ev) {
      var btn = ev.target;
      var xhr = this.xhr = new XMLHttpRequest();
      xhr.open('GET', btn.dataset.route, true);
      xhr.addEventListener('load', function () {
        var col = btn.closest('.card');
        col.remove();
      });
      var fm = new FormData();
      fm.append('uuid', btn.dataset.uuid);
      xhr.send(fm);
    }
  }]);

  return Gallery;
}();

$(function () {
  window.comp.gallery = new Gallery();
});
/******/ })()
;