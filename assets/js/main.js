/*
	Design Cases | Eliezer Pujols
*/

// Pre-loader
$(window).on("load", function() {
	$(".preloader").addClass("preloader--hidden");
});

// Smooth Transition, modal...
$(document).ready(function(){
	smoothPage();
	toggleMenu();
	modalComponent();

	function smoothPage() {
		$("a.u--transition").click(function(e){
			e.preventDefault();
			linkLocation = this.href;

			$("body").fadeOut(500, redirectPage);      
		});
	
		function redirectPage() {
			window.location = linkLocation;
		}
	}

	function modalComponent() {
		$('a[data-modal]').click(function(e) {
			e.preventDefault();
			var id = $(this).attr('href');
	
			$(id).addClass("modal--opened");
			$("body").addClass("body--ophus");
		});
	
		$(".modal__close").click(function(){
			$(".modal").removeClass("modal--opened");
			$("body").removeClass("body--ophus");
		});
	}

	function toggleMenu() {
		$(".header__trigger").click(function(){
			$(".header").toggleClass("header--opened");
		});
	}	
});