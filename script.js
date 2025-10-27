//your JS code here. If require

const counter = document.getElementById("counter");
const IncrementButton = document.getElementById("incrementBtn");
let count = 0;

 
IncrementButton.addEventListener("click",()=>{
	window.alert(count);
	count++;
	counter.textContent = count;
	 counter.dataset.count = count;
	
});
