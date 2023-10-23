'use strict';

( function (){
	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});
	const swiperNav = new Swiper(".mySwiper-nav", {
		loop: true,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	});
	const swiperFor = new Swiper(".mySwiper-for", {
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiperNav,
		},
	});
	const btnReadMore = document.querySelector('[data-id="readMore"]');
	btnReadMore.addEventListener('click',(e) => {
		e.stopPropagation();
		e.preventDefault();
		btnReadMore.classList.toggle('active');
		btnReadMore.parentElement.previousElementSibling.classList.toggle('active');
	})
})();