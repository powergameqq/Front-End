function doFirst(){		
	navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
		enableHighAccuracy: false,
		timeout: 10000,
	});
}
function succCallback(e){
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	var accuracy = e.coords.accuracy;

	if(accuracy>10000){
		document.getElementById('position').innerHTML = '超過偵測範圍!'
	}else{
		document.getElementById('position').innerHTML = '緯度: '+lati+'<br>經度: '+longi+'<br>準確度: '+accuracy;
	}	
}
function errorCallback(e){
	document.getElementById('position').innerHTML = '錯誤碼: '+e.code+'<br>錯誤訊息: '+e.message;
	// alert('錯誤碼: '+e.code+'\n錯誤訊息: '+e.message);
}
window.addEventListener('load',doFirst);