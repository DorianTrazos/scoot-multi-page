const menuIconElement = document.getElementById('menu-icon');
const menuElement = document.getElementById('menu');

const locationPage = window.location.pathname;
const areInIndex = locationPage.includes('index');

const toggleMenu = () => {
  menuElement.classList.toggle('menu-show');
  document.body.classList.toggle('showing-menu');

  const imagePath = areInIndex ? './assets/icons/' : '../assets/icons/';

  if (menuElement.classList.contains('menu-show')) {
    menuIconElement.src = imagePath + 'close.svg';
  } else {
    menuIconElement.src = imagePath + 'hamburger.svg';
  }
};

menuIconElement.addEventListener('click', toggleMenu);
