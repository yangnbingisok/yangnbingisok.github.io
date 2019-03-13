	$('.B4lunbo1Btns li').eq(0).addClass('lunboActive')
	var pn=0;
	$('.B4right1').click(function(){
		if (pn>=3){
			return
		}
		$('.B4lunbo1Btns li').removeClass('lunboActive')
		pn++;
		console.log(pn)
		$('.B4lunboDC1').animate({
			left:-300*pn
		},300)
		$('.B4lunbo1Btns li').eq(pn).addClass('lunboActive')

	})
	$('.B4left1').click(function(){
		if (pn<=0)return
		pn--;
		$('.B4lunbo1Btns li').removeClass('lunboActive')
		$('.B4lunboDC1').animate({
			left:-300*pn
		},300)
		$('.B4lunbo1Btns li').eq(pn).addClass('lunboActive')

	})
	$('.B4lunbo1Btns li').click(function(){
		$('.B4lunbo1Btns li').removeClass('lunboActive')
		pn=$(this).index()
		$('.B4lunboDC1').animate({
			left:-300*pn
		},300)
		$('.B4lunbo1Btns li').eq(pn).addClass('lunboActive')
	})
	$('.B4lunbo1').mouseover(function(){
		$('.B4left1').css('display','block');
		$('.B4right1').css('display','block');
		$(this).stop().animate({
			top:-5
		},300)
		$(this).css('box-shadow','0 10px 25px 1px #999')
	})
	$('.B4lunbo1').mouseout(function(){
		$('.B4left1').css('display','none');
		$('.B4right1').css('display','none');
		$(this).stop().animate({
			top:0
		},300)
		$(this).css('box-shadow','0 0 0 0 #999')
	})



	// 第二个

	$('.B4lunbo2Btns li').eq(0).addClass('lunboActive2')
	var pm=0;
	$('.B4right2').click(function(){
		if (pm>=3){
			return
		}
		$('.B4lunbo2Btns li').removeClass('lunboActive2')
		pm++;
		$('.B4lunboDC2').animate({
			left:-300*pm
		},300)
		$('.B4lunbo2Btns li').eq(pm).addClass('lunboActive2')

	})
	$('.B4left2').click(function(){
		if (pm<=0)return
		pm--;
		$('.B4lunbo2Btns li').removeClass('lunboActive2')
		$('.B4lunboDC2').animate({
			left:-300*pm
		},300)
		$('.B4lunbo2Btns li').eq(pm).addClass('lunboActive2')

	})
	$('.B4lunbo2Btns li').click(function(){
		$('.B4lunbo2Btns li').removeClass('lunboActive2')
		pm=$(this).index()
		$('.B4lunboDC2').animate({
			left:-300*pm
		},300)
		$('.B4lunbo2Btns li').eq(pm).addClass('lunboActive2')
	})
	$('.B4lunbo2').mouseover(function(){
		$('.B4left2').css('display','block');
		$('.B4right2').css('display','block');
		$(this).stop().animate({
			top:-5
		},300)
		$(this).css('box-shadow','0 10px 25px 1px #999')
	})
	$('.B4lunbo2').mouseout(function(){
		$('.B4left2').css('display','none');
		$('.B4right2').css('display','none');
		$(this).stop().animate({
			top:0
		},300)
		$(this).css('box-shadow','0 0 0 0 #999')
	})




	


	// 第三个

	$('.B4lunbo3Btns li').eq(0).addClass('lunboActive3')
	var pb=0;
	$('.B4right3').click(function(){
		if (pb>=3){
			return
		}
		$('.B4lunbo3Btns li').removeClass('lunboActive3')
		pb++;
		$('.B4lunboDC3').animate({
			left:-300*pb
		},300)
		$('.B4lunbo3Btns li').eq(pb).addClass('lunboActive3')

	})
	$('.B4left3').click(function(){
		if (pb<=0)return
		pb--;
		$('.B4lunbo3Btns li').removeClass('lunboActive3')
		$('.B4lunboDC3').animate({
			left:-300*pb
		},300)
		$('.B4lunbo3Btns li').eq(pb).addClass('lunboActive3')

	})
	$('.B4lunbo3Btns li').click(function(){
		$('.B4lunbo3Btns li').removeClass('lunboActive3')
		pb=$(this).index()
		$('.B4lunboDC3').animate({
			left:-300*pb
		},300)
		$('.B4lunbo3Btns li').eq(pb).addClass('lunboActive3')
	})

	$('.B4lunbo3').mouseover(function(){
		$('.B4left3').css('display','block');
		$('.B4right3').css('display','block');
		$(this).stop().animate({
			top:-5
		},300)
		$(this).css('box-shadow','0 10px 25px 1px #999')
	})
	$('.B4lunbo3').mouseout(function(){
		$('.B4left3').css('display','none');
		$('.B4right3').css('display','none');
		$(this).stop().animate({
			top:0
		},300)
		$(this).css('box-shadow','0 0 0 0 #999')
	})





	// 第四个

	$('.B4lunbo4Btns li').eq(0).addClass('lunboActive4')
	var pv=0;
	$('.B4right4').click(function(){
		if (pv>=3){
			return
		}
		$('.B4lunbo4Btns li').removeClass('lunboActive4')
		pv++;
		$('.B4lunboDC4').animate({
			left:-300*pv
		},300)
		$('.B4lunbo4Btns li').eq(pv).addClass('lunboActive4')

	})
	$('.B4left4').click(function(){
		if (pv<=0)return
		pv--;
		$('.B4lunbo4Btns li').removeClass('lunboActive4')
		$('.B4lunboDC4').animate({
			left:-300*pv
		},300)
		$('.B4lunbo4Btns li').eq(pv).addClass('lunboActive4')

	})
	$('.B4lunbo4Btns li').click(function(){
		$('.B4lunbo4Btns li').removeClass('lunboActive4')
		pv=$(this).index()
		$('.B4lunboDC4').animate({
			left:-300*pv
		},300)
		$('.B4lunbo4Btns li').eq(pv).addClass('lunboActive4')
	})
	$('.B4lunbo4').hover(function(){
		$('.B4left4').css('display','block');
		$('.B4right4').css('display','block');
		$(this).stop().animate({
			top:-5
		},300)
		$(this).css('box-shadow','0 10px 25px 1px #999')
	},function(){
		$('.B4left4').css('display','none');
		$('.B4right4').css('display','none');
		$(this).stop().animate({
			top:0
		},300)
		$(this).css('box-shadow','0 0 0 0 #999')
	})
	







