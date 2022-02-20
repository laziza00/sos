let elheaderbtn = document.getElementById('btnheader');
let elheadermenu = document.getElementById('headermenu');
let elIcon = document.getElementById('icon');

let count = 0;
elheaderbtn.addEventListener('click', function () {
  elheadermenu.classList.toggle('show');
  if (count == 0) {
    elheaderbtn.style.color = '#fff';
    elIcon.className = "bx bx-x";
    count++;
  } else {
    elheaderbtn.style.color = '#fff';
    elIcon.className = "bx bx-menu";
    count = 0;
  }
})