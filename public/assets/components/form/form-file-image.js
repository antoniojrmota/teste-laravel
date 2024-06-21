/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************************!*\
  !*** ./resources/assets/components/form/form-file-image.js ***!
  \*************************************************************/


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormFileImage = /*#__PURE__*/function () {
  function FormFileImage() {
    _classCallCheck(this, FormFileImage);

    this.init();
  }

  _createClass(FormFileImage, [{
    key: "init",
    value: function init() {
      var _this = this;

      var $deleteFile = document.querySelectorAll(".deleteFile");
      $deleteFile.forEach(function (element) {
        element.addEventListener("click", _this.deleteFile);
      });
    }
  }, {
    key: "reinit",
    value: function reinit() {
      $(".input-file").off("change");
      this.init();
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(ev) {
      var btn = ev.target;

      if (btn.tagName != "BUTTON") {
        btn = btn.closest("button");
      }

      var xhr = this.xhr = new XMLHttpRequest();
      xhr.open("POST", btn.dataset.route, true);
      xhr.addEventListener("load", function () {
        console.log(btn);
        var col = btn.closest(".row");
        col.remove();
      });
      var fm = new FormData();
      fm.append("field", btn.dataset.field);
      fm.append("uuid", btn.dataset.uuid);
      xhr.send(fm);
    }
  }]);

  return FormFileImage;
}();

$(function () {
  window.comp.formFileImage = new FormFileImage();
});
/******/ })()
;