//回到顶部
	// 滚动走
		// $('footer').click(function(){
		// 	$(':root').stop().animate({
		// 		scrollTop:0
		// 	},800)
		// })
	// 直接到账
	$('footer').click(function(){
		$(':root').scrollTop(0)
	})


// 基链
	function Parent(name,img,price,age){
		this.names='<p class="topBoP1">'+name+'</p>';
		this.img='<img class="topBoImg" src='+img+'></img>';
		this.price='<p class="topBoP2">'+price+'</p>';
		if (age !='') {
			this.age='<div class="topBoDiv" style="opacity:1;">'+age+'</div>';
		}else{
			this.age='<div class="topBoDiv">'+age+'</div>';
		}
	}
//创建上边的序列部分
	var titleArr=['小米手机','红米','电视','笔记本','空调','新品','路由器','智能硬件','服务','社区']
	//创建下边的ul数组
	
	//小米手机
	var xiaomi1=new Parent('小米1','img/2.png','2339元起','新品')
	var xiaomi2=new Parent('小米2','img/2.png','2339元起','新品')
	var xiaomi3=new Parent('小米3','img/2.png','2339元起','新品')
	var xiaomi4=new Parent('小米4','img/2.png','2339元起','新品')
	var xiaomi5=new Parent('小米5','img/2.png','2339元起','新品')
	var xiaomi6=new Parent('小米6','img/2.png','2339元起','新品')
	var XiaomiArr=[xiaomi1,xiaomi2,xiaomi3,xiaomi4,xiaomi5,xiaomi6]

	//红米
	var hongmi1=new Parent('红米1','img/1.png','3599元起','')
	var hongmi2=new Parent('红米2','img/1.png','3599元起','')
	var hongmi3=new Parent('红米3','img/1.png','3599元起','')
	var hongmi4=new Parent('红米4','img/1.png','3599元起','')
	var hongmi5=new Parent('红米5','img/1.png','3599元起','')
	var hongmi6=new Parent('红米6','img/1.png','3599元起','')
	var HongmiArr=[hongmi1,hongmi2,hongmi3,hongmi4,hongmi5,hongmi6]

	//电视
	var tv1=new Parent('电视1','img/2.png','2339元起','新品')
	var tv2=new Parent('电视2','img/2.png','2339元起','新品')
	var tv3=new Parent('电视3','img/2.png','2339元起','新品')
	var tv4=new Parent('电视4','img/2.png','2339元起','新品')
	var tv5=new Parent('电视5','img/2.png','2339元起','新品')
	var tv6=new Parent('电视6','img/2.png','2339元起','新品')
	var tvArr=[tv1,tv2,tv3,tv4,tv5,tv6]

	//笔记本
	var computer1=new Parent('电脑1','img/2.png','2339元起','新品')
	var computer2=new Parent('电脑2','img/2.png','2339元起','新品')
	var computer3=new Parent('电脑3','img/2.png','2339元起','新品')
	var computer4=new Parent('电脑4','img/2.png','2339元起','新品')
	var computer5=new Parent('电脑5','img/2.png','2339元起','新品')
	var computer6=new Parent('电脑6','img/2.png','2339元起','新品')
	var computerArr=[computer1,computer2,computer3,computer4,computer5,computer6]

	//空调
	var air1=new Parent('空调1','img/2.png','2339元起','新品')
	var airArr=[air1]

	//新品
	var new1=new Parent('新品1','img/2.png','2339元起','新品')
	var new2=new Parent('新品2','img/2.png','2339元起','新品')
	var new3=new Parent('新品3','img/2.png','2339元起','新品')
	var new4=new Parent('新品4','img/2.png','2339元起','新品')
	var newArr=[new1,new2,new3,new4]

	//路由器
	var router1=new Parent('路由器1','img/2.png','2339元起','')
	var router2=new Parent('路由器2','img/2.png','2339元起','')
	var router3=new Parent('路由器3','img/2.png','2339元起','')
	var router4=new Parent('路由器4','img/2.png','2339元起','')
	var router5=new Parent('路由器5','img/2.png','2339元起','')
	var router6=new Parent('路由器6','img/2.png','2339元起','新品')
	var routerArr=[router1,router2,router3,router4,router5,router6]

	//智能硬件
	var capacity1=new Parent('智能1','img/2.png','2339元起','')
	var capacity2=new Parent('智能2','img/2.png','2339元起','')
	var capacity3=new Parent('智能3','img/2.png','2339元起','')
	var capacity4=new Parent('智能4','img/2.png','2339元起','')
	var capacity5=new Parent('智能5','img/2.png','2339元起','')
	var capacity6=new Parent('智能6','img/2.png','2339元起','新品')
	var capacityArr=[capacity1,capacity2,capacity3,capacity4,capacity5,capacity6]
	// 全部接收ul
	var dateArr=[XiaomiArr,HongmiArr,tvArr,computerArr,airArr,newArr,routerArr,capacityArr]


	for (var i = 0; i < titleArr.length; i++) {
		var li=$('<li>').text(titleArr[i])
		$('#topTo').append(li)
	};

	$('#topTo li').mouseenter(function(){
		if ($(this).index()>=8) {return};
		$('.topBoUl').remove();
		var ul1=$('<ul class="topBoUl"></ul>');	//当前是个字符串
		$('#topBo').append(ul1);
		for (var j = 0; j < dateArr[$(this).index()].length; j++) {
			creatCenterLi($(this).index(),j)
		};
		$('#topBo').stop().hide().slideDown(100)
		//   提问?为什么div可以直接添加内容,然后把div添加到别的标签的动作,
				//但是div不能直接添加sign,再把此div添加到其他标签的动作
	})

	$('#topTo li').mouseleave(function(){
		$('#topBo').stop().slideUp(300)
	})
	$('#topBo').mouseenter(function(){
		$('#topBo').stop().slideDown(100)
	})
	$('#topBo').mouseleave(function(){
		$('#topBo').stop().slideUp(300)
	})

	//创建元素
	function creatCenterLi(i,j){
		var li = $('<li class="topBoLi"></li>');
			li.append($(dateArr)[i][j].age)
			li.append($(dateArr)[i][j].img)
			li.append($(dateArr)[i][j].names)
			li.append($(dateArr)[i][j].price)
			$('.topBoUl').append(li)
	}


