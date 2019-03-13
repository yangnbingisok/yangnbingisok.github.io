// 基链
	function Parent5(age,img,detail,introduce,price,news,Eval1,Eval2){
		if (age !='') {
			this.age='<div class="B2BRDiv1" style="opacity:1;">'+age+'</div>';
		}else{
			this.age='<div class="B2BRDiv1">'+age+'</div>';
		}
		this.img='<img class="B2BRImg" style="cursor: pointer;" src='+img+'></img>';

		this.detail='<h3 class="B2BRH3">'+detail+'</h3>';

		this.introduce='<p class="B2BRP1">'+introduce+'</p>';

		if (news !='') {
			this.price='<p class="B2BRP2"><span>'+news+'</span>'+' '+price+'</p>';
		}else{
			this.price='<p class="B2BRP2">'+price+'</p>';
		}
		this.slide='<div class="B2BRDiv2"><p class="B2BRDiv2Eval1">'+Eval1+'</p><p class="B2BRDiv2Eval2">'+Eval2+'</p></div>'
	}
	//创建下边的ul数组
	// age,img,detail,introduce,price,news,Eval1,Eval2

	var remen1=new Parent5('减50元','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen2=new Parent5('享6折','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen3=new Parent5('减400元','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen4=new Parent5('','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen5=new Parent5('','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen6=new Parent5('有好礼','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen7=new Parent5('享5折','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remenArr=[remen1,remen2,remen3,remen4,remen5,remen6,remen7]

	var tv1=new Parent5('减50元','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv2=new Parent5('享6折','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv3=new Parent5('减400元','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv4=new Parent5('','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv5=new Parent5('','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv6=new Parent5('有好礼','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv7=new Parent5('享5折','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tvArr=[tv1,tv2,tv3,tv4,tv5,tv6,tv7]

	var computer1=new Parent5('减50元','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer2=new Parent5('享6折','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer3=new Parent5('减400元','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer4=new Parent5('','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer5=new Parent5('','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer6=new Parent5('有好礼','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer7=new Parent5('享5折','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computerArr=[computer1,computer2,computer3,computer4,computer5,computer6,computer7]

	var home1=new Parent5('减50元','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home2=new Parent5('享6折','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home3=new Parent5('减400元','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home4=new Parent5('','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home5=new Parent5('','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home6=new Parent5('有好礼','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home7=new Parent5('享5折','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var homeArr=[home1,home2,home3,home4,home5,home6,home7]
		// 全部接收ul
	var Bo2BLdateArr=[remenArr,tvArr,computerArr,homeArr]


	// li中div的基类
	function Parent6(Eval1,Eval2,Eval3,Eval4,img1,img2){
		this.div1='<div class="B2BRLiD1Div"><p>'+Eval1+'</p><p>'+Eval2+'</p></div>'	
		this.img1='<img class="B2BRLiD1Img" src='+img1+' alt="">'		
		this.div2='<div class="B2BRLiD1Div"><p>'+Eval3+'</p><p>'+Eval4+'</p></div>'		
		this.img2='<img class="B2BRLiD1Img" src='+img2+' alt="">'	
	}
	var bodyTp1=new Parent6('小米盒子3s','299元','浏览更多','热门','imgs/b2_3.jpg','imgs/t3.png')
	var bodyTp2=new Parent6('小米电视','4299元','浏览更多','电影影视','imgs/b2-2.jpg','imgs/t3.png')
	var bodyTp3=new Parent6('小米笔记本','2999元','浏览更多','电脑','imgs/b2-a.jpg','imgs/t3.png')
	var bodyTp4=new Parent6('小爱同学','1299元','浏览更多','家居','imgs/b2-b.jpg','imgs/t3.png')
	// 全部接收信息
	var bodyTp4Arr = [bodyTp1,bodyTp2,bodyTp3,bodyTp4]

	//创建上边的序列部分
	var titleArr=['热门','电视影音','电脑','家居']
	//添加上面的序列
	for (var i = 0; i < titleArr.length; i++) {
		var li=$('<li class="B2TRLi">')
		var div=$('<div class="B2TRDiv">')
		$('.B2TR').append(li)
		li.text(titleArr[i])
		li.append(div)
	};

	// 添加最后一个div
	function creatB2Div(a){
		//创建最后一个div
		var B2BRLiD=$('<div class="B2BRLiD"></div>')
		// 创建里面的上div
		var B2BRLiD1a=$('<div class="B2BRLiD1"></div>')
		// 创建里面的下div
		var B2BRLiD1b=$('<div class="B2BRLiD1"></div>')
		// 创建上div包容p的部分
		var B2BRLiD1aA=$('<div class="B2BRLiD1Div"></div>')
		// 创建下div包容p的部分
		var B2BRLiD1bA=$('<div class="B2BRLiD1Div"></div>')
		// 把大的div加入ul
		$('.B2BRUl').append(B2BRLiD)
		// 添加大div中的两个部分
		B2BRLiD.append(B2BRLiD1a)
		B2BRLiD.append(B2BRLiD1b)
		// 添加上下div中的包容p的部分
		B2BRLiD1a.append(B2BRLiD1aA)
		B2BRLiD1b.append(B2BRLiD1bA)
		// 添加上下div中的img的部分
		B2BRLiD1a.append(bodyTp4Arr[a].img1)
		B2BRLiD1b.append(bodyTp4Arr[a].img2)
		// 添加上下div中的包容p的部分里面的内容
		B2BRLiD1aA.append(bodyTp4Arr[a].div1)
		B2BRLiD1bA.append(bodyTp4Arr[a].div2)
	}
	// 删除上一个内容
	function removeB2Li(){
		$('.B2BRLi').remove()
		$('.B2BRLiD').remove()
	}
	// 下划线动画
	$('.B2TRDiv').fadeOut()
	$('.B2TRDiv').eq(0).fadeIn()
	function B2TRLiFade(a){
		$('.B2TRDiv').stop().fadeOut(200)
		$('.B2TRDiv').eq(a).stop().fadeIn(300)
	}

	// 创建li
	function creatB2BRLi(a,i){
		var li=$('<li class="B2BRLi"></li>')
		$('.B2BRUl').append(li)
		li.append(Bo2BLdateArr[a][i].age)
		li.append(Bo2BLdateArr[a][i].img)
		li.append(Bo2BLdateArr[a][i].detail)
		li.append(Bo2BLdateArr[a][i].introduce)
		li.append(Bo2BLdateArr[a][i].price)
		li.append(Bo2BLdateArr[a][i].slide)
	}
	

	$('.B2TRLi').mouseenter(function(){
		removeB2Li()
		var a=$(this).index()
		B2TRLiFade(a)
		// 添加li
		for (var i = 0; i <Bo2BLdateArr[a].length; i++) {
			creatB2BRLi(a,i)
		};
		creatB2Div(a)
		active()
	})
	$('.B2TRLi').eq(0).mouseenter()

	





	
	function active(){
	// B2BL部分
	$('.B2BL img').hover(function(){
		$(this).parent().stop().animate({
			top:-5
		},300)
		$(this).parent().css('box-shadow','0 10px 25px 1px #999')

	},function(){
		$(this).parent().stop().animate({
			top:0
		},300)
		$(this).parent().css('box-shadow','0 0 0 0 #999')

	})

	
	$('.B2BRLi').hover(function(){
		$(this).stop().animate({
			top:-5
		},300)
		$(this).css('box-shadow','0 10px 25px 1px #999')
		var a = $(this).children().length-1
		$(this).children().eq(a).stop().show().animate({
			top:220
		},300)

	},function(){
		$(this).stop().animate({
			top:0
		},300)
		$(this).css('box-shadow','0 0 0 0 #999')
		var a = $(this).children().length-1
		$(this).children().eq(a).stop().animate({
			top:300
		},300,function(){
			$(this).children().eq(a).hide()
		})
	})
	


	$('.B2BRLiD1').hover(function(){
		$(this).stop().animate({
			top:-5
		},300)
		$(this).css('box-shadow','0 10px 25px 1px #999')
	},function(){
		$(this).stop().animate({
			top:0
		},300)
		$(this).css('box-shadow','0 0 0 0 #999')
	})
	
	}