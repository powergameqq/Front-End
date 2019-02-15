function doFirst(){
	document.getElementById('theForm').onsubmit = setEvent;
}

function setEvent(){
	

	var events = ["click","contextmenu","select","change","input"];

	for(var i=0; i<events.length;i++){
		var yourCheck = document.getElementById(events[i]);

		if(yourCheck.checked){
			document.addEventListener(events[i],report);
		}else{
			document.removeEventListener(events[i],report);
		}
	}
	feedback = document.getElementById("feedback");
	feedback.value = "";



	// document.getElementById('total').value = total;
	return false;
}
function report(e){
	feedback.value += e.target.nodeName + "  :  " + e.type + "\n";
}

window.addEventListener('load',doFirst)