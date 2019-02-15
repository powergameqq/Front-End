function doFirst(){
	//先跟HTML畫面產生關連
	//再建事件聆聽功能
	image=document.getElementById('image'); //寫VAR 表示是區域變數 不寫就不是
	playButton=document.getElementById('playButton');
	pauseButton=document.getElementById('pauseButton');

	//再建事件聆聽功能
	playButton.addEventListener('click',playImage);
	pauseButton.addEventListener('click',pauseImage);

}
function playImage(){
	image.style.animationPlayState='running';
}
function pauseImage(){
	image.style.animationPlayState='paused';
}
window.addEventListener('load',doFirst);
// window.onload = dofirst;
// window.onload = functiom(){...}

