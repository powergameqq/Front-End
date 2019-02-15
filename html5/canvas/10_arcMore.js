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

	// context.strokeStyle = 'red';
	
	// context.beginPath();
	// context.arc(200,150,100,0,Math.PI,true);
	// context.stroke();
	// context.beginPath();


	context.arc(canvas.width/2,canvas.height/2,200,0,2*Math.PI,true);
	context.stroke();
	
	context.beginPath();
	context.translate(400,300); //此點變為(0,0)
	context.moveTo(0,0);
	context.lineTo(0,-170);
	context.stroke();

}

window.addEventListener('load',doFirst);