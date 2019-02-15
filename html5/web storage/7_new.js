var storage = sessionStorage;
function doFirst(){
	storage.clear();
	for(var i=0;i<10;i++){
		storage.setItem('KEY'+i,'VALUE'+i);
	}



	
	document.getElementById('getButton').addEventListener('click',getIndex);

	
}

function getIndex(){
	var index = document.getElementById('indexText').value;
	var key = storage.key(index);
	var value = storage.getItem(key);

	alert('Index' +index+' : ' + value);

}
window.addEventListener('load',doFirst);