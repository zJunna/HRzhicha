 new function() {
 	var _self = this;
 	_self.width = 750; //设置默认最大宽度
 	_self.fontSize = 100; //默认字体大小
 	_self.widthProportion = function() {
 		var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
 		return p > 1 ? 1 : p < 0.32 ? 0.32 : p;
 	};
 	_self.changePage = function() {
 		document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
 	}
 	_self.changePage();
 	window.addEventListener('resize', function() {
 		_self.changePage();
 	}, false);
 };

 function clearSubs(e, s, d, r) {
 	if(e.val() != '' && s.val() != '' && d.val() != '') {
 		r.addClass('on');
 		r.removeAttr('disabled');
 	} else {
 		r.removeClass('on');
 		r.attr('disabled', 'disabled');
 	}
 }

 function clearSub(e, s, r) {
 	if(e.val() != '' && s.val() != '') {
 		r.addClass('on');
 		r.removeAttr('disabled');
 	} else {
 		r.removeClass('on');
 		r.attr('disabled', 'disabled');
 	}
 }
 $('.content .box_inp .lable_in input').bind('input propertychange', function() {
 	clearSubs($('#a'), $('#b'), $('#c'), $('.btn'))
 });
 $('.content .box_inp .lable_in input').bind('input propertychange', function() {
 	clearSub($('#a'), $('#b'), $('.btn'))
 });
 $('.reg_pas_lab input').bind('input propertychange', function() {
 	clearSub($('#a'), $('#b'), $('.buttonser'))
 });
 $('.reg_lable input').bind('input propertychange', function() {
 	clearSub($('#a'), $('#b'), $('.buttonser'))
 });
//弹出
 var title = '',
 	classer = 0,
 	arrlist = [],
 	actives = '',
 	lengths = '';
		
 function btnup(e) {
 	arrlist = [];
 	$('.contas ul li').remove()
 	lengths = e.length - 2 / 0.88 + 'rem';
 	$('#targetContainer .contas').css('bottom', '-' + lengths);
 	$('#targetContainer .contas').animate({
 		'bottom': 0
 	},250)
 	for(var n = 0; n < e.length; n++) {
 		if(n == 0) {
 			classer = e[n]
 		} else if(n == 1) {
 			title = e[n]
 		} else {
 			arrlist.push(e[n])
 		}
 	}
 	$('#targetContainer p').html(title)
 	$('#targetContainer').fadeIn();
 	for(var s = 0; s < arrlist.length; s++) {
 		var str = '<li >' + arrlist[s] + '</li>';
 		$('.contas ul').append(str)
 	}
 }
 $('#targetContainer ul').on('click', 'li', function() {
 	$(this).addClass('on').siblings().removeClass('on')
 	actives = $(this).html()
 })
 $('#targetContainer .contas div').click(function() {
 	$('#targetContainer').fadeOut();
 	$('#targetContainer .contas').animate({
 		'bottom': '-' + lengths
 	},350)
 	$('.' + classer).html(actives);
 })
 $('#targetContainer').click(function(){
 	$('#targetContainer').fadeOut();
 	$('#targetContainer .contas').animate({
 		'bottom': '-' + lengths
 	})
 })
  $('#targetContainer .contas').click(function(e){
  	e.stopPropagation()
 })