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