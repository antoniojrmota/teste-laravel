"use strict";

class Login {
  constructor() {
    this.init();
  }
  init() {
    $(".password-addon").on("click", function () {
      if ($(this).siblings("input").length > 0) {
        $(this).siblings("input").attr("type") == "password"
          ? $(this).siblings("input").attr("type", "input")
          : $(this).siblings("input").attr("type", "password");
      }
    });
  }
}

$(function () {
  new Login();
});
