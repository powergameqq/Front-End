$(document).ready(function(){
	index = 0;


	var divWidth = $('#slideBoard').width();      //div
	// alert($('#slideBoard').width());
	// alert($(window).width());
	var imgCount = $('#content li').length;
	// alert(imgCount);

	$('#content li').width(divWidth);                //ul li
	$('#content').width(divWidth * imgCount);        //ul

	for(var i=0; i<imgCount; i++){
		$('#contentButton').append('<li></li>');
	}       
	$('#contentButton li:nth-child(1)').addClass('clickMe');

	$('#contentButton li').click(function(){
		index = $(this).index();
		// alert(index);

		move(index);
	});


	interval = setInterval(next,5000);




//把原本的拿出來用-----------------------------------------------------------------------------------------------------------------
	function move(index){
		$('#content').animate({
			left:divWidth * index * (-1),
		});
		var findThePosition = '#contentButton li:nth-child('+ (index+1)+ ')';
		$('#contentButton li').removeClass('clickMe');         //全部清掉再建新的
		$(findThePosition).addClass('clickMe');
		

		clearInterval(interval);      //重開一次以免剛點到新圖片就換下一張
		interval = setInterval(next,5000);
	}

//每隔一段時間換圖片----------------------------------------------------------------------------------------------------------------

	function next(){


		if(index == (imgCount-1) ){
			index = 0;
		}else{
			index += 1;
			
		}

		move(index);
	}





});