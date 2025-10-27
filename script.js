//your JS code here. If requireconst  
const count = document.getElementById("counter");
const IncrementButton = document.getElementById("incrementBtn");

let count = 0;

IncrementButton.addEventListener("click",()=>{
	count++;
	count.textContent = count;
});
