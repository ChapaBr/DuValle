$(document).ready(function(){
	$('.navbar-toggler').on('click', function(){
		var verifica = $('#navbarNavDropdown').hasClass('show');
		if(verifica){
			$('nav.navbar').css('background-color', 'rgba(0, 0, 0, .30)');
			$('.navbar-brand img').attr('src', 'assets/imgs/icons/white/logo-icon-white.svg');
			$('.navbar-brand img').css('width', '24px');
			$('.navbar-toggler img').attr('src', 'assets/imgs/icons/white/hamburger-icon-white.svg');
		} else {
			$('nav.navbar').css('background-color', '#FFF');
			$('.navbar-brand img').attr('src', 'assets/imgs/logos/logo-w-text.svg');
			$('.navbar-brand img').css('width', '126px');
			$('.navbar-toggler img').attr('src', 'assets/imgs/icons/green/error-icon-red.svg');
			$('a.nav-link').css('color', 'rgba(0, 0, 0, .87)');
		}
	});
});