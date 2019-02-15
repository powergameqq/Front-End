var storage = sessionStorage;
function doFirst(){
	var itemString = storage.getItem('addItemList');
	var items = itemString.substr(0,itemString.length - 2).split(', ');	
	//console.log(items);	//["A1001", "A1005", "A1006", "A1002"]
	
	newSection = document.createElement('section');
	newTable = document.createElement('table');

	total = 0;
	//每購買一個品項,就呼叫函數(createCartList)新增一個tr
	for(var key in items){		//use items[key]
		var itemInfo = storage.getItem(items[key]);
		createCartList(items[key],itemInfo);

		var price = parseInt(itemInfo.split('|')[2]);
		total += price;
	}

	document.getElementById('total').innerText = total;

	//將table放進section，再將section放進cartList裡
	newSection.appendChild(newTable);
	document.getElementById('cartList').appendChild(newSection);
}
function createCartList(itemKey,itemInfo){
	// alert(itemKey + ' : ' + itemInfo);
	var itemTitle = itemInfo.split('|')[0];
	var itemImage = 'imgs/' + itemInfo.split('|')[1];
	var itemPrice = parseInt(itemInfo.split('|')[2]);

	//建立每個品項的清單區域--tr
	var trItemList = document.createElement('tr');
	trItemList.className = 'item';		//trItemList.setAttribute('class','item');

	newTable.appendChild(trItemList);

	//建立商品圖片--第一個td
	var tdImage = document.createElement('td');
	tdImage.style.width = '200px';

	var image = document.createElement('img');
	image.src = itemImage;
	image.width = 70;

	tdImage.appendChild(image);
	trItemList.appendChild(tdImage);

	//建立商品名稱和刪除按鈕--第二個td
	var tdTitle = document.createElement('td');
	tdTitle.style.width = '170px';
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
	//建立小計------------------------------------------------------------------------------------------------------
	var tdSubTotal = document.createElement('td');
	tdSubTotal.id = 'subTotal'+itemKey;
	tdSubTotal.style.width = '170px';
	tdSubTotal.innerText = itemPrice;  //因一開始數量為一 可知小計等於物品價格
	trItemList.appendChild(tdSubTotal);



	//建立小計------------------------------------------------------------------------------------------------------

	//建立商品數量--第四個td
	var tdItemCount = document.createElement('td');
	
	tdItemCount.style.width = '60px';

	var itemCount = document.createElement('input');
	itemCount.id = 'itemCount'+itemKey;  //建立ID方便計算-----------------------------------------------------
	itemCount.type = 'number';
	itemCount.value = 1;
	itemCount.min = 0;
	itemCount.addEventListener('input',changeItemCount);

	tdItemCount.appendChild(itemCount);
	trItemList.appendChild(tdItemCount);
}
function deleteItem(){
	var itemId = this.parentNode.getAttribute('id');	// alert(itemId);

	//刪除該筆資料之前
	//1.先將總金額(total)扣除
	var itemValue = storage.getItem(itemId);


//此項改成減掉小計----------------------------------------------------------------------------
	var subTotal = document.getElementById('subTotal'+itemId);

	total -= parseInt(subTotal.innerText);
//此項改成減掉小計----------------------------------------------------------------------------




	document.getElementById('total').innerText = total;

	//2.清除storage的資料
	storage.removeItem(itemId);
	storage['addItemList'] = storage['addItemList'].replace(itemId+', ','');

	//3.再將該筆tr刪除
	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}
function changeItemCount(){
		//先取得本項ID
		var itemCountId = this.getAttribute('id');
		//找到價格
		var itemPrice = parseInt(storage.getItem(itemCountId.replace('itemCount','')).split('|')[2]);
		//找到原本的小計
		var subTotal = document.getElementById(itemCountId.replace('itemCount','subTotal')); 
		//total先扣除原本的小計，也就是先把這項產品的金額全部扣除
		total -= parseInt(subTotal.innerText);
		//計算新的小計並印出
		subTotal.innerText = this.value * itemPrice;
		//把新的小計加進total並印出
		total += parseInt(subTotal.innerText);
		document.getElementById('total').innerText = total;
	
}
window.addEventListener('load',doFirst);




