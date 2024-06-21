'use strict';

class Produtos {

  constructor() {
    this.init();
  }

  init() {
    app.formValidate('#form.cms.paginas');
    app.ckeditor('.ckeditor', null);
  }

}

$(function () {
  new Produtos();
});
