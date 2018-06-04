$(function() {

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.header__wrapper').css('padding', '10px 60px');
		} else {
			$('.header__wrapper').css('padding', '20px 60px');
		}
	});

});
