$('.sidebar ul li').eq(0).hover(function() {
	$(this).children().children('img').attr('src', '/public/images/webimg/eej_03.jpg')
})
$('.sidebar ul li').eq(0).mouseleave(function() {
	$(this).children().children('img').attr('src', '/public/images/webimg/actnavbar_101.jpg')
})
$('.sidebar ul li').eq(1).hover(function() {
	$(this).children().children('img').attr('src', '/public/images/webimg/seac_061.jpg')
})
$('.sidebar ul li').eq(1).mouseleave(function() {
	$(this).children().children('img').attr('src', '/public/images/webimg/actnavbar_103.jpg')
})
$('.sidebar ul li').eq(2).hover(function() {
	$(this).children().children('img').attr('src', '/public/images/webimg/seac_03.jpg')
})
$('.sidebar ul li').eq(2).mouseleave(function() {
	$(this).children().children('img').attr('src', '/public/images/webimg/actnavbar_10.jpg')
})
$('.sidebar ul li').hover(function() {
	$(this).find('div').stop().animate({
		left: '-167px'
	})
	$(this).find('div').show();
})
$('.sidebar ul li').mouseleave(function() {
	$(this).find('div').stop().animate({
		left: '-100px'
	})
	$(this).find('div').hide();
})
$(".sidebar .downs_box").click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 500);
});

$('.selegos').click(function() {
	if($(this).children('.sele_covers').css('display')=="flex"){
		$(this).children('.sele_covers').css('display', 'none');
	}else{
		$(this).children('.sele_covers').css('display', 'flex')
		$(this).children('.sele_covers').stop().animate({
			top: '45px'
		}, 300)
	}
})
$('.sele_covers .sele_cov_select ul li').click(function() {
	$(this).addClass('on').siblings().removeClass('on')
})
$('.selegos .sele_cov_select ul li').click(function() {
	if($(this).attr("name")!="industry_name"){

		$(this).parents('.selegos').children('.htmlw').html($(this).html())
		$(this).parents('.selegos').children('.sele_covers').hide()
		$(this).parents('.selegos').children('.sele_covers').stop().animate({
			top: '20px'
		}, 50)
		event.stopPropagation();
		
	}
})