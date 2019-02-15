function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	
	// var gradient = context.createLinearGradient(100,100,700,500);
	var gradient = context.createLinearGradient(100,300,700,300);
	gradient.addColorStop(0,'red');
	gradient.addColorStop(1,'blue');
	gradient.addColorStop(0.5,'yellow');

	

	context.fillStyle = gradient;
	

	context.fillRect(100,100,600,400);
	

}

window.addEventListener('load',doFirst);