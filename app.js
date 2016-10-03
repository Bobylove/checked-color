$("input").css('background', function(){
	return $(this).data('color');
});
$('input').on('click', function(){
	var troll = $(this).data('color')
	if (checked()){
		$('.main').css('color', troll);
	
	}
		else {$('body').css('background-color', troll)
	};
});
function checked(){
 return $('#modify-texte').is(':checked');
}



// good luck !