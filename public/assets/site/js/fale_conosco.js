/**
 * js
 *
 * @package ezoom_framework
 * @subpackage Contato
 * @category js
 * @author
 * @copyright 2016 Ezoom
 */

"use strict";

function Contato() {
    this.init();
};

Contato.prototype.init = function(){
    var self = this;

    setTimeout(function() {
        $('select.chosen-select').each(function(){
            $(this).select2();
        });
        $('#ng-app').removeClass('loading');
    }, 2000);

    app.formInit($('#form-contact'));
    this.mask();
};

Contato.prototype.mask = function(){
    $('#contact-phone').mask('(99) 9999.9999?9');
};

$(document).ready(function(){
    new Contato();
});
