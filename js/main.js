var nav = document.querySelector('.nav__list'),
    navBtn = document.querySelector('.nav__btn');

navBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    nav.classList.toggle('nav__closed');
});