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
	readFile.readAsText(file);
	readFile.addEventListener('load',function(){
		document.getElementById('fileContent').value = this.result;
	});
}

window.addEventListener('load',doFirst);