$(document).ready(function(){
	
	$('li').click(function(){
		var sortText = $(this).attr('sort');
		var name = $(this).text();
		
		if($('#'+sortText+' td:last-child').text() != ''){
				// alert("Out of maximum!");
		
		}else{
			for(var i = 2;i<=7;i++){

				if($('#'+sortText+' td:nth-child('+i+')').text() == ''){
					$('#'+sortText+' td:nth-child('+i+')').text(name);
					break;
				}


			}
			$(this).css({
			background:'tomato',
			color:'white',
			});
			$(this).off('click');
	
		}
	
		
	});
});
