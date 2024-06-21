class Attendance {
  constructor() {
    this.init();
  }

  init() {
    $('.lazyload').lazyload();
  }
}

$(function () {
  new Attendance();
});
