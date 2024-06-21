"use strict";

class FormFileImage {
  constructor() {
    this.init();
  }

  init() {
    let $deleteFile = document.querySelectorAll(".deleteFile");
    $deleteFile.forEach((element) => {
      element.addEventListener("click", this.deleteFile);
    });
  }

  reinit() {
    $(".input-file").off("change");
    this.init();
  }

  deleteFile(ev) {
    let btn = ev.target;
    if (btn.tagName != "BUTTON") {
      btn = btn.closest("button");
    }

    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.open("POST", btn.dataset.route, true);
    xhr.addEventListener("load", function () {
      console.log(btn);
      let col = btn.closest(".row");
      col.remove();
    });

    let fm = new FormData();
    fm.append("field", btn.dataset.field);
    fm.append("uuid", btn.dataset.uuid);
    xhr.send(fm);
  }
}

$(function () {
  window.comp.formFileImage = new FormFileImage();
});
