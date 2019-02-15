function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	var pic = new Image();
	pic.src = '../../images/washDrawing/037.JPG';
	pic.addEventListener('load',function(){
		context.drawImage(pic, 0,0,canvas.width,canvas.height);
	});
	


}

window.addEventListener('load',doFirst);