function doFirst(){
	document.getElementById('theFile').onchange = fileChange;
}

function fileChange(){
	var files = document.getElementById('theFile').files; //此為陣列
	var message = '';

	for(var i=0;i< files.length ;i++){
		message += 'File Name: ' + files.name + '\n';
		message += 'File Size: ' + files.size + ' byte(s)\n';
		message += 'File Type: ' + files.type + '\n';
		message += 'Last Modified: ' + files.lastModifiedDate + '\n';
		message += '-----------------------------------------------------\n';
		document.getElementById('fileInfo').value = message;
	}


}

window.addEventListener('load',doFirst);