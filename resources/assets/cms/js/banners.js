'use strict';

class Banners {
  constructor() {
    this.init();
  }
  init() {
    app.ckeditor('.ckeditor');
  }
}

$(function () {
  new Banners();
});
