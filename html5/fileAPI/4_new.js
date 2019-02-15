function doFirst(){
	document.getElementById('theFile').onchange = fileChange;
}

function fileChange(){
	var file = document.getElementById('theFile').files[0];
	var message = '';

	message += 'File Name: ' + file.name + '\n';
	message += 'File Size: ' + file.size + ' byte(s)\n';
	message += 'File Type: ' + file.type + '\n';
	message += 'Last Modified: ' + file.lastModifiedDate + '\n';
	document.getElementById('fileInfo').value = message;

	var readFile = new FileReader();
	readFile.readAsText(file);
	readFile.addEventListener('load',function(){
		document.getElementById('fileContent').value = this.result;
	});
}

window.addEventListener('load',doFirst);