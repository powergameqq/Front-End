function doFirst(){
	if(typeof window.print == 'function'){   //先判斷這個瀏覽器是否有Print功能，如果有，就新增一個列印按鈕
		var button = document.createElement('button');
		button.innerText = 'Print';
		button.style.fontSize = 'x-large';
		button.style.color = 'tomato';
		button.addEventListener('click',function(){
			window.print();
		});

		document.body.insertBefore(button,document.getElementById('theCenter'));
	}
}

window.addEventListener('load',doFirst);