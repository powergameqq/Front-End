var storage = sessionStorage;
function doFirst(){
	var itemString = storage.getItem('addItemList');
	var items = itemString.substr(0,itemString.length-2).split(', ');



	newSection = document.createElement('section');
	newTable = document.createElement('table');

	//每購買一個品項 就呼叫函數(createCartList)新增一個tr
	for(var key in items){
		var itemInfo = storage.getItem(items[key]);
		createCartList(items[key],itemInfo);
	}
	//將table放進section 再將section放進cartList裡

	total = 0;
	for(var key in items){
		var itemInfo = storage.getItem(items[key]);
		// alert(itemInfo);
		var price = parseInt(itemInfo.split('|')[2]);

		total += price;
	}

	document.getElementById('total').innerText = total;

	newSection.appendChild(newTable);
	document.getElementById('cartList').appendChild(newSection);
}

function createCartList(itemKey,itemInfo){
	// alert(itemKey + ' : ' + itemInfo);
	var itemTitle = itemInfo.split('|')[0];
	var itemImage ='imgs/' + itemInfo.split('|')[1];
	var itemPrice = parseInt(itemInfo.split('|')[2]);

	//建立每個品項的清單區域--tr
	var trItemList = document.createElement('tr');
	trItemList.className = 'item';

	newTable.appendChild(trItemList);



	//建立商品圖片--第一個td
	var tdImage = document.createElement('td');
	tdImage.style.width ='200px';

	var image = document.createElement('img');
	image.src = itemImage;
	image.width =70;

	tdImage.appendChild(image);
	trItemList.appendChild(tdImage);


	//建立商品名稱和刪除按鈕--第二個td
	var tdTitle = document.createElement('td');
	tdTitle.style.width ='170px';
	tdTitle.id = itemKey;

	var pTitle = document.createElement('p');
	pTitle.innerText = itemTitle;

	var delButton = document.createElement('button');
	delButton.innerText = 'Delete';
	delButton.addEventListener('click',deleteItem);

	tdTitle.appendChild(pTitle);
	tdTitle.appendChild(delButton);
	trItemList.appendChild(tdTitle);
	//建立商品價格--第三個td
	var tdPrice = document.createElement('td');
	tdPrice.style.width = '170px';
	tdPrice.innerText = itemPrice;

	trItemList.appendChild(tdPrice);


	//建立商品數量--第四個td
	var tdItemCount = document.createElement('td');
	tdItemCount.style.width = '60px';

	var itemCount = document.createElement('input');
	itemCount.type = 'number';
	itemCount.value = 1
	itemCount.min = 0;
	itemCount.addEventListener('input',changeItemCount);

	tdItemCount.appendChild(itemCount);
	trItemList.appendChild(tdItemCount);

}

function deleteItem(){
	var itemId = this.parentNode.getAttribute('id');

	//刪除該筆資料之前
	//1.先將total扣除   
	var itemValue = storage.getItem(itemId);
	total -= parseInt(itemValue.split('|')[2]);
	document.getElementById('total').innerText = total;
	//2.清除storage資料
	storage.removeItem(itemId);
	storage['addItemList'] = storage['addItemList'].replace(itemId,'');

	//3.再將該筆tr刪除
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function changeItemCount(){}

window.addEventListener('load',doFirst);




