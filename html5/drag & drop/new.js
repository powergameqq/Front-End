function doFirst(){
	image = document.getElementById('image');
	image.addEventListener('dragstart',startDrag);
	image.addEventListener('dragend',endDrag);


	rightBox = document.getElementById('rightBox');
	rightBox.addEventListener('dragenter',function(e){e.preventDefault();}); //表示只允許操作
	rightBox.addEventListener('dragover',function(e){e.preventDefault();});
	rightBox.addEventListener('drop',dropped);

}
function startDrag(e){
	var data = '<img src="../../images/witch.jpg">';
	e.dataTransfer.setData('image/jpeg',data);
}
function endDrag(){
	image.style.visibility = 'hidden';
}
function dropped(e){
	e.preventDefault();
	rightBox.innerHTML = e.dataTransfer.getData('image/jpeg');
}

window.addEventListener('load',doFirst);