//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  let counterValue = 0;

  function handleIncrement() {
      alert(`Current value before increment: ${counterValue}`);
      counterValue++;
      document.getElementById('counter').textContent = counterValue;
  }

  document.getElementById('incrementBtn').addEventListener('click', handleIncrement);
});
