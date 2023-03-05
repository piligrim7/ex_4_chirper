import './bootstrap';
import '../css/app.css';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

document.addEventListener('DOMContentLoaded', function () {
	let burger = document.getElementById('burger');
	burger.addEventListener('click', function () {
		burger.classList.toggle('open');
	})
})
