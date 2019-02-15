function doFirst(){
	// document.querySelectorAll('#box p').addEventListener('click',talk);
	var list = document.querySelectorAll('#box p').onclick = talk; //list是陣列

	for (var i = 0;i < list.length;i++) {
		list[i].onclick = talk;
	}
}

function talk(){
	alert("HI~");
}



window.addEventListener('load',dofirst);
// window.onload = dofirst;
// window.onload = functiom(){...}

