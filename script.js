//your JS code here. If required.
let counterValue = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

incrementButton.addEventListener('click',()=>{
	alert(`Current counter value:${counterValue}`);
	counterValue+=1;
	counterElement.textcontent = counterValue;
	
});

window.onload = function() {
	const incrementButton = document.getElementById('incrementBtn');
	incrementButton.addEventListener('click', handleIncrement);
	
};
