function doFirst(){
	
	
	//先跟HTML產生關聯
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	fullButton = document.getElementById('fullButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');


	playButton.addEventListener('click',playOrPause);
	fullButton.addEventListener('click',fullScreen);
	defaultBar.addEventListener('click',clickedBar);

	barSize = parseInt(window.getComputedStyle(defaultBar).width);

	 
}
function playOrPause(){
	if (!myMovie.paused && !myMovie.ended) { //如果影片正在跑
		myMovie.pause();
		playButton.innerText = 'Play';

	}else{
		myMovie.play();
		playButton.innerText = 'Pause';
		setInterval(update,300);
		
	}
}
function update(){
	if(!myMovie.ended){
		var size = barSize / myMovie.duration * myMovie.currentTime;
		progressBar.style.width = size + 'px';
	}
	else{
		progressBar.style.width = '0px';
		playButton.innerText = 'Play';
	}
}

function fullScreen(){
	myMovie.webkitEnterFullScreen();
}
function clickedBar(e){
	var mouseX = e.clientX - defaultBar.offsetLeft;
	progressBar.style.width = mouseX +'px';
	var newTime = mouseX / (barSize / myMovie.duration);
	myMovie.currentTime = newTime;
}

window.addEventListener('load',doFirst);