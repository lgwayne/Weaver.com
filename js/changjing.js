$(function(){
	//为定时器添加变量
	var num1 = 0; 
	var num2 = 0; 
	var num3 = 0;
	var timer = null;
	//一级页面元素点击打开二级页面
	$('.changjing_box .box .con > div').click(function(){
		var index = $(this).index();
//		$('.changjing_position_box > div').eq(index).css('display','block'); /*根据不同一级页面打开对应二级页面*/
		$('.changjing_position_box > div').css('display','block');/*偷懒：打开同一个二级页面*/
	})
	$('.changjing_position_box > div .p_top button').click(function(){ /*关闭二级页面*/
		$('.changjing_position_box > div').css('display','none');
	})
	
	//二级页面导航点击
	$('.p_nav a').click(function(){
		var index = $(this).index();
		console.log("index:"+index)
		$(this).addClass('active').siblings().removeClass('active');
		$('.p_con_box > div').eq(index+1).addClass('active').siblings().removeClass('active');
	})
	//二级页面导航栏点击联动(可用绑定导航栏的index联动，
//		此处尝试.each()方法)
	$('.p_left ul li').each(function(i){/*用.each()方法遍历对象的dom对象，并获取对应索引i值*/
		console.log("+i:"+i)
		$('.p_left:eq('+i+') ul li').click(function(){
			console.log("i:"+i)
			var index = $(this).index();		/*获取对应li的索引,排他,增加点击效果*/
			$(this).addClass('active').siblings().removeClass('active');
			$('.p_right:eq('+i+') > ul > li').eq(index).addClass('active').siblings().removeClass('active');
			num1 = 0;/*重置定时器*/
			num2 = 0;
			num3 = 0;
			$('.p_r_imgbox').each(function(i){
				console.log("img,i:"+i)
				$('.p_r_imgbox:eq('+i+')').css('left','0');
			})
			$('.p_r_left li').each(function(i){
				$('.p_r_left:eq('+i+') li').eq(0).addClass('active').siblings().removeClass('active');
			})
			$('.p_r_right ol li').each(function(i){
				$('.p_r_right:eq('+i+') ol li').eq(0).addClass('active').siblings().removeClass('active');
			})
		})
	})
	
	
	//轮播图画面
	function next1(){
		num1++;
		if(num1>$('.p_r_imgbox:eq(0) > img').length-1){num1=0};
		$('.p_r_imgbox:eq(0)').animate({
			left:-num1*572+'px',
		},300)
		$('.p_r_left:eq(0) li').eq(num1).addClass('active').siblings().removeClass('active');
		$('.p_r_right:eq(0) ol li').eq(num1).addClass('active').siblings().removeClass('active');
	}
	function next2(){
		num2++;
		if(num2>$('.p_r_imgbox:eq(1) > img').length-1){num2=0};
		$('.p_r_imgbox:eq(1)').animate({
			left:-num2*572+'px',
		},300)
		$('.p_r_left:eq(1) li').eq(num2).addClass('active').siblings().removeClass('active');
		$('.p_r_right:eq(1) ol li').eq(num2).addClass('active').siblings().removeClass('active');
	}
	function next3(){
		num3++;
		if(num3>$('.p_r_imgbox:eq(2) > img').length-1){num3=0};
		$('.p_r_imgbox:eq(2)').animate({
			left:-num3*572+'px',
		},300)
		$('.p_r_left:eq(2) li').eq(num3).addClass('active').siblings().removeClass('active');
		$('.p_r_right:eq(2) ol li').eq(num3).addClass('active').siblings().removeClass('active');
	}
	
	//轮播图内容介绍（介绍和图片联动）
	$('.p_r_left li').each(function(i){
		$('.p_r_left:eq('+i+') li').click(function (){
			var index = $(this).index();
			num1 = index;  
			num2 = index;
			num3 = index;
			$('.p_r_imgbox:eq('+i+')').animate({
				left:-index*572+'px',
			},300)
			$(this).addClass('active').siblings().removeClass('active');
			$('.p_r_right:eq('+i+') ol li').eq(index).addClass('active').siblings().removeClass('active');
		})
	})
	
	//轮播图控制点（点图联动）
	$('.p_r_right ol li').each(function(i){
		$('.p_r_right:eq('+i+') ol li').click(function (){
			var index = $(this).index();
			num1 = index;
			num2 = index;
			num3 = index;
			$('.p_r_imgbox:eq('+i+')').animate({
				left:-index*572+'px',
			},300)
			$('.p_r_left:eq('+i+') li').eq(index).addClass('active').siblings().removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		})
	})
	
	//自动播放
	function auto(){
		timer = setInterval(function(){
			next1();
			next2();
			next3();
		},1000)
	}
	auto();
	
	//移入移出
	$('.p_right').mouseenter(function(){
		clearInterval(timer);
	})
	$('.p_right').mouseleave(function(){
		auto();
	})
})

//	二级页面点击联动
//	$('.p_left ul li').click(function(){
//		var index = $(this).index();
//		$(this).addClass('active').siblings().removeClass('active');
//		$('.p_right > ul > li').eq(index).addClass('active').siblings().removeClass('active');
//		num1 = 0;
//		num2 = 0;
//		num3 = 0;
//		$('.p_r_imgbox:eq(0)').css('left','0');
//		$('.p_r_imgbox:eq(1)').css('left','0');
//		$('.p_r_imgbox:eq(2)').css('left','0');
//		$('.p_r_left:eq(0) li').eq(0).addClass('active').siblings().removeClass('active');
//		$('.p_r_left:eq(1) li').eq(0).addClass('active').siblings().removeClass('active');
//		$('.p_r_left:eq(2) li').eq(0).addClass('active').siblings().removeClass('active');
//		$('.p_r_right:eq(0) ol li').eq(0).addClass('active').siblings().removeClass('active');
//		$('.p_r_right:eq(1) ol li').eq(0).addClass('active').siblings().removeClass('active');
//		$('.p_r_right:eq(2) ol li').eq(0).addClass('active').siblings().removeClass('active');
//	})