function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	
	context.strokeStyle = 'red';

	context.lineWidth = 20;
	context.moveTo(100,100);
	context.lineTo(250,100);
	context.stroke();

	context.beginPath();
	context.moveTo(100,140);
	context.lineTo(250,140);
	context.lineCap ="round";
	context.stroke();


	context.lineCap ="square";
	context.beginPath();
	context.moveTo(100,180);
	context.lineTo(250,180);
	context.stroke();

	
	context.lineWidth = 1;
	context.strokeStyle = 'blue';
	context.beginPath();
	context.moveTo(100,80);
	context.lineTo(100,200);
	

	context.stroke();

	context.strokeStyle = 'red';
	context.lineWidth = 20;

	context.strokeRect(100,300,150,200);
	context.lineJoin = 'round';
	context.strokeRect(320,300,150,200);
	context.lineJoin = 'bevel';
	context.strokeRect(540,300,150,200);

}

window.addEventListener('load',doFirst);