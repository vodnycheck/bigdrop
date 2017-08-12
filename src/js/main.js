'use strict';

$(function() {
	new Swiper('.hp-slider', {
		prevButton: '.hp-slider .prev',
		nextButton: '.hp-slider .next',
		pagination: '.hp-slider .pagination',
		paginationClickable: true,
		effect: 'fade',
		speed: 900,
		loop: true,
		autoplay: 4000,
	});

	/*modal*/
	$(document).on('click', '#feedback', function(e) {
		e.preventDefault();
		$('html').addClass('js-action-popup-active');
	});

	$(document).on('click', '.js-action-popup-close', function(e) {
		e.preventDefault();
		$('html').removeClass('js-action-popup-active');
	});

	$(document).on('click', '.js-action-popup-content', function(e) {
		e.stopPropagation();
	});

	/*nav*/
	$(document).on('click', '.js-action-nav-toggle', function () {
		$('body').toggleClass('js-action-nav-active');
	});
});







