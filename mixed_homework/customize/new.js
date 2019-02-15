window.addEventListener("load",doFirst)

function doFirst(){
	myVideo = document.getElementById('myVideo');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	playButton = document.getElementById('play');
	stopButton = document.getElementById('stop');
	upButton = document.getElementById('up');
	downButton = document.getElementById('down');
	mutedButton = document.getElementById('muted');
	canvas = document.getElementById('canvas');
	

	defaultBar.addEventListener('click',setTime);
	playButton.addEventListener('click',playOrPause);
	stopButton.addEventListener('click',stopVideo);
	upButton.addEventListener('click',volumeUp);
	downButton.addEventListener('click',volumeDown);
	mutedButton.addEventListener('click',turnOff);

	barSize = parseInt(window.getComputedStyle(defaultBar).width);
	setInterval(update,300);
	showVolume();
	
}

function playOrPause(){
	if(!myVideo.paused && !myVideo.ended){
		myVideo.pause();
		playButton.innerText='Play';
	}else{
		myVideo.play();
		playButton.innerText ='Pause';

	}
	return false;
}

function stopVideo(){
	myVideo.currentTime =0;
	myVideo.pause();
	playButton.innerText='Play';
	return false;
}

function volumeUp(){
	if(myVideo.volume <= 0.9){
	myVideo.volume += 0.1; 
	}
	showVolume();
	return false;
}

function volumeDown(){
	if(myVideo.volume >= 0.1){
	myVideo.volume -= 0.1; 
	}
	showVolume();
	return false;
}

function turnOff(){
	myVideo.volume =0;
	showVolume();
	return false;
}

function setTime(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	progressBar.style.width = mouseX +'px';
	var newTime = mouseX / (barSize / myVideo.duration);
	myVideo.currentTime = newTime;
	return false;
}

function update(){
	if(!myVideo.ended){
		var size = barSize / myVideo.duration * myVideo.currentTime;
		progressBar.style.width = size + 'px';
	}
	else{
		progressBar.style.width = '0px';
		playButton.innerText = 'Play';
	}
}

function showVolume(){
	
	context = canvas.getContext("2d");
	context.fillStyle='tomato';
	context.clearRect(0,0,canvas.width,canvas.height);
	var numberOfBlock = myVideo.volume*10;
	for (var i = 0; i < numberOfBlock; i++) {
		var height = 5+i;
		var distanceX = 0 + i*4;
		var distanceY = 20 -i;
		context.fillRect(distanceX,distanceY,3,height);
	}

}