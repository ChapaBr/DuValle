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
	$('a.navbarHome').click(function(){
		if($('div#navbarNavDropdown').hasClass('show')){
			$('nav.navbar').css("background-color", "rgba(29, 35, 30, .36)");
			$('.navbar-brand img').attr("src", "assets/imgs/icons/white/logo-icon-white.svg");
			$('.navbar-brand img').css("width", "24px");
			$('.mudaNav').css("display", "block");
			$('.nav-item a.nav-link').css('color', '#FFF');
			$(this).find('.barraMid').css("background-color", "#FFF");
			$(this).find('.barraTop').css("transform", "rotate(0deg)");
			$(this).find('.barraTop').css("background-color", "#FFF");
			$(this).find('.barraTop').css("top", "6px");
			$(this).find('.barraBot').css("transform", "rotate(0deg)");
			$(this).find('.barraBot').css("background-color", "#FFF");
			$(this).find('.barraBot').css("bottom", "0px");
		} else {
			$('nav.navbar').css("background-color", "#FFF");
			$('.navbar-brand img').attr("src", "assets/imgs/logos/logo-w-text.svg");
			$('.navbar-brand img').css("width", "126px");
			$('.mudaNav').css("display", "none");
			$('.nav-item a.nav-link').css('color', 'rgba(0, 0, 0, .87)');
			$(this).find('.barraMid').css("background-color", "transparent");
			$(this).find('.barraTop').css("transform", "rotate(-45deg)");
			$(this).find('.barraTop').css("top", "10px");
			$(this).find('.barraTop').css("background-color", "#319B42");
			$(this).find('.barraBot').css("transform", "rotate(45deg)");
			$(this).find('.barraBot').css("background-color", "#319B42");
			$(this).find('.barraBot').css("bottom", "10px");
		}
	});
	$('a.navbarRestante').click(function(){
		if($('div#navbarNavDropdown').hasClass('show')){
			$('.navbar-brand img').attr("src", "assets/imgs/icons/green/logo-icon.svg");
			$('.navbar-brand img').css("width", "24px");
			$('.mudaNav').css("display", "block");
			$('.nav-item a.nav-link').css('color', '#FFF');
			$(this).find('.barraMid').css("background-color", "#319B42");
			$(this).find('.barraTop').css("transform", "rotate(0deg)");
			$(this).find('.barraTop').css("top", "6px");
			$(this).find('.barraBot').css("transform", "rotate(0deg)");
			$(this).find('.barraBot').css("bottom", "0px");
		} else {
			$('.navbar-brand img').attr("src", "assets/imgs/logos/logo-w-text.svg");
			$('.navbar-brand img').css("width", "126px");
			$('.mudaNav').css("display", "none");
			$('.nav-item a.nav-link').css('color', 'rgba(0, 0, 0, .87)');
			$(this).find('.barraMid').css("background-color", "transparent");
			$(this).find('.barraTop').css("transform", "rotate(-45deg)");
			$(this).find('.barraTop').css("top", "10px");
			$(this).find('.barraBot').css("transform", "rotate(45deg)");
			$(this).find('.barraBot').css("bottom", "10px");
		}
	});
	$('a.navbarProdutos').click(function(){
		if($('div#navbarNavDropdown').hasClass('show')){
			$('.navbar-brand img').attr("src", "../assets/imgs/icons/green/logo-icon.svg");
			$('.navbar-brand img').css("width", "24px");
			$('.mudaNav').css("display", "block");
			$('.nav-item a.nav-link').css('color', '#FFF');
			$(this).find('.barraMid').css("background-color", "#319B42");
			$(this).find('.barraTop').css("transform", "rotate(0deg)");
			$(this).find('.barraTop').css("top", "6px");
			$(this).find('.barraBot').css("transform", "rotate(0deg)");
			$(this).find('.barraBot').css("bottom", "0px");
		} else {
			$('.navbar-brand img').attr("src", "../assets/imgs/logos/logo-w-text.svg");
			$('.navbar-brand img').css("width", "126px");
			$('.mudaNav').css("display", "none");
			$('.nav-item a.nav-link').css('color', 'rgba(0, 0, 0, .87)');
			$(this).find('.barraMid').css("background-color", "transparent");
			$(this).find('.barraTop').css("transform", "rotate(-45deg)");
			$(this).find('.barraTop').css("top", "10px");
			$(this).find('.barraBot').css("transform", "rotate(45deg)");
			$(this).find('.barraBot').css("bottom", "10px");
		}
	});
	var tamanhoFooter = $('#footer').offset().top;
	var tamanhoBot = 0;
	$(window).scroll(function(){
		tamanhoBot = $(this).scrollTop() + $(window).height();
		if(tamanhoBot > tamanhoFooter){
			$('.buttonArea').css('position', 'relative');
		} else {
			$('.buttonArea').css('position', 'fixed');
		}
	});
});