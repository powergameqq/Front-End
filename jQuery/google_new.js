function doFirst(){

	var area = document.getElementById('theMap');
	var myPosition = new google.maps.LatLng(25.0396672,121.53077760000001);
	var options = {
		zoom : 14,
		canter:myPosition,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};


	var map = new google.maps.Map(area,options);
	// var marker = new google.maps.Marker({
	// 	position:myPosition,
	// 	map:map,
	// 	icon:'images/foot.gif',
	// 	tittle:'這不是北科大'
	// })
}
window.addEventListener('load',doFirst);