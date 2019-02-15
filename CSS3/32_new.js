function doFirst(){
	document.querySelector('#box p').addEventListener('click',talk);
	// document.querySelector('#box p').onclick = talk;

}

function talk(){
	alert("HI~")
}



window.addEventListener('load',dofirst);
// window.onload = dofirst;
// window.onload = functiom(){...}

