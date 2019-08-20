$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
    items: 0,
    autoplay: false ,
    center: false,
    responsive: true,
    responsive:{
        0:{
            items:1
        },
        360:{
        	items: 2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
	});

	$('.owl-carousel a').click(function(){
		var typeItem = $(this).attr('rel');
		if(typeItem === 'todos'){
			$('.owl-carousel a').removeClass('active');
			$(this).addClass('active');
			$('.productsItem').css("display", "block");
		} else if(typeItem === 'verao'){
			$('.owl-carousel a').removeClass('active');
			$(this).addClass('active');
			$('ul .productsItem').css("display", "none");
			$('ul .verao').css("display", "block");
			$('ul .leguminosas').css("display", "none");
			$('.productsList .inverno').css("display", "none");
		} else if(typeItem === 'leguminosas'){
			$('.owl-carousel a').removeClass('active');
			$(this).addClass('active');
			$('ul .verao').css("display", "none");
			$('ul .productsItem').css("display", "none");
			$('ul .leguminosas').css("display", "block");
			$('ul .inverno').css("display", "none");
		} else if(typeItem === 'inverno'){
			$('.owl-carousel a').removeClass('active');
			$(this).addClass('active');
			$('ul .verao').css("display", "none");
			$('ul .productsItem').css("display", "none");
			$('ul .leguminosas').css("display", "none");
			$('ul .inverno').css("display", "block");
		}
	});

	$('.filtroDesktop a').click(function(){
		var typeItem = $(this).attr('rel');
		if(typeItem === 'todos'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('.productsItem').css("display", "inline-block");
		} else if(typeItem === 'verao'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('ul .productsItem').css("display", "none");
			$('ul .verao').css("display", "inline-block");
			$('ul .leguminosas').css("display", "none");
			$('.productsList .inverno').css("display", "none");
		} else if(typeItem === 'leguminosas'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('ul .verao').css("display", "none");
			$('ul .productsItem').css("display", "none");
			$('ul .leguminosas').css("display", "inline-block");
			$('ul .inverno').css("display", "none");
		} else if(typeItem === 'inverno'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('ul .verao').css("display", "none");
			$('ul .productsItem').css("display", "none");
			$('ul .leguminosas').css("display", "none");
			$('ul .inverno').css("display", "inline-block");
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
		if($('div#conteudoNavbarSuportado').hasClass('show')){
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
			$(this).find('.barraTop').css("top", "12px");
			$(this).find('.barraTop').css("background-color", "#319B42");
			$(this).find('.barraBot').css("-moz-transform", "rotate(45deg)"); // Mozilla Firefox
			$(this).find('.barraBot').css("-ms-transform", "rotate(45deg)"); // IE 9
			$(this).find('.barraBot').css("-webkit-transform", "rotate(45deg)"); // Chrome, Safari, Opera
			$(this).find('.barraBot').css("transform", "rotate(45deg)");
			$(this).find('.barraBot').css("background-color", "#319B42");
			$(this).find('.barraBot').css("bottom", "8px");
		}
	});
	$('a.navbarRestante').click(function(){
		if($('div#navbarNavDropdown').hasClass('show')){
			$('.navbar-brand img').attr("src", "assets/imgs/icons/green/logo-icon.svg");
			$('.navbar-brand img').css("width", "24px");
			$('.mudaNav').css("display", "block");
			$('.nav-item a.nav-link').css('color', '#FFF');
			$(this).find('.barraMid').css("background-color", "#319B42");
			$(this).find('.barraTop').css("-moz-transform", "rotate(0deg)"); // Mozilla Firefox
			$(this).find('.barraTop').css("-ms-transform", "rotate(0deg)"); // IE 9
			$(this).find('.barraTop').css("-webkit-transform", "rotate(0deg)"); // Chrome, Safari, Opera
			$(this).find('.barraTop').css("transform", "rotate(0deg)");
			$(this).find('.barraTop').css("top", "6px");
			$(this).find('.barraBot').css("-moz-transform", "rotate(0deg)"); // Mozilla Firefox
			$(this).find('.barraBot').css("-ms-transform", "rotate(0deg)"); // IE 9
			$(this).find('.barraBot').css("-webkit-transform", "rotate(0deg)"); // Chrome, Safari, Opera
			$(this).find('.barraBot').css("transform", "rotate(0deg)");
			$(this).find('.barraBot').css("bottom", "0px");
		} else {
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
			$(this).find('.barraBot').css("-moz-transform", "rotate(45deg)"); // Mozilla Firefox
			$(this).find('.barraBot').css("-ms-transform", "rotate(45deg)"); // IE 9
			$(this).find('.barraBot').css("-webkit-transform", "rotate(45deg)"); // Chrome, Safari, Opera
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
	$('.cepMask').mask('00000-000');
	$('.telMask').mask('(00)0000-0000');
	$('.cpfMask').mask('000.000.000-00');
	$('.cnpjMask').mask('00.000.000/0000-00');
	$('.tipoClick').click(function(){
		if($("#pessoaFisica").is(":checked")) {
			$('.btnJuridicaLabel').removeClass('buttonVerde');
			$('.btnFisicaLabel').addClass('buttonVerde');
			$('#inputDado').removeClass('cnpjMask');
			$('#inputDado').addClass('cpfMask');
			$('#labelDado').text('CPF');
			$('#labelNome').text('Nome');
			$('#inputName').attr({placeholder:"Jorge"});
			$('#inputName').attr('name', 'nome');
			$('#inputDado').attr({placeholder:"000.000.000-00"});
			$('#inputDado').attr('name', 'cpf');
		} else {
			$('.btnFisicaLabel').removeClass('buttonVerde');
			$('.btnJuridicaLabel').addClass('buttonVerde');
			$('#inputDado').removeClass('cpfMask');
			$('#inputDado').addClass('cnpjMask');
			$('#labelNome').text('Razão Social');
			$('#inputName').attr({placeholder:"Maria Inc"});
			$('#inputName').attr('name', 'razao');
			$('#labelDado').text('CNPJ');
			$('#inputDado').attr({placeholder:"00.000.000/0000-00"});
			$('#inputDado').attr('name', 'cnpj');
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