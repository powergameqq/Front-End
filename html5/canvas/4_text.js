function doFirst(){
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");
	
	// context.strokeStyle = 'red';
	// context.moveTo(100,100);
	// context.lineTo(400,100);
	// context.stroke();

	// context.textBaseline = 'hanging';

	context.font = 'bold 50px Tahoma';
	//第一個字
	context.fillText('OMGSilvia',100,100);
	//第二個字
	context.shadowOffsetX = 3;
	context.shadowOffsety = 3;
	context.shadowColor = 'red';
	context.shadowBlur = 5;
	context.fillText('OMGSilvia',100,180);
	//第三個字
	context.shadowOffsetX = 0;
	context.shadowOffsety = 0;
	context.shadowColor = 'red';
	context.shadowBlur = 10;
	context.fillStyle = '#fff';
	context.fillText('OMGSilvia',100,260);
	//第四個字
	context.shadowOffsetX = 0;
	context.shadowOffsety = 0;
	context.shadowColor = 'red';
	context.shadowBlur = 10;

	context.fillText('OMGSilvia',100,340);
	
	context.shadowColor = 'blue';
	context.fillText('OMGSilvia',100,340);




}

window.addEventListener('load',doFirst);