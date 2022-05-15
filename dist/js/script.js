// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  const top = document.querySelector('#top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    top.classList.remove('hidden');
    top.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    top.classList.remove('flex');
    top.classList.add('hidden');
  }
};

// tombol
const tombol = document.querySelector('#tombol');
const navMenu = document.querySelector('#nav-menu');

tombol.addEventListener('click', function () {
  tombol.classList.toggle('tombol-active');
  navMenu.classList.toggle('hidden');
});

// klick out of tombol
window.addEventListener('click', function (e) {
  if (e.target != tombol && e.target != navMenu) {
    tombol.classList.remove('tombol-active');
    navMenu.classList.add('hidden');
  }
});

// Dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
