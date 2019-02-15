function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	// context.strokeStyle = '#ddd';
	// context.moveTo(canvas.width/2,0);
	// context.lineTo(canvas.width/2,canvas.height);
	// context.stroke();


	// context.moveTo(0,canvas.height/2);
	// context.lineTo(canvas.width,canvas.height/2);
	// context.stroke();

	context.strokeStyle = 'red';
	context.lineWidth = 5;
	
	context.moveTo(300,200);
	context.arcTo(400,100,500,250,80);
	context.stroke();
	
	context.strokeStyle = 'blue';
	context.lineWidth = 1;
	
	context.beginPath();
	context.moveTo(300,200);
	context.lineTo(400,100);
	context.lineTo(500,250);
	
	context.stroke();

}

window.addEventListener('load',doFirst);