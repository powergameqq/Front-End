window.addEventListener('load',doFirst)

function doFirst(){
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	context.lineWidth = 1;
	
//-----喜---------------------------------------------------------------------	
	context.arc(200,200,100,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(160,190,25,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(240,190,25,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(230,200,10,0,2*Math.PI,false);
	context.fill();

	context.beginPath();
	context.arc(170,200,10,0,2*Math.PI,false);
	context.fill();

	context.beginPath();
	context.moveTo(160,235);
	context.quadraticCurveTo(200,290,240,235);
	context.stroke();
//-----怒---------------------------------------------------------------------
	context.beginPath();
	context.translate(400,0);

	context.arc(200,200,100,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.moveTo(140,150);
	context.lineTo(180,170);
	context.stroke();

	context.beginPath();
	context.moveTo(260,150);
	context.lineTo(220,170);
	context.stroke();

	context.beginPath();
	context.moveTo(260,190);
	context.lineTo(220,190);
	context.stroke();

	context.beginPath();
	context.moveTo(140,190);
	context.lineTo(180,190);
	context.stroke();

	context.beginPath();
	context.moveTo(150,250);
	context.bezierCurveTo(180,180,220,320,250,230);
	context.stroke();

//-----哀---------------------------------------------------------------------
	context.beginPath();
	context.translate(-400,400);

	context.arc(200,200,100,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(160,190,25,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(240,190,25,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(250,180,10,0,2*Math.PI,false);
	context.fill();

	context.beginPath();
	context.arc(150,200,10,0,2*Math.PI,false);
	context.fill();

	context.beginPath();
	context.arc(200,270,35,Math.PI,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(260,220,2,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(262,230,3,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(264,240,4,0,2*Math.PI,false);
	context.stroke();

//-----樂---------------------------------------------------------------------

	context.beginPath();
	context.translate(400,0);

	context.arc(200,200,100,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(160,170,25,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(240,170,25,0,2*Math.PI,false);
	context.stroke();

	context.beginPath();
	context.arc(240,155,10,0,2*Math.PI,false);
	context.fill();

	context.beginPath();
	context.arc(160,155,10,0,2*Math.PI,false);
	context.fill();

	context.beginPath();
	context.moveTo(150,230);
	context.lineTo(250,230);
	context.stroke();

	context.beginPath();
	context.moveTo(150,230);
	context.quadraticCurveTo(200,310,250,230);
	context.stroke();

	context.beginPath();
	context.moveTo(160,230);
	context.lineTo(160,245);
	context.stroke();

	context.beginPath();
	context.moveTo(180,230);
	context.lineTo(180,264);
	context.stroke();

	context.beginPath();
	context.moveTo(200,230);
	context.lineTo(200,270);
	context.stroke();

	context.beginPath();
	context.moveTo(220,230);
	context.lineTo(220,264);
	context.stroke();

	context.beginPath();
	context.moveTo(240,230);
	context.lineTo(240,245);
	context.stroke();
}
