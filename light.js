const toggle = document.getElementById('toggle');
const body = document.body;

if (toggle) {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = ''; // Resets the background color to default
      body.style.color = 'black';
    }
  });
}

let modal = document.getElementById("myModal");
let modalbutton = document.getElementById("myBtn");
let closeButton = document.querySelector(".close");

if (modalbutton) {
  modalbutton.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

if (closeButton) {
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// To close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};