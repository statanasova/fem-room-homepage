/* Responsive Navigation */

const body = document.querySelector('body');
const hamburgerIcon = document.querySelector('#hamburgerIcon');
const closeIcon = document.querySelector('#closeIcon');
const navWrap = document.querySelector('#navWrap');
const overlay = document.querySelector('#overlay');

function menuHandler() {
    navWrap.classList.toggle('open');
    overlay.classList.toggle('open');
    body.classList.toggle('no-overflow');
}

hamburgerIcon.addEventListener('click', menuHandler);
closeIcon.addEventListener('click', menuHandler);
overlay.addEventListener('click', menuHandler);
