window.addEventListener('load',doFirst);


function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	var originX= 400; 
	var originY= 300;

	var r1 = 20;
	var r2 = 150;
	var drawX= originX + Math.cos(Math.PI* 0 / 16)*r2; 
	var drawY= originY + Math.sin(Math.PI* 0 / 16)*r2; 

	moveTo(drawX,drawY);
	
	context.strokeStyle = 'tomato';
	context.lineWidth = 8;
	context.lineJoin = 'round';
	
	for(var i = 0; i < 8;i++){

		drawX = originX + Math.cos(2* Math.PI* (i*2+1) / 16)*r1;
		drawY = originY + Math.sin(2* Math.PI* (i*2+1) / 16)*r1;

		context.lineTo(drawX,drawY);
		context.lineTo(originX,originY);
		context.lineTo(drawX,drawY);

		drawX = originX + Math.cos(2* Math.PI* (i*2+2) / 16)*r2;
		drawY = originY + Math.sin(2* Math.PI* (i*2+2) / 16)*r2;

		context.lineTo(drawX,drawY);
	}

		context.closePath();
		context.stroke();
} 

