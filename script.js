//your JS code here. If requireconst  
const counter = document.getElementById("counter");
const IncrementButton = document.getElementById("incrementBtn");

let count = 0;

IncrementButton.addEventListener("click",()=>{
	count++;
	counter.textContent = count;
	alert(`Current count is: ${count}`);
});
