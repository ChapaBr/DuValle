setTimeout(function() {
        $('#loadingWrap').fadeOut('400');
        $("html, body").animate({
            scrollTop: 0
        }, 120);
    }, 1600);
$(document).ready(function(){
	$('.filtroMobileItem').click(function(){
		var typeItem = $(this).attr('rel');
		if(typeItem === 'todos'){
			$('.filtroMobileItem').removeClass('filtroMobActive');
			$(this).addClass('filtroMobActive');
			$('.productsItem').css('display', 'none');
			$('.productsItem').animate({opacity: 0}, 400);
			$('.productsItem').css("display", "block");
			$('.productsItem').animate({opacity: 1}, 400);
			$('.btnFiltro').css("background-color", "rgba(0, 0, 0, .36)");
		} else if(typeItem === 'verao'){
			$('.filtroMobileItem').removeClass('filtroMobActive');
			$(this).addClass('filtroMobActive');
			$('.productsItem').css('display', 'none');
			$('.productsItem').animate({opacity: 0}, 400);
			$('.verao').css('display', 'inline-block');
			$('.verao').animate({opacity: 1}, 400);
			$('.btnFiltro').css("background-color", "#139B42");
		} else if(typeItem === 'leguminosas'){
			$('.filtroMobileItem').removeClass('filtroMobActive');
			$(this).addClass('filtroMobActive');
			$('.productsItem').css('display', 'none');
			$('.productsItem').animate({opacity: 0}, 350);
			$('.leguminosas').css('display', 'inline-block');
			$('.leguminosas').animate({opacity: 1}, 350);
			$('.btnFiltro').css("background-color", "#139B42");
		} else if(typeItem === 'inverno'){
			$('.filtroMobileItem').removeClass('filtroMobActive');
			$(this).addClass('filtroMobActive');
			$('.productsItem').css('display', 'none');
			$('.productsItem').animate({opacity: 0}, 350);
			$('.inverno').css('display', 'inline-block');
			$('.inverno').animate({opacity: 1}, 350);
			$('.btnFiltro').css("background-color", "#139B42");
		}
	});

	$('.filtroDesktop a').click(function(){
		var typeItem = $(this).attr('rel');
		if(typeItem === 'todos'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('ul .productsItem').css('display', 'none');
			$('ul .productsItem').animate({opacity: 0}, 400);
			$('ul .productsItem').css('display', 'inline-block');
			$('ul .productsItem').animate({opacity: 1}, 400);
		} else if(typeItem === 'verao'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('ul .productsItem').css('display', 'none');
			$('ul .productsItem').animate({opacity: 0}, 400);
			$('ul .verao').css('display', 'inline-block');
			$('ul .verao').animate({opacity: 1}, 400);
		} else if(typeItem === 'leguminosas'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('ul .productsItem').css('display', 'none');
			$('ul .productsItem').animate({opacity: 0}, 350);
			$('ul .leguminosas').css('display', 'inline-block');
			$('ul .leguminosas').animate({opacity: 1}, 350);
		} else if(typeItem === 'inverno'){
			$('.filtroDesktop a').removeClass('filtroActive');
			$(this).addClass('filtroActive');
			$('ul .productsItem').css('display', 'none');
			$('ul .productsItem').animate({opacity: 0}, 350);
			$('ul .inverno').css('display', 'inline-block');
			$('ul .inverno').animate({opacity: 1}, 350);
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
        if ($(this).scrollTop() > 300) {
            $('.seta-top').fadeIn();
        } else {
            $('.seta-top').fadeOut();
        }
	});
	$('.seta-top').click(function(){
        $('html, body').animate({scrollTop : 0},900);
        return false;
    });
    var tempoDefineOverlay;
    function tempoDefine(){
        tempoDefineToast = setTimeout(function(){$('.toast').css({opacity: 1}).animate({opacity: 0}, 2000);}, 3000);
        tempoDefineOverlay = setTimeout(function(){$('.overlayNotifica').css('display', 'none');}, 4000);
    }
    var urlLocation = window.location.href;
    if(urlLocation.indexOf("success") != -1){
        $('.toast__type').text('Enviado');
        $('.toast__message').text('Email enviado com sucesso!');
        $('.toast').removeClass('toast--red');
        $('.overlayNotifica').css('display', 'block');
        $('.toast').addClass('toast--green');
        $('.toast').css({opacity: 0, display: 'block'}).animate({opacity: 1}, 2000);
        tempoDefine();
    } else if(urlLocation.indexOf("error") != -1){
        $('.toast__type').text('Falha');
        $('.toast__message').text('Falha ao enviar o email.');
        $('.toast').removeClass('toast--green');
        $('.overlayNotifica').css('display', 'block');
        $('.toast').addClass('toast--red');
        $('.toast').css({opacity: 0, display: 'block'}).animate({opacity: 1}, 2000);
        tempoDefine();
    }
    $('.toast__close').click(function(){
        $('.overlayNotifica').css('display', 'none');
    });
});