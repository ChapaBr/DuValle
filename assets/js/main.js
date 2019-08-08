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
});