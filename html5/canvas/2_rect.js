function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	// context.fillRect(100,100,300,200);
	// context.clearRect(150,150,50,50);
	// context.strokeRect(100,100,300,200);
	context.rect(100,100,300,200);
	context.fill();
	// context.stroke();
	
	//下為橡皮擦
	// context.clearRect(0,0,canvas.width,canvas.height);

}

window.addEventListener('load',doFirst);