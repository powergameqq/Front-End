function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	
	// var gradient = context.createLinearGradient(100,100,700,500);
	var gradient = context.createRadialGradient(400,300,195,400,300,205);
	gradient.addColorStop(0,'#333');
	gradient.addColorStop(0.5,'#fff');
	gradient.addColorStop(1,'#333');

	
	context.lineWidth = 10;
	context.strokeStyle = gradient;
	context.arc(400,300,200,0,2*Math.PI,true);
	context.stroke();
	

}

window.addEventListener('load',doFirst);