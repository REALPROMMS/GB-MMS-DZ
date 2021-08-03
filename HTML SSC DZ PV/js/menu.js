const menuBtn = document.querySelector('.btn-menu');
const wrap = document.querySelector('.menu__list');
const closeBtn = document.querySelector('.btn-menu__close');
menuBtn.addEventListener('click', () => {
	wrap.classList.toggle('menu__opened');
});

closeBtn.addEventListener('click', () => {
	wrap.classList.toggle('menu__opened');
});
