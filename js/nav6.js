/* header hide部分  */

(function(){
	
	var $banner = $('#banner .son_banner')
	var $navHide = $('#header .h_nav')
	
	var $shoucang_btn = $navHide.find('.icon-shoucang')
	var $shoucang = $banner.find('.h_shoucang')
	
	
	
	$shoucang_btn.hover(function(){
	
		$shoucang.show()
		
	},function(){
		$shoucang.hide()
		
	})
	

	
	
	
	
	
	
})();



/* 导航栏下拉框2的鼠标划入事件 */
(function(){
	
	var $navLi = $('#banner .son_banner .h_n_h_c2 .h_n_h_c2_left ul li')
	var $showLi = $('#banner .son_banner .h_n_h_c2 .h_n_h_c2_right ul li')
	var index = 0
	
	$navLi.eq(0).css('color','black')
	$showLi.eq(0).show()

	$navLi.mouseenter(function(){
		index = $(this).index()
		$showLi.eq(index).stop().show().siblings().stop().hide()

	})
	
})();


/* 导航栏下拉框5的鼠标划入事件 */
(function(){
	
	var $navLi = $('#banner .son_banner .h_n_h_c5 .h_n_h_c5_left ul li')
	var $showLi = $('#banner .son_banner .h_n_h_c5 .h_n_h_c5_right ul li')
	var index = 0
	
	$navLi.eq(0).css('color','black')
	$showLi.eq(0).show()

	$navLi.mouseenter(function(){
		index = $(this).index()
		$showLi.eq(index).stop().show().siblings().stop().hide()

	})
	
})();



/* 导航栏nav 的鼠标划入事件 */

(function(){
	
	var $nav = $('#header .h_nav')
	var $navLi = $nav.find('.h_nav_right ul li')
	/* 下拉框父级 边框*/
	var $navHide = $('#banner .h_nav_hide')
	var $showLi = $('#banner .son_banner .h_nav_hide_content>li')
	
	var index = 0
	
	$navLi.hover(function(){
		index = $(this).index()
		
		if(index < 6){
			$navHide.show()
			$showLi.eq(index).stop().show().siblings().stop().hide()
			
		}
		
	},function(){
		$navHide.hide()
	})
	
	
	$showLi.hover(function(){
		$navHide.show()
		
	},function(){
		$navHide.hide()
	})
	
	
	
	
	
})();





/* start 固定导航栏部分 */
(function(){
	
	var $navDiv = $('#origin')
	var $showHide = $('#ori_hide')
	
	$navDiv.hover(function(){
		
		$showHide.show()
		
	},function(){
		
		$showHide.hide()
		
	})
	
	
	$showHide.hover(function(){
		
		$showHide.show()
		
	},function(){
		
		$showHide.hide()
		
	})
	
	
	
	
})();


/* end 固定导航栏部分 */













