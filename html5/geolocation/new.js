function doFirst(){
	navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
		enableHighAccuracy:false,
		timeout:5000,
	});
}
function succCallback(e){
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	var accuracy = e.coords.accuracy;


	if(accuracy>50000){
		document.getElementById('position').innerHTML ='不准'
	}else{
		document.getElementById('position').innerHTML = '緯度: ' + lati + '<br>經度: ' +longi+ '<br>精度'+accuracy;
	}
	
}


function errorCallback(e){
	document.getElementById('position').innerHTML = '錯誤碼 ' +e.code;
}

window.addEventListener('load',doFirst);
