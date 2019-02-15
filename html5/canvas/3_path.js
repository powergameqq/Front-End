function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	context.strokeStyle = 'red';
	context.fillStyle = 'pink';

	context.lineWidth = 5;

	context.moveTo(100,100);
	context.lineTo(200,300);
	context.lineTo(350,70);
	context.lineTo(60,270);
	context.closePath();
	context.stroke();
	context.fill();
}

window.addEventListener('load',doFirst);