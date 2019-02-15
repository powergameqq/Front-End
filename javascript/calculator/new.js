function doFirst(){
	document.getElementById('theForm').onsubmit = calculate;
}

function calculate(){
	var quantity = document.getElementById('quantity').value;
	var price = document.getElementById('price').value;
	var tax = document.getElementById('tax').value;
	var discount = document.getElementById('discount').value;
	
	var total = quantity * price;
	tax /= 100;
	tax++;
	total *= tax;
	total -= discount;
	total = total.toFixed(2)

	document.getElementById('total').value = total;
	return false;
}
window.addEventListener('load',doFirst)