//your JS code here. If required.
let counter = 0;
function handleIncrement(){
	alert(`Current counter value:${counterValue}`);
	counterValue+=1;
	document.getElementById('counter').textcontent = counterValue;
	
}

window.onload = function() {
	const incrementButton = document.getElementById('incrementBtn');
	incrementButton.addEventListener('click', handleIncrement);
	
};
