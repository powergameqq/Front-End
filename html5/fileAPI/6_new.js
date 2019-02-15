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
	readFile.readAsDataURL(file);
	readFile.addEventListener('load',function(){
		var image = document.getElementById('image');
		image.src = this.result;
		image.style.maxWidth = '500px';
		image.style.maxHeight = '400px';
	});
}

window.addEventListener('load',doFirst);