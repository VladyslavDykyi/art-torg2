'use strict';

( function (){
	const check = document.querySelector('#business');
	check.addEventListener('change', (e) => {
		e.target.parentElement.nextElementSibling.classList.toggle('active');
		const inp = document.querySelector('#companyName');
		inp.value = '';
	});
})();