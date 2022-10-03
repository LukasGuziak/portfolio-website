const burgerBtn = document.querySelector('.hamburger');
const headerSection = document.querySelector('.header');
const logo = document.querySelector('.logo');

const hendleNav = () => {
	burgerBtn.classList.toggle('is-active');
	headerSection.classList.toggle('header--active');
	logo.classList.toggle('logo--active');
};

burgerBtn.addEventListener('click', hendleNav);
headerSection.addEventListener('click', hendleNav);
