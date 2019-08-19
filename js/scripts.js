$(document).ready(function(){
	'use strict'
	$('.slider').slick({
		prevArrow:'<button class="slider__arrow slider__arrow--prev">></button>',
		nextArrow:'<button class="slider__arrow slider__arrow--next">></button>',
		dots		:false,
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplaySpeed: 2000

		
	});
});