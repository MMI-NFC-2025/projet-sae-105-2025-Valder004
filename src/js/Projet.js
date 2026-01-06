const button = document.querySelector('header button');
const menu = document.querySelector('.menu');


button.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});


document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open');
  });
});