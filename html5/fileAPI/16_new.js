function doFirst(){
	document.getElementById('dropzone').ondragover = dragOver;
	document.getElementById('dropzone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	var file = e.dataTransfer.files[0];

	document.getElementById('fileName').innerText = file.name;
	

	var readFile = new FileReader();
	readFile.readAsDataURL(file);
	readFile.addEventListener('load',function(){
		var myMovie = document.getElementById('myMovie');
		myMovie.src = this.result;
		myMovie.controls = true;
		myMovie.style.maxWidth = '520px';
	});
}

window.addEventListener('load',doFirst);