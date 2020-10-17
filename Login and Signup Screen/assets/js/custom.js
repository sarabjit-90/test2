
$(document).ready(function(){

	$("#signUp").click(function(){
		$("#container").addClass('right-panel-active');
		$(this).addClass('button-ani');
		$("#signIn").removeClass('button-ani');
	});

	$("#signIn").click(function(){
		$("#container").removeClass('right-panel-active');
				
		$(this).toggleClass('button-ani');
		$("#signUp").removeClass('button-ani');
	});

});