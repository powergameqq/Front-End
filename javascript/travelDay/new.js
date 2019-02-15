function doFirst(){
	//先跟HTML畫面產生關聯,再建事件聆聽的功能
	document.getElementById('theForm').onsubmit = process;
}
function process(){
	var start = document.getElementById('start').value;
	var end = document.getElementById('end').value;
	var feedback ='';
	var day = 24*60*60*60*1000;
	var interval = '';

	var startDate = new Date(start);
	var endDate = new Date(end);

	if(startDate.getTime() && endDate.getTime()){
		if(startDate <= endDate){
			var diff = endDate - startDate;
			if(diff <= day){
				interval += '1 day';
			}else{
				interval += Math.round(diff / day) + ' days';
			}
			feedback += 'The trip day has been scheduled starting on ' + startDate.toLocaleDateString();
			feedback += ' and ending on ' + endDate.toLocaleDateString();
			feedback += ', which is a period of ' + interval;
		
		}else{
			feedback += 'The start date must come before the end date.';

		}
	}else{
		feedback += 'please enter valid start and end dates in the format MM/DD/YYYY';
	}

	document.getElementById('feedback').innerText = feedback;
	

	return false;
}
window.addEventListener('load',doFirst);