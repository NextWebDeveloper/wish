$(function() {

	// Making top navbar thinner at scroll
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.header__wrapper').css('padding', '10px 60px');
		} else {
			$('.header__wrapper').css('padding', '20px 60px');
		}
	});

	// Show-hide aside menu
	$('.header__menu').on('click', function() {
		$('.asideNav').toggleClass('asideNav_visible');
	 });
	 
	// Aside blocks to center
	function resizeScrenn(){
		var width = $(window).width();
		if (width < 1200) {
			$('#main').children().removeClass('container-fluid').addClass('container');
		} else {
			$('#main').children().removeClass('container').addClass('container-fluid');
		}
	}
	resizeScrenn();
	$(window).resize(function(){
		resizeScrenn();
	});


});


