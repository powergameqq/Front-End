function doFirst(){
	//先跟HTML畫面產生關聯,再建事件聆聽的功能
	document.getElementById('theForm').onsubmit = limitChars;
}
function limitChars(){
	var comments = document.getElementById('comments').value;
	var limitedText = comments.slice(0,70);

	document.getElementById('count').value = limitedText.length;
	document.getElementById('result').value = limitedText;

	return false;
}
window.addEventListener('load',doFirst);