$('#box').click(function() {
			alert('you just clicked the box');
});

	$("input").blur(function(){
			if($(this).val()==""){
					$(this).css('border', 'solid 3px red');	
					$('#box').text("you are forgetting something");
	 } 
});

$('input').keydown(function(){
				
				if($(this).val() != ""){
					$(this).css("border", "solid 3px black");
					$('#box').text('Thank you');
	  }
});

$('#box').hover( function(){
		$(this).text("you're enter");
		 $(this).css('background', 'silver');
}, function(){
		 $(this).text('you are get out');
		 $(this).css('background', 'Yellow');
});