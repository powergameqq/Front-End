function doFirst(){
	document.getElementById('dropzone').ondragover = dragOver;
	document.getElementById('dropzone').ondrop = dropped;
}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	var files = e.dataTransfer.files;
	var readFile = new FileReader();

	for(var i=0; i<files.length; i++){
		readFile.readAsDataURL(files[i]);
		readFile.addEventListener('load',function(){
			//動態新增<img>
			var image = document.createElement('img');
			image.src = this.result;

			var dropzone = document.getElementById('dropzone');
			dropzone.appendChild(image);
			// dropzone.insertBefore(image,dropzone.firstChild);
		});
	}
	
}

window.addEventListener('load',doFirst);