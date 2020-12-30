/* Responsive Navigation */

const body = document.querySelector('body');
const hamburgerIcon = document.querySelector('#hamburgerIcon');
const closeIcon = document.querySelector('#closeIcon');
const navWrap = document.querySelector('#navWrap');
const overlay = document.querySelector('#overlay');
const nav = document.querySelector('#headerNav');

function menuHandler() {
    navWrap.classList.toggle('open');
    overlay.classList.toggle('open');
    body.classList.toggle('no-overflow');

    let expanded = hamburgerIcon.getAttribute("aria-expanded"); 
    expanded = (expanded == "true") ? "false" : "true";
    
    hamburgerIcon.setAttribute("aria-expanded", expanded);
    closeIcon.setAttribute("aria-expanded", expanded);


}

hamburgerIcon.addEventListener('click', menuHandler);
closeIcon.addEventListener('click', menuHandler);
overlay.addEventListener('click', menuHandler);
