$(document).ready(function(){
	$('.form-control').blur(function(){
		var conteudo = $(this).val().length;
		if(conteudo <= 0){
			$(this).next('.invalid-feedback').css('display', 'block');
			$(this).removeClass('inputDefault');
			$(this).removeClass('inputValid');
			$(this).addClass('inputInvalid');
		} else {
			$(this).next('.invalid-feedback').css('display', 'none');
			$(this).removeClass('inputDefault');
			$(this).removeClass('inputInvalid');
			$(this).addClass('inputValid');
		}
	});
	$('a.navbar-toggler').click(function(){
		if($('div#navbarNavDropdown').hasClass('show')){
			$('nav.navbar').css("background-color", "rgba(29, 35, 30, .36)");
			$('.navbar-brand img').attr("src", "assets/imgs/icons/white/logo-icon-white.svg");
			$('.navbar-brand img').css("width", "24px");
			$('.mudaNav').css("display", "block");
			$(this).find('img').attr("src", "assets/imgs/icons/white/hamburger-icon-white.svg");
			$(this).find('.barraMid').css("background-color", "#FFF");
			$(this).find('.barraTop').css("transform", "translate(0, 0px) rotate(0deg)");
			$(this).find('.barraTop').css("background-color", "#FFF");
			$(this).find('.barraBot').css("transform", "translate(0, 0px) rotate(0deg)");
			$(this).find('.barraBot').css("background-color", "#FFF");
		} else {
			$('nav.navbar').css("background-color", "#FFF");
			$('.navbar-brand img').attr("src", "assets/imgs/logos/logo-w-text.svg");
			$('.navbar-brand img').css("width", "126px");
			$('.mudaNav').css("display", "none");
			$(this).find('img').attr("src", "assets/imgs/icons/green/error-icon-red.svg");
			$(this).find('.barraMid').css("background-color", "transparent");
			$(this).find('.barraTop').css("transform", "translate(0, 6px) rotate(-45deg)");
			$(this).find('.barraTop').css("background-color", "#319B42");
			$(this).find('.barraBot').css("transform", "translate(0, -8px) rotate(45deg)");
			$(this).find('.barraBot').css("background-color", "#319B42");
		}
	});
});