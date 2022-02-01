'use strict';
let burger = document.querySelector('.burger');
let list = document.querySelector('.header__list');
let submenu = document.querySelector('.header__submenu')
let body = document.querySelector('body');
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	list.classList.toggle('active');
	body.classList.toggle('active');
	submenu.classList.toggle('active');
});