// var ans = parseInt($('#names li').css('fontSize'));
// alert(ans);


$('#smallButton').click(function(){
	changeSize('smaller');
});
$('#bigButton').click(function(){
	changeSize('bigger');
});

function changeSize(size){
	
	var currentSize = parseInt($('#names li').css('fontSize'));

	if(size == 'smaller'){
		newSize = currentSize - 1;
	}else{
		newSize = currentSize + 1;

	}

	$('#names li').css('fontSize',newSize);
}