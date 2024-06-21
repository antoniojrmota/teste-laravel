/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ./resources/assets/site/js/attendance/attendance.js ***!
  \***********************************************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Attendance = /*#__PURE__*/function () {
  function Attendance() {
    _classCallCheck(this, Attendance);

    this.init();
  }

  _createClass(Attendance, [{
    key: "init",
    value: function init() {
      $('.lazyload').lazyload();
    }
  }]);

  return Attendance;
}();

$(function () {
  new Attendance();
});
/******/ })()
;