// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// tombol
const tombol = document.querySelector('#tombol');
const navMenu = document.querySelector('#nav-menu');

tombol.addEventListener('click', function () {
  tombol.classList.toggle('tombol-active');
  navMenu.classList.toggle('hidden');
});
