function doFirst(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext("2d");
	context.fillStyle = 'red';
	context.fillRect(100,100,10,10);
	
	canvas.addEventListener('mousemove',usePen);
	// var gradient = context.createLinearGradient(100,100,700,500);
	// var gradient = context.createRadialGradient(400,300,195,400,300,205);
	// gradient.addColorStop(0,'#333');
	// gradient.addColorStop(0.5,'#fff');
	// gradient.addColorStop(1,'#333');

	
	// context.lineWidth = 10;
	// context.strokeStyle = gradient;
	// context.arc(400,300,200,0,2*Math.PI,true);
	// context.stroke();
	

}

function usePen(e){

	context.fillStyle = 'red';
	context.beginPath();
	context.arc(e.pageX,e.pageY,5,0,2*Math.PI,true);
	context.fill();
}

window.addEventListener('load',doFirst);