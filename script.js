//your JS code here. If require
let count = 0;
const counter = document.getElementById("counter");
const IncrementButton = document.getElementById("incrementBtn");

IncrementButton.addEventListener("click",()=>{
	count++;
	counter.textContent = count;
	window.alert(`Current count is: ${count}`);
});
