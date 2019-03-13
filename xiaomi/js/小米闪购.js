// 基链
	function Parent3(age,img,detail,introduce,price,news){
		if (age !='') {
			this.age='<div class="CT3BRDiv" style="opacity:1;">'+age+'</div>';
		}else{
			this.age='<div class="CT3BRDiv">'+age+'</div>';
		}
		this.img='<img class="CT3BRImg" src='+img+'></img>';

		this.detail='<h3 class="CT3BRH3">'+detail+'</h3>';

		this.introduce='<p class="CT3BRP1">'+introduce+'</p>';

		if (news !='') {
			this.price='<p class="CT3BRP2"><span>'+news+'</span>'+' '+price+'</p>';
		}else{
			this.price='<p class="CT3BRP2">'+price+'</p>';
		}
	}
//描述li内容
	// age,img,detail,introduce,price,news
	var message1=new Parent3('1元秒杀','imgs/c-b2.jpg','小爱出品,最丑的螺丝刀','仅仅可以日常所用','10元','5元')
	var message2=new Parent3('2元秒杀','imgs/c-b2.jpg','小爱出品,最丑的螺丝刀','仅仅可以日常所用','10元','')
	var message3=new Parent3('3元秒杀','imgs/c-b2.jpg','小爱出品,最丑的螺丝刀','仅仅可以日常所用','10元','')
	var message4=new Parent3('','imgs/c-b2.jpg','小爱出品,最丑的螺丝刀','仅仅可以日常所用','10元','5元')
	var message5=new Parent3('','imgs/c-b2.jpg','小爱出品,最丑的螺丝刀','仅仅可以日常所用','10元','5元')
	var message6=new Parent3('6元秒杀','imgs/c-b2.jpg','小爱出品,最丑的螺丝刀','仅仅可以日常所用','10元','')
	var CT3BRLidateArr=[message1,message2,message3,message4,message5,message6]



	for (var i = 0; i < CT3BRLidateArr.length; i++) {
		var li=$('<li class="CT3BRLi"></li>');
		$('.CT3BRUl').append(li)
		li.append(CT3BRLidateArr[i].age)
		li.append(CT3BRLidateArr[i].img)
		li.append(CT3BRLidateArr[i].detail)
		li.append(CT3BRLidateArr[i].introduce)
		li.append(CT3BRLidateArr[i].price)
	};

	
	$('.CT3TR1').click(function(){
		if ($('.CT3BRUl').css('left')=='0px') {
			$('.CT3BRUl').css('color','rgb(238,238,238)')
			return
		};
		$('.CT3BRUl').stop().animate({
			left:'0'
		},400,function(){
			if ($('.CT3BRUl').css('left')=='0px') {
				$('.CT3BRUl').css('color','rgb(238,238,238)')
			};
		})
	})

	$('.CT3TR2').click(function(){
		if ($('.CT3BRUl').css('left')=='-1020px') {
			$('.CT3BRUl').css('color','rgb(238,238,238)')
			return
		};
		$('.CT3BRUl').stop().animate({
			left:'-1020'
		},400,function(){
			if ($('.CT3BRUl').css('left')=='-1020px') {
				$('.CT3BRUl').css('color','rgb(238,238,238)')
				$('.CT3TR2').click(false)
			};
		})
	});

	