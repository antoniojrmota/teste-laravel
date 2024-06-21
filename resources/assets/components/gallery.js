'use strict';

class Gallery {
  constructor() {
    this.init();
  }

  init() {

    let $deleteFile = document.querySelectorAll('.galleryDeleteBtn');
    $deleteFile.forEach(element => {
      element.href = '#';
      element.addEventListener('click', this.deleteFile);
    });

  }

  reinit() {
    $('.galleryDeleteBtn').off('click');
    this.init();
  }

  deleteFile(ev) {

    let btn = ev.target;

    const xhr = this.xhr = new XMLHttpRequest();
    xhr.open('GET', btn.dataset.route, true);
    xhr.addEventListener('load', function () {
      let col = btn.closest('.card');
      col.remove();
    });

    let fm = new FormData();
    fm.append('uuid', btn.dataset.uuid);
    xhr.send(fm);

  }
}

$(function () {
  window.comp.gallery = new Gallery();
});
