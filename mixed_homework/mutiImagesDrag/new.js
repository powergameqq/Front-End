times = 0;
size =1;
angle = 0;
function doFirst(){
	document.getElementById('dropzone').ondragover = dragOver;
	document.getElementById('dropzone').ondrop = dropped;

	biggerButton = document.getElementById('bigger');
	smallerButton = document.getElementById('smaller');
	clockwiseButton = document.getElementById('clockwise');
	counterClockwiseButton = document.getElementById('counterClockwise');

	biggerButton.addEventListener('click',set1);
	smallerButton.addEventListener('click',set2);
	clockwiseButton.addEventListener('click',set3);
	counterClockwiseButton.addEventListener('click',set4);

}
function dragOver(e){
	e.preventDefault();
}
function dropped(e){
	e.preventDefault();
	var files = e.dataTransfer.files;
	var readFile = new FileReader();
	times += 1;
	for(var i=0; i<files.length; i++){

		readFile.readAsDataURL(files[i]);
		readFile.addEventListener('load',function(){
			//動態新增<img>
			var image = document.createElement('img');
			image.src = this.result;
			image.id = 'image' + times;
			var dropzone = document.getElementById('dropzone');
			dropzone.appendChild(image);
			
		});
	}
	
}


function set1(){set(1);}
function set2(){set(2);}
function set3(){set(3);}
function set4(){set(4);}

function set(number){
	
	switch(number){
		case 1:
			size =1.1;
			break;
		case 2:
			
			size =0.9;
			break;
		case 3:
			size =1;
			angle +=30;
			break;
		case 4:
			size =1;
			angle -=30;
			break;
	}

	for(var i=1; i<=times; i++){

			var imageId = 'image' +i;
			var image =  document.getElementById(imageId);
			var nowsize = window.getComputedStyle(image);

			image.style.width = parseInt(nowsize.width)*size+'px';
			image.style.transform = 'rotate('+angle+'deg)';
			image.style.transform = 'scale('+size+') rotate('+angle+'deg)';
			
			

		}

}
window.addEventListener('load',doFirst);












// function getBigger(){
// 	size +=0.1;
// 	for(var i=1; i<=times; i++){
// 		var imageId = 'image' +i;
// 		var image =  document.getElementById(imageId);

// 		image.style.transform = 'scale('+size+')';

		
// 	}
// }

// function getSmaller(){
// 	if(size>0.2){
// 		size -=0.1;
// 		for(var i=1; i<=times; i++){
// 			var imageId = 'image' +i;
// 			var image =  document.getElementById(imageId);

// 			image.style.transform = 'scale('+size+')';

// 		}
// 	}
// }

// function clockwiseRotate(){
// 	angle +=30;
// 	for(var i=1; i<=times; i++){
// 			var imageId = 'image' +i;
// 			var image =  document.getElementById(imageId);

// 			image.style.transform = 'rotate('+angle+'deg)';

// 		}
// }

// function counterClockwiseRotate(){
// 	angle -=30;
// 	for(var i=1; i<=times; i++){
// 			var imageId = 'image' +i;
// 			var image =  document.getElementById(imageId);

// 			image.style.transform = 'rotate('+angle+'deg)';

// 		}
	
// }
