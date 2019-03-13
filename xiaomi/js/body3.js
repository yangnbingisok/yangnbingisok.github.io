// 基链
	function Parent7(age,img,detail,introduce,price,news,Eval1,Eval2){
		if (age !='') {
			this.age='<div class="B3BRDiv1" style="opacity:1;">'+age+'</div>';
		}else{
			this.age='<div class="B3BRDiv1">'+age+'</div>';
		}
		this.img='<img class="B3BRImg" style="cursor: pointer;" src='+img+'></img>';

		this.detail='<h3 class="B3BRH3">'+detail+'</h3>';

		this.introduce='<p class="B3BRP1">'+introduce+'</p>';

		if (news !='') {
			this.price='<p class="B3BRP2"><span>'+news+'</span>'+' '+price+'</p>';
		}else{
			this.price='<p class="B3BRP2">'+price+'</p>';
		}
		this.slide='<div class="B3BRDiv2"><p class="B3BRDiv2Eval1">'+Eval1+'</p><p class="B3BRDiv2Eval2">'+Eval2+'</p></div>'
	}
	//创建下边的ul数组
	// age,img,detail,introduce,price,news,Eval1,Eval2

	var remen1=new Parent7('减50元','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen2=new Parent7('享6折','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen3=new Parent7('减400元','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen4=new Parent7('','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen5=new Parent7('','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen6=new Parent7('有好礼','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remen7=new Parent7('享5折','imgs/b2-a.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var remenArr=[remen1,remen2,remen3,remen4,remen5,remen6,remen7]

	var tv1=new Parent7('减50元','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv2=new Parent7('享6折','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv3=new Parent7('减400元','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv4=new Parent7('','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv5=new Parent7('','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv6=new Parent7('有好礼','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tv7=new Parent7('享5折','imgs/b2-b.jpg','小米电视 4A 23英寸','超薄体验,很舒服,很贴心','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var tvArr=[tv1,tv2,tv3,tv4,tv5,tv6,tv7]

	var computer1=new Parent7('减50元','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer2=new Parent7('享6折','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer3=new Parent7('减400元','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer4=new Parent7('','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer5=new Parent7('','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer6=new Parent7('有好礼','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computer7=new Parent7('享5折','imgs/b2-c.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var computerArr=[computer1,computer2,computer3,computer4,computer5,computer6,computer7]

	var home1=new Parent7('减50元','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home2=new Parent7('享6折','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home3=new Parent7('减400元','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home4=new Parent7('','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home5=new Parent7('','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home6=new Parent7('有好礼','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var home7=new Parent7('享5折','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var homeArr=[home1,home2,home3,home4,home5,home6,home7]

	var box1=new Parent7('减50元','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var box2=new Parent7('享6折','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var box3=new Parent7('减400元','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var box4=new Parent7('','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var box5=new Parent7('','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','1799元','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var box6=new Parent7('有好礼','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var box7=new Parent7('享5折','imgs/b2-d.jpg','小米电脑 32+160T 18英寸','超薄体验,迷你电脑,舔到你心里','3599元','','我说的话就是真理,我打的代码就是王道','要达到出错是不可能的境界')
	var boxArr=[box1,box2,box3,box4,box5,box6,box7]
		// 全部接收ul
	var Bo3BLdateArr=[remenArr,tvArr,computerArr,homeArr,boxArr]


	// li中div的基类
	function Parent8(Eval1,Eval2,Eval3,Eval4,img1,img2){
		this.div1='<div class="B2BRLiD1Div"><p>'+Eval1+'</p><p>'+Eval2+'</p></div>'	
		this.img1='<img class="B2BRLiD1Img" src='+img1+' alt="">'		
		this.div2='<div class="B2BRLiD1Div"><p>'+Eval3+'</p><p>'+Eval4+'</p></div>'		
		this.img2='<img class="B2BRLiD1Img" src='+img2+' alt="">'	
	}
	var bodyTp1=new Parent8('小米盒子3s','299元','浏览更多','热门','imgs/b2_3.jpg','imgs/t3.png')
	var bodyTp2=new Parent8('小米电视','4299元','浏览更多','电影影视','imgs/b2-2.jpg','imgs/t3.png')
	var bodyTp3=new Parent8('小米笔记本','2999元','浏览更多','电脑','imgs/b2-a.jpg','imgs/t3.png')
	var bodyTp4=new Parent8('小爱同学','1299元','浏览更多','家居','imgs/b2-b.jpg','imgs/t3.png')
	var bodyTp5=new Parent8('心疼这箱子','1299元','浏览更多','家居','imgs/b2-b.jpg','imgs/t3.png')
	// 全部接收信息
	var bodyTp5Arr = [bodyTp1,bodyTp2,bodyTp3,bodyTp4,bodyTp5]
	//创建上边的序列部分
	var titleArr=['热门','电视影音','电脑','家居','箱包']
	//添加上面的序列
	for (var i = 0; i < titleArr.length; i++) {
		var li=$('<li class="B3TRLi">')
		var div=$('<div class="B3TRDiv">')
		$('.B3TR').append(li)
		li.text(titleArr[i])
		li.append(div)
	};

	// 添加最后一个div
	function creatB3Div(a){
		//创建最后一个div
		var B3BRLiD=$('<div class="B3BRLiD"></div>')
		// 创建里面的上div
		var B3BRLiD1a=$('<div class="B3BRLiD1"></div>')
		// 创建里面的下div
		var B3BRLiD1b=$('<div class="B3BRLiD1"></div>')
		// 创建上div包容p的部分
		var B3BRLiD1aA=$('<div class="B3BRLiD1Div"></div>')
		// 创建下div包容p的部分
		var B3BRLiD1bA=$('<div class="B3BRLiD1Div"></div>')
		// 把大的div加入ul
		$('.B3BRUl').append(B3BRLiD)
		// 添加大div中的两个部分
		B3BRLiD.append(B3BRLiD1a)
		B3BRLiD.append(B3BRLiD1b)
		// 添加上下div中的包容p的部分
		B3BRLiD1a.append(B3BRLiD1aA)
		B3BRLiD1b.append(B3BRLiD1bA)
		// 添加上下div中的img的部分
		B3BRLiD1a.append(bodyTp5Arr[a].img1)
		B3BRLiD1b.append(bodyTp5Arr[a].img2)
		// 添加上下div中的包容p的部分里面的内容
		B3BRLiD1aA.append(bodyTp5Arr[a].div1)
		B3BRLiD1bA.append(bodyTp5Arr[a].div2)
	}
	// 下划线动画
	$('.B3TRDiv').fadeOut()
	$('.B3TRDiv').eq(0).fadeIn()
	function B3TRLiFade(a){
		$('.B3TRDiv').stop().fadeOut(200)
		$('.B3TRDiv').eq(a).stop().fadeIn(300)
	}

	// 创建li
	function creatB3BRLi(a,i){
		var li2=$('<li class="B3BRLi"></li>')
		$('.B3BRUl').append(li2)
		li2.append(Bo3BLdateArr[a][i].age)
		li2.append(Bo3BLdateArr[a][i].img)
		li2.append(Bo3BLdateArr[a][i].detail)
		li2.append(Bo3BLdateArr[a][i].introduce)
		li2.append(Bo3BLdateArr[a][i].price)
		li2.append(Bo3BLdateArr[a][i].slide)
	}
	

	$('.B3TRLi').mouseenter(function(){
		$('.B3BRUl').children().remove()
		var a=$(this).index()
		B3TRLiFade(a)
		// 添加li
		for (var i = 0; i <Bo3BLdateArr[a].length; i++) {
			creatB3BRLi(a,i)
		};
		creatB3Div(a)

		active2()
	})
	$('.B3TRLi').eq(0).mouseenter()

	





	function active2(){
// B3BL部分
	$('.B3BL img').hover(function(){
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
	
	$('.B3BRLi').hover(function(){
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



	$('.B3BRLiD1').hover(function(){
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