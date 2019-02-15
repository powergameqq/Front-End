var storage = sessionStorage;
function doFirst(){
	if(storage['addItemList'] == null){
		storage['addItemList'] = '';
	}

	var list = document.querySelectorAll('.addButton');
	for(var i = 0;i<list.length;i++){
		list[i].addEventListener('click',function(){
			var teddyInfo = document.querySelector('#'+this.id+' input').value;
			addItem(this.id,teddyInfo);
		});
	}
}

function addItem(itemId,itemValue){
	// alert(itemId+' : '+itemValue);
	var image = document.createElement('img');
	image.src = 'imgs/' + itemValue.split('|')[1];

	var title = document.createElement('span');
	title.innerText = itemValue.split('|')[0];

	var price = document.createElement('span');
	price.innerText = itemValue.split('|')[2];



	var newItem = document.getElementById('newItem');
	//先判斷有無物件 有的話先刪掉
	if(newItem.hasChildNodes()){
		while(newItem.childNodes.length >=1){
			newItem.removeChild(newItem.firstChild);
		}
	}
	//再新增新物件
	newItem.appendChild(image);
	newItem.appendChild(title);
	newItem.appendChild(price);

	//存入storage
	if(storage[itemId]){
		alert('You have already checked.');
	}else{
		storage[itemId] = itemValue;
		storage['addItemList'] += itemId +', ';
	}


	
	//計算數量和小計
	var itemString = storage.getItem('addItemList');
	// alert(itemString);
	var items = itemString.substr(0,itemString.length-2).split(', ');
	// alert(items);

	subtotal = 0;
	for(var key in items){
		var itemInfo = storage.getItem(items[key]);
		// alert(itemInfo);
		var itemPrice = parseInt(itemInfo.split('|')[2]);

		subtotal += itemPrice;
	}

	document.getElementById('itemCount').innerText = items.length;


	document.getElementById('subtotal').innerText = subtotal;
}
window.addEventListener('load',doFirst);









