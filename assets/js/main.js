$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    items: 0,
    autoplay: false ,
    center: false,
    responsive: true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
});

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
			$(this).find('.barraTop').css("-moz-transform", "rotate(0deg)"); // Mozilla Firefox
			$(this).find('.barraTop').css("-ms-transform", "rotate(0deg)"); // IE 9
			$(this).find('.barraTop').css("-webkit-transform", "rotate(0deg)"); // Chrome, Safari, Opera
			$(this).find('.barraTop').css("transform", "rotate(0deg)");
			$(this).find('.barraTop').css("background-color", "#FFF");
			$(this).find('.barraTop').css("top", "6px");
			$(this).find('.barraBot').css("-moz-transform", "rotate(0deg)"); // Mozilla Firefox
			$(this).find('.barraBot').css("-ms-transform", "rotate(0deg)"); // IE 9
			$(this).find('.barraBot').css("-webkit-transform", "rotate(0deg)"); // Chrome, Safari, Opera
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
			$(this).find('.barraTop').css("-moz-transform", "rotate(-45deg)"); // Mozilla Firefox
			$(this).find('.barraTop').css("-ms-transform", "rotate(-45deg)"); // IE 9
			$(this).find('.barraTop').css("-webkit-transform", "rotate(-45deg)"); // Chrome, Safari, Opera
			$(this).find('.barraTop').css("transform", "rotate(-45deg)");
			$(this).find('.barraTop').css("top", "10px");
			$(this).find('.barraTop').css("background-color", "#319B42");
			$(this).find('.barraBot').css("-moz-transform", "rotate(45deg)"); // Mozilla Firefox
			$(this).find('.barraBot').css("-ms-transform", "rotate(45deg)"); // IE 9
			$(this).find('.barraBot').css("-webkit-transform", "rotate(45deg)"); // Chrome, Safari, Opera
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
			$('.buttonArea').css('margin-bottom', '64px');
			$('.buttonArea').css('margin-top', '24px');
		} else {
			$('.buttonArea').css('position', 'fixed');
			$('.buttonArea').css('margin-bottom', '0px');
			$('.buttonArea').css('margin-top', '0px');
		}
	});
});