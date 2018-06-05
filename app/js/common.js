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

});
