'use strict';

( function (){
	const swiper = new Swiper(".mySwiper", {
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
	const messageList = document.querySelector('.auction-list-bet');
	messageList.scrollTo(0, messageList.scrollHeight);




	// window.addEventListener('DOMContentLoaded', ()=> {
	// 	const messageItem = document.querySelector('.auction-list .current-lot');
	// 	messageItem.scrollIntoView({behavior: 'auto', block:'start'});
	// })
	// const auctionList = document.querySelector('.auction-list');
	//
	// const currentLot = document.querySelector('.auction-lot.current-lot');
	// auctionList.addEventListener('scroll',()=> {
	// 	console.dir(currentLot)
	// })

	const elementToScrollTo = document.querySelector(".auction-list > .current-lot");


	const windowHeight = window.innerHeight;
	const pageHeight = document.body.scrollHeight;

	const elementRect = elementToScrollTo.getBoundingClientRect();
	const elementTop = elementRect.top;
	const elementHeight = elementRect.height;
	const scrollToY = elementTop - (windowHeight / 2 - elementHeight / 2);

	window.scrollTo({
		top: scrollToY,
		behavior: "auto",
	});
})();
