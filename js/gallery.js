// JavaScript Document
/*global $*/
/*eslint no-undef: "error"*/
/*eslint-env node*/

/* fixed nav contents */
$(function($) {
	var nav = $('#gallery-header'),
			header =$('.gallery-header-a'),
			logo =$('.gallery-header-img'),
			offset = nav.offset();
	header.addClass('white-a');

	
	
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top) {
			nav.addClass('fixed');
			nav.removeClass('white');
			nav.addClass('black');
			
			header.removeClass('white-a');
			header.addClass('black-a');

		} else {
			nav.removeClass('fixed');
			nav.removeClass('black');
			nav.addClass('white');
			
			header.removeClass('black-a');
			header.addClass('white-a');
			header.addClass('white-a');
		}
	});
});

$(function(){
	$(".gallery-photo-ul").chan({
		beginning_delay: 600, 
		delay_between: 200, 
		duration: 500, 
	});
});