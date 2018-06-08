$(function() {

	// Making top navbar thinner at scroll
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.header__wrapper').css({'padding-top':'10px', 'padding-bottom':'10px'});

		} else {
			$('.header__wrapper').css({'padding-top':'20px', 'padding-bottom':'20px'});
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


