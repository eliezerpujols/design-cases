/*
	Design Cases | Eliezer Pujols
*/

$(document).ready(function(){
	// Menu
	$(".header__trigger").click(function(){
		$(".header").toggleClass("header--opened");
	});

	// Modal
	$('a[data-modal]').click(function(e) {
		// Cancel the link behavior
		e.preventDefault();
		// Get the A tag
		var id = $(this).attr('href');

		$(id).addClass("modal--opened");
		$("body").addClass("body--ophus");
	});

	$(".modal__close").click(function(){
		$(".modal").removeClass("modal--opened");
		$("body").removeClass("body--ophus");
	});
});