"use strict";

var module = ckan.module('datepicker-module', function($) {
	return {
		initialize: function() {
			console.log('datepicker-module init for '+ this.options.field_id);
      $('[id^='+this.options.field_id+']').each(function(){
        $(this).daterangepicker({
           singleDatePicker: true,
           showDropdowns: true,
           format: 'MM/DD/YYYY'
         });
      });
    }
  };
});

$( document ).ready(function() {
  console.log(module);
	module.initialize();
});
