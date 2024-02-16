export function main() {
	initSwiper();
	initLangBox();
	initMobileMenu();
	initMessage();
	initPhoneBoxes();
	hideFixedHeader();

	function initSwiper() {
		let swiperWaterCare = new Swiper('.slider-water-care', {
			slidesPerView: 'auto',
			spaceBetween: 24,
			loop: false,
			speed: 600,
			navigation: {
				nextEl: '.slider-water-care__nav .swiper-button-next',
				prevEl: '.slider-water-care__nav .swiper-button-prev'
			},
			pagination: {
				el: '.slider-water-care__nav .swiper-pagination',
				clickable: true

			}
		});
		let swiperHero = new Swiper('.slider-hero', {
			slidesPerView: 1,
			loop: false,
			effect: 'fade',
			speed: 600,
			navigation: {
				nextEl: '.slider-hero__nav .swiper-button-next',
				prevEl: '.slider-hero__nav .swiper-button-prev'
			},
			pagination: {
				el: '.slider-hero__nav .swiper-pagination',
				clickable: true
			}
		});
	}

	function initLangBox() {
		let langCurrentElements = document.querySelectorAll('.lang__current');
		langCurrentElements.forEach((langCurrent, index) => {
			let langBox = document.querySelectorAll('.lang__text-holder')[index];
			langCurrent.addEventListener('click', () => {
				langCurrent.classList.toggle('active');
				langBox.classList.toggle('active');
			});
		});
	}

	function updateMenuPosition() {
		let menu = document.querySelector('.header__menu');
		let fixHeader = document.querySelector('.fixed-header');
		if (menu && fixHeader && menu.classList.contains('active')) {
			let heightFixHeader = fixHeader.offsetHeight;
			menu.style.top = `${heightFixHeader}px`;
		} else if (menu) {
			menu.style.top = '';
		}
	}

	function initMobileMenu() {
		let menuButton = document.querySelector('.header__menu-button');
		let menu = document.querySelector('.header__menu');

		menuButton.addEventListener('click', () => {
			document.body.classList.toggle('lock');
			if (menuButton.classList.contains('_icon-List')) {
				menuButton.classList.remove('_icon-List');
				menuButton.classList.add('_icon-X');
			} else {
				menuButton.classList.add('_icon-List');
				menuButton.classList.remove('_icon-X');
			}
			menu.classList.toggle('active');
			updateMenuPosition();
		});

		// Добавляем обработчик события 'resize' к окну
		window.addEventListener('resize', updateMenuPosition);
	}

	function initMessage() {
		let messageBlock = document.querySelector('.message');
		let messageClose = document.querySelector('.message__close');

		messageClose.addEventListener('click', () => {
			if (messageBlock) {
				messageBlock.classList.add('hide');
				updateMenuPosition();
			}
		});
	}

	function initPhoneBoxes() {
		let phoneBoxes = document.querySelectorAll('.contacts__phone.phone-box');

		// Проходим по каждому контейнеру phone-box
		phoneBoxes.forEach((phoneBox) => {
			let phoneItem = phoneBox.querySelector('.phone-box__phone.contacts-link._icon-CaretDown');
			let phoneList = phoneBox.querySelector('.phone-box__list');

			if (phoneItem && phoneList) {
				phoneItem.addEventListener('mouseenter', () => {
					phoneList.classList.add('show');
				});
				phoneList.addEventListener('mouseleave', () => {
					phoneList.classList.remove('show');
				});
			}
		});
	}

	function hideFixedHeader() {
		if (window.matchMedia('(min-width: 1280px)').matches) {
			let fixedHeader = document.querySelector('.fixed-header');
			let lastScrollTop = 0;
			window.addEventListener('scroll', function() {
				let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
				if (currentScroll > lastScrollTop) {
					fixedHeader.style.top = '-100%';
				} else {
					fixedHeader.style.top = '0';
				}
				lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
			}, false);

		}
	}


}