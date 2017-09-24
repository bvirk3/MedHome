(function($){
	$(function(){

		$('.button-collapse').sideNav();
		$('.parallax').parallax();

	});

	$("#info").click(function() {
		$('html, body').animate({
			scrollTop: $("#index-banner").offset().top
		}, 500);


	});

	$("#team").click(function() {
		$('html, body').animate({
			scrollTop: $("#team-physio").offset().top
		}, 500);
	});

	$("#ques-navbar").click(function() {
		$('html, body').animate({
			scrollTop: $("#ques_container").offset().top
		}, 500);});

	$("#contact-navbar").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact-container").offset().top
		}, 500);	

	});
   // end of document ready
})(jQuery); // end of jQuery name space