function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    const display = chatPopup.style.display === 'block' ? 'none' : 'block';
    chatPopup.style.display = display;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }