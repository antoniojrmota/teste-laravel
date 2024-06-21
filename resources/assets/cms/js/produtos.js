'use strict';

class Produtos {

  constructor() {
    this.init();
  }

  init() {

    let form = document.querySelector('form.mustValidate');
    app.formValidate(form);

    //let route = form.querySelector('[name=ckeditor_upload]');
    app.ckeditor('.ckeditor', null);

  }

}

$(function () {
  new Produtos();
});
