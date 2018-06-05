// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require bootstrap.min
//= require i18n
//= require i18n.js
//= require i18n/translations
//= require jquery
//= require jquery-1.10.2.min
//= require jquery.carouFredSel-6.2.1-packed
//= require jquery.easing.1.3
//= require jquery.flexslider
//= require rails-ujs
//= require script.min
//= require jquery.sequence-min
//= require jquery.elevatezoom.js
//= require toastr
//= require turbolinks

$(document).on('click', '.star_point', function(e){
  toastr['success'](I18n.t("thank_rating"));
  $('#create_rating').click();
});
