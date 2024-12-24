//your JS code here. If required.
let counter = 0;
const counter = document.getElementById("counter");
const increment=document.getElementById("incrementBtn");

incrementBtn.addEventListener('click',()=>{
	counter++;
	counter.innerHTML = counter;
});
