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
	context.bezierCurveTo(350,80,450,360,500,250);
	context.stroke();
	
	context.strokeStyle = 'blue';
	context.lineWidth = 1;
	
	context.beginPath();
	context.moveTo(300,200);
	context.lineTo(350,80);
	context.lineTo(450,360);
	context.lineTo(500,250);
	
	context.stroke();

}

window.addEventListener('load',doFirst);