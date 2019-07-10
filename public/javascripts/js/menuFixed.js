	$(function() {
				var yHeight = $('#pay_tits').height()
				var xHeight = $('#topHeight').height()
				//console.log("77=" + xHeight);
				var pro_top = $("#infoView").offset().top;
				var news_top = $("#creditRecordView").offset().top;
				var ser_top = $("#stockRightView").offset().top;
				var con_top = $("#recruitInfoView").offset().top;
				var job_top = $("#intellPropertyView").offset().top;
				var xwzx_top = $("#newsInfoView").offset().top;
				var lxfs_top = $("#contactInfoView").offset().top;
				var com_top = $("#commentView").offset().top;

				$(window).scroll(function() {
					var scroH = ($(this).scrollTop()) + (xHeight + yHeight / 2) - yHeight / 2 ;
					console.log(scroH);
					if(scroH >= com_top) {

						set_cur(".commentView");
						//console.log("7=" + job_top);
					} else if(scroH >= lxfs_top) {

						set_cur(".contactInfoView");

						//console.log("4=" + con_top);

					} else if(scroH >= xwzx_top) {

						set_cur(".newsInfoView");

						//console.log("6=" + con_top);

					} else if(scroH >= job_top) {

						set_cur(".intellPropertyView");
						//console.log("1=" + job_top);
					} else if(scroH >= con_top) {

						set_cur(".recruitInfoView");

						//console.log("2=" + con_top);

					} else if(scroH >= ser_top) {

						set_cur(".stockRightView");
						//console.log("3=" + ser_top);
					} else if(scroH >= news_top) {

						set_cur(".creditRecordView");
						//console.log("4=" + news_top);
					} else if(scroH >= pro_top) {

						set_cur(".infoView");
						//console.log("5=" + pro_top);
					}
				});

				$(".nav li a").click(function() {
					var el = $(this).attr('class');
					//console.log('9='+ xHeight);
					//console.log('10='+ yHeight);
					$('html, body').animate({
						scrollTop: $("#" + el).offset().top - ((xHeight + yHeight / 2) + yHeight / 2)

					}, 300);
					$(this).addClass("cur").parent().siblings().find("a").removeClass("cur");
				});

			});

			function set_cur(n) {
				if($(".nav a").hasClass("cur")) {
					$(".nav a").removeClass("cur");
				}
				$(".nav a" + n).addClass("cur");
			};
			$(window).scroll(function(){
				var hei = $(document).scrollTop()
				if(hei >= 300) {
					$('.com_main_listr  .com_main_img').hide()
					$('.com_main_listr  .com_main_title').css('width', '5rem')
					$('.com_main_text').css('margin-left', '0')
					$('.com_main_txtx').hide()
					$('.com_url_add').hide()
					$('.topHeight').css('height', '3.8rem')
					$('.topHeight .com_navbar_list').css('top', '2.5rem')

					$('.main_com_tab_detail').css('height', '4.3rem')

				} else {
					$('.com_main_listr .com_main_img').show()
					$('.com_main_listr  .com_main_title').css('width', '4rem')
					$('.com_main_text').css('margin-left', '0.1rem')
					$('.com_main_txtx').show()
					$('.com_url_add').show()
					$('.topHeight').css('height', '5rem')
					$('.topHeight .com_navbar_list').css('top', '3.8rem')

				}
			});