'use strict';

class FormSelect2 {

  constructor() {
    this.init();
  }

  init() {

    $('.select2').select2();

  }
  reinit() {
    console.error('FormSelect2 reinit called');
    this.init();
  }

}

$(function () {
  window.comp.formSelect2 = new FormSelect2();
});
