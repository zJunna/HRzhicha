
var TouchNav = new Swiper('#TouchNav',{
	freeMode: true,
	freeModeMomentumRatio: 0.5,
	slidesPerView: 'auto',
});

TouchNavWidth = TouchNav.container[0].clientWidth;
TouchNavMaxTrans = TouchNav.maxTranslate();
TouchNavMaxWidth = -TouchNavMaxTrans + TouchNavWidth / 2;

$(".swiper-container").on('touchstart', function(e) {
	e.preventDefault();
})

TouchNav.on('tap', function(swiper, e) {
	//e.preventDefault();
	slide = swiper.slides[swiper.clickedIndex];
	slideLeft = slide.offsetLeft;
	slideWidth = slide.clientWidth;
	slideCenter = slideLeft + slideWidth / 2;
	// 被点击slide的中心点
	TouchNav.setWrapperTransition(300);
	if (slideCenter < TouchNavWidth / 2) {
		TouchNav.setWrapperTranslate(0);
	} else if (slideCenter > TouchNavMaxWidth) {
		TouchNav.setWrapperTranslate(TouchNavMaxTrans);
	} else {
		nowTlanslate = slideCenter - TouchNavWidth / 2;
		TouchNav.setWrapperTranslate(-nowTlanslate);
	}
	$("#TouchNav  .active").removeClass('active');
	$("#TouchNav .swiper-slide").eq(swiper.clickedIndex).addClass('active');
})
