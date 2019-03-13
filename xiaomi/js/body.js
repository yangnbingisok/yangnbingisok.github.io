// 基链
	function Parent4(age,img,detail,introduce,price,news){
		if (age !='') {
			this.age='<div class="B1BRDiv" style="opacity:1;">'+age+'</div>';
		}else{
			this.age='<div class="B1BRDiv">'+age+'</div>';
		}
		this.img='<img class="B1BRImg" style="cursor: pointer;" src='+img+'></img>';

		this.detail='<h3 class="B1BRH3">'+detail+'</h3>';

		this.introduce='<p class="B1BRP1">'+introduce+'</p>';

		if (news !='') {
			this.price='<p class="B1BRP2"><span>'+news+'</span>'+' '+price+'</p>';
		}else{
			this.price='<p class="B1BRP2">'+price+'</p>';
		}
	}
// body1部分
//描述li内容
	// age,img,detail,introduce,price,news
	var message1=new Parent4('减50元','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元')
	var message2=new Parent4('享6折','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','')
	var message3=new Parent4('减400元','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','')
	var message4=new Parent4('','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元')
	var message5=new Parent4('','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','1799元')
	var message6=new Parent4('有好礼','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','')
	var message7=new Parent4('享5折','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','')
	var message8=new Parent4('商家很皮','imgs/b1-2.jpg','小米8 SE 4GB+64Gb','超薄体验,很舒服,很贴心','3599元','')
	var B1BRLidateArr=[message1,message2,message3,message4,message5,message6,message7,message8]



	for (var i = 0; i < B1BRLidateArr.length; i++) {
		var li=$('<li class="B1BRLi"></li>');
		$('.B1BRUl').append(li)
		li.append(B1BRLidateArr[i].age)
		li.append(B1BRLidateArr[i].img)
		li.append(B1BRLidateArr[i].detail)
		li.append(B1BRLidateArr[i].introduce)
		li.append(B1BRLidateArr[i].price)
	};
	// B1BL部分
	$('.B1BL img').hover(function(){
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
	
	
	$('.B1BRLi').hover(function(){
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
	
