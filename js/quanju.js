$(function(){
	var num = 0;
	var timer = null;
	$('.doc_box>div').eq(0).removeClass('no');
	
	$('.btn_dot li').click(function(){
		var index = $(this).index();
		num = index;
		console.log(index);
		console.log($('.doc_box'))
		$('.doc_box').animate({top:-index*100+'%'});
		$(this).addClass('active').siblings().removeClass('active');
		$('.doc_box>div').eq(num).removeClass('no').siblings().addClass('no');
	})
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer = setTimeout(function(){
			num -= d;
			if(num<0){num=0};
			if(num>6){num=6}
			$('.doc_box').animate({top:-num*100+'%'});
			$('.btn_dot li').eq(num).addClass('active').siblings().removeClass('active');
			$('.doc_box>div').eq(num).removeClass('no').siblings().addClass('no');
		},500)
	})
})
