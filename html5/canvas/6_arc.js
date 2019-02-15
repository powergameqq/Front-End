function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	context.strokeStyle = '#ddd';
	context.moveTo(canvas.width/2,0);
	context.lineTo(canvas.width/2,canvas.height);
	context.stroke();


	context.moveTo(0,canvas.height/2);
	context.lineTo(canvas.width,canvas.height/2);
	context.stroke();

	context.strokeStyle = 'red';
	
	context.beginPath();
	context.arc(200,150,100,0,Math.PI,true);
	context.stroke();
	
	
	context.beginPath();
	context.arc(600,150,100,0,Math.PI,false);
	context.stroke();
	
	context.beginPath();
	context.arc(200,450,100,0,2*Math.PI,false);
	context.stroke();
	
	context.beginPath();
	context.arc(600,450,100,0.3*Math.PI,1.7*Math.PI,false);
	context.stroke();

}

window.addEventListener('load',doFirst);