export function main() {
	initSwiper()


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
		})
	}
}