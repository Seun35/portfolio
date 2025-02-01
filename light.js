const toggle = document.getElementById('toggle-btn');
const body = document.body;
const slider = document.querySelector('.toggle-slider');

if (toggle) {
  toggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      slider.classList.remove('active');
      body.style.backgroundColor = '';
      body.style.color = 'black';
    } else {
      body.classList.add('dark-mode');
      slider.classList.add('active');
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
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
