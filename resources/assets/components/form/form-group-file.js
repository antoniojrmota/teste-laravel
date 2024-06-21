"use strict";
const Swal = require("sweetalert2");

class FormGroupFile {
  constructor() {
    this.init();
  }

  init() {
    $(".input-file").on("change", function () {
      let $this = $(this),
        $input = $this.find("input"),
        $formControl = $this.find(".form-control"),
        $btn = $this.find(".btn"),
        fileList = $input.prop("files"),
        fileNames = [],
        changeButton = false;

      if (fileList.length) {
        for (let x = 0; x < fileList.length; x++)
          fileNames.push(fileList[x].name);

        $formControl.removeClass("text-muted").html(fileNames.join(", "));

        changeButton = true;

        // Informa que pode ser removido o arquivo anterior
        $('input[name="remove_' + $input.attr("name") + '"').val(1);
      } else if ($input.data("old").length) {
        changeButton = true;
      }

      if (changeButton) {
        $btn
          .removeClass("btn-primary")
          .addClass("btn-danger")
          .html(app.trans("fileInput.remove"));
        $btn.on("click", function (e) {
          e.stopPropagation();
          e.preventDefault();
          Swal.fire({
            title: app.trans("modal.delete.title"),
            text: app.trans("modal.delete.text"),
            icon: app.trans("modal.delete.icon"),
            confirmButtonText: app.trans("modal.btn.yes"),
            cancelButtonText: app.trans("modal.btn.cancel"),
            showCancelButton: true,
            reverseButtons: true,
          }).then((action) => {
            if (action.isConfirmed) {
              $btn.off("click");
              $formControl.addClass("text-muted");
              $formControl.html($formControl.data("placeholder"));

              $btn.removeClass("btn-danger");
              $btn.addClass("btn-primary");
              $btn.html(app.trans("fileInput.add"));
              $input.data("old", 0);
              $input.val("");

              // Numa edição pode ser necessário solicitar o campo novamente
              if ($btn.data("force-required") == 1)
                $input.prop("required", true);

              $input.trigger("change");

              // Informa que pode ser removido o arquivo anterior
              $('input[name="remove_' + $input.attr("name") + '"').val(1);
            }
          });
        });
      }
    });
    $(".input-file").trigger("change");
  }
  reinit() {
    $(".input-file").off("change");
    this.init();
  }
}

$(function () {
  window.comp.formGroupFile = new FormGroupFile();
});
