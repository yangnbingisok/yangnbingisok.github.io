// 赋值图片
	var imge=['轮播图img/8.jpg','轮播图img/2.jpg','轮播图img/3.jpg','轮播图img/4.jpg','轮播图img/5.jpg','轮播图img/7.jpg']
	for (var i = 0; i < imge.length; i++) {
			$('#lunboContent img').eq(i).attr('src',imge[i]);
	}

	for (var i = 0; i < $('#lunboContent img').length; i++) {
			$("#lunboContent img").eq(i).hide();
		}
	$("#lunboContent img").eq(0).fadeIn();


	//	图片动画
	function lunboimgMove(pn){
			//让别的消失
		for (var i = 0; i < $('#lunboContent img').length; i++) {
			$("#lunboContent img").eq(i).stop().fadeOut(1000);
		}
			//让自身单独出来
		$("#lunboContent img").eq(pn).stop().fadeIn(1000);
	}
	// 赋值名字
	function lunboLiClass(index){
		$('.lunboBtns li').removeClass('lunboActive')
		$(index).addClass('lunboActive')
	}
	function lunboLiClass2(index){
		$('.lunboBtns li').removeClass('lunboActive')
		$('.lunboBtns li').eq(index).addClass('lunboActive')
	}
	//	圆点点击
	var lunboImgIndex=0;
	$('.lunboBtns li').click(function(){
		lunboimgMove($(this).index());
		lunboImgIndex=$(this).index();
		lunboLiClass(this)
	})
	
	// 左点击
	$('#lunboImgleft').click(function(){
		lunboImgIndex--;
		if (lunboImgIndex<0) {lunboImgIndex=5};
		lunboimgMove(lunboImgIndex);
		lunboLiClass2(lunboImgIndex);
	})

	// 右点击
	$('#lunboImgright').click(function(){
		lunboImgIndex++;
		if (lunboImgIndex>=6) {lunboImgIndex=0};
		lunboimgMove(lunboImgIndex);
		lunboLiClass2(lunboImgIndex);
	})

	// 封装轮播
	var lunbosetTime;
	function lunbo(){
		lunbosetTime=setInterval(function(){
			$('#lunboImgright').click()
		},3000)
		}
	lunbo()
	$("#lunboContent img").mouseover(function(){
		clearInterval(lunbosetTime)
	})
	$('.lunboBtns li').mouseover(function(){
		clearInterval(lunbosetTime)
	})
	$('#lunboImgleft').mouseover(function(){
		clearInterval(lunbosetTime)
	})
	$('#lunboImgright').mouseover(function(){
		clearInterval(lunbosetTime)
	})
	$("#lunboContent img").mouseout(function(){
		lunbo();
	})
	$('.lunboBtns li').mouseout(function(){
		lunbo();
	})
	$('#lunboImgleft').mouseout(function(){
		lunbo();
	})
	$('#lunboImgright').mouseout(function(){
		lunbo();
	})
