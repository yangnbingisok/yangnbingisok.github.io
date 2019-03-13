Zepto(function($){
		//声音小图标旋转
	function rotate(){
		var num = 0;
		setInterval(function(){
			if (num==36000)num=0;
			num++;
			$('.tp').css({
				transform :'rotateZ(' +  num + 'deg)'
			});
		},10);
	};
	rotate();

		//打开声音
	$('.tp').click(function(){
		if (player.paused) {
			player.play();
			$('.tp').attr('src','music/music.png');
		}else{
			player.pause();
			$('.tp').attr('src','music/musicoff.png');
			};
		});
	// $('.tp').click()
		// 封装定时器,作为延迟
	var pn=0;
	$('body').swipeUp(function(){
		if (pn==8) return;
		pn++;
		$('.content').animate({
			top:-611*pn
		},500,function(){
			if ($('.content').position().top==0) {
				mmp1();mgd2();
			};
			if ($('.content').position().top==-611) {
				mgd1();mmp2();
			};
			if ($('.content').position().top==-611*2) {
				mgd2();mgd4();
			};
			if ($('.content').position().top==-611*3) {
				mmp4();mgd5();
			};
			if ($('.content').position().top==-611*4) {
				mgd4();mmp5();mgd6()
			};
			if ($('.content').position().top==-611*5) {
				mgd5();mmp6();mgd7();
			};
			if ($('.content').position().top==-611*6) {
				mgd6();mmp7();mgd8();
			};
			if ($('.content').position().top==-611*7) {
				mgd7();mmp8();
			};
			if ($('.content').position().top==-611*8) {
				mgd8();
			};
		});
		
	});
	$('body').swipeDown(function(){
		if (pn==0) return;
		pn--;
		$('.content').animate({
			top:-611*pn
		},500,function(){
			if ($('.content').position().top==0) {
				mmp1();mgd2()
			}
			if ($('.content').position().top==-611) {
				mgd1();mmp2();
			};
			if ($('.content').position().top==-611*2) {
				mgd2();mgd4()
			};
			if ($('.content').position().top==-611*3) {
				mmp4();mgd5();
			};
			if ($('.content').position().top==-611*4) {
				mgd4();mmp5();mgd6();
			};
			if ($('.content').position().top==-611*5) {
				mgd5();mmp6();mgd7();
			};
			if ($('.content').position().top==-611*6) {
				mgd6();mmp7();mgd8();
			};
			if ($('.content').position().top==-611*7) {
				mgd7();mmp8();
			};
			if ($('.content').position().top==-611*8) {
				mgd8();
			};
		});
	});
	var timer1,timer2,timer3,timer4A,timer4B,timer5,timer6A,timer6B,timer6C,timer7A,timer7B,timer7C,timer7D,timer7E,timer8A,timer8B,timer8C,timer8D,timer8E,timer8F,timer8G;
	mmp1();
	function mmp1(){
		$('.img1').animate({
				left:0,
				top:0
			},500)
			$('.img2').animate({
				left:105,
				top:0
			},800)
			$('.img3').animate({
				left:140,
				top:0
			},1000)
			$('.img4').animate({
				right:0,
				top:0
			},900)
			$('.img5').animate({
				left:0,
				top:100
			},1200)
			$('.img6').animate({
				left:60,
				top:60
			},1500)
			$('.img7').animate({
				bottom:0,
				left:0
			},1200)
			$('.img8').animate({
				bottom:0,
				right:0
			},1500)
			$('.img9').animate({
				bottom:0,
				right:0
			},800)
			$('.img11').animate({
				opacity:1
			},2000);
			$('.img12D').animate({
				opacity:1
			},2500);
			timer1=setInterval(function(){
				$('.l1').animate({
					top:600,
					left:600
				},1500,function(){
					$('.l1').css({
						top:'-300px',
						left:'-300px'
					})
				})
			},3300)
			timer2=setInterval(function(){
				$('.l2').animate({
					right:600,
					bottom:600
				},1600,function(){
					$('.l2').css({
						right:'-300px',
						bottom:'-300px'
					})
				})
			},3300)
			timer3=setInterval(function(){
				$('.l3').animate({
					top:600,
					right:600
				},1200,function(){
					$('.l3').css({
						top:'-300px',
						right:'-300px'
					})
				})
			},3300)
	};
	function mgd1(){
		$('.img1').animate({
				left:-400,
				top:-400
			},10)
			$('.img2').animate({
				left:-400,
				top:-400
			},10)
			$('.img3').animate({
				left:-400,
				top:-400
			},10)
			$('.img4').animate({
				right:-400,
				top:-400
			},10)
			$('.img5').animate({
				left:-400,
				top:-400
			},10)
			$('.img6').animate({
				left:-400,
				top:-400
			},10)
			$('.img7').animate({
				bottom:-400,
				left:-400
			},10)
			$('.img8').animate({
				bottom:-400,
				right:-400
			},10)
			$('.img9').animate({
				bottom:-400,
				right:-400
			},10)
			$('.img11').animate({
				opacity:0
			},10)
			$('.img12D').animate({
				opacity:0
			},10)
			clearInterval(timer1)
			clearInterval(timer2)
			clearInterval(timer3)
	};
	function mmp2(){
		$('.imgA1').animate({
			right:'50%'
		},800);

		$('.imgA2').animate({
			left:'50%'
		},1000);
	};
	function mgd2(){
		$('.imgA1').animate({
			right:-190
		},1);
		$('.imgA2').animate({
			left:-300
		},1);
	};
	function mmp4(){
		$('.imgC1').animate({
			left:125,
			top:85,
			scale:1
		},500)
		$('.imgC2').animate({
			left:15,
			top:140,
			scale:1
		},600)
		$('.imgC3').animate({
			left:245,
			top:130,
			scale:1
		},700)
		$('.imgC4').animate({
			left:50,
			top:260,
			scale:1
		},800)
		$('.imgC5').animate({
			left:240,
			top:270,
			scale:1
		},900)
		$('.imgC6').animate({
			left:50,
			top:365,
			scale:1
		},1000)
		$('.imgC7').animate({
			left:240,
			top:370,
			scale:1
		},1000)
		$('.imgC8').animate({
			left:145,
			top:460,
			scale:1
		},1000)
			
		timer4A=setTimeout(function(){
			$('.imgC9').animate({
				left:-50,
				top:50,
				scale:1
			},1000)
		},1200)
		$('.imgC10').animate({
			left:50,
			top:185,
			scale:1
		},1000)
		timer4B=setTimeout(function(){
			$('.imgC11').animate({
				left:0,
				top:0,
				scale:1
			},1000)
		},2500)
	};
	function mgd4(){
		clearTimeout(timer4A)
		clearTimeout(timer4B)
		$('.imgC1').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC2').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC3').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC4').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC5').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC6').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC7').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC8').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC9').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.01)'
		})
		$('.imgC10').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.1)'
		})
		$('.imgC11').css({
			left:'50%',
			top:'50%',
			transform:'translate(-50%,-50%) scale(0.01)'
		})
	};
	function mmp5(){
		$('.body5 img').hide()
		$('.imgD10').fadeIn(1000)
		$('.imgD1').fadeIn(400)
		$('.imgD2').fadeIn(1100)
		$('.imgD3').fadeIn(400)
		$('.imgD4').fadeIn(1100)
		$('.imgD5').fadeIn(400)
		$('.imgD6').fadeIn(1100)
		$('.imgD7').fadeIn(1100)
		$('.imgD8').fadeIn(400)
		$('.imgD9').fadeIn(1100)
		timer5=setTimeout(function(){
			$('.imgD1').animate({
				left:25,
				top:105,
				width:58,
				height:80
			},600);
			$('.imgD2').animate({
				left:290,
				top:100,
				width:58,
				height:75
			},600);
			$('.imgD3').animate({
				left:100,
				top:205,
				width:58,
				height:75
			},600);
			$('.imgD4').animate({
				left:205,
				top:230,
				width:58,
				height:75
			},600);
			$('.imgD5').animate({
				left:13,
				top:338,
				width:58,
				height:75
			},600);
			$('.imgD6').animate({
				left:165,
				top:380,
				width:58,
				height:75
			},600);
			$('.imgD7').animate({
				left:280,
				top:335,
				width:58,
				height:75
			},600);
			$('.imgD8').animate({
				left:75,
				top:510,
				width:58,
				height:75
			},600);
			$('.imgD9').animate({
				left:245,
				top:483,
				width:58,
				height:75
			},600);
			$('.imgD11').show(600);
			$('.imgD12').show(600);
			$('.imgD13').show(600);
			$('.imgD14').show(600);
			$('.imgD15').show(600);
			$('.imgD16').show(600);
			$('.imgD17').show(600);
			$('.imgD18').show(600);
			$('.imgD19').show(600);
		},1200)
	};
	function mgd5(){
		clearTimeout(timer5)
		$('.body5 img').hide()
		$('.imgD1').css({
			width: '53px',
			height: '75px',
			left: '35px',
			top: '120px',
		})
		$('.imgD2').css({
			width: '53px',
			height: '75px',
			left: '305px',
			top: '115px',
		})
		$('.imgD3').css({
			width: '53px',
			height: '75px',
			left: '115px',
			top: '220px',
		})
		$('.imgD4').css({
			width: '53px',
			height: '75px',
			left: '215px',
			top: '250px',
		})
		$('.imgD5').css({
			width: '53px',
			height: '75px',
			left: '28px',
			top: '353px',
		})
		$('.imgD6').css({
			width: '53px',
			height: '75px',
			left: '180px',
			top: '395px',
		})
		$('.imgD7').css({
			width: '53px',
			height: '75px',
			left: '295px',
			top: '350px',
		})
		$('.imgD8').css({
			width: '53px',
			height: '75px',
			left: '90px',
			top: '525px',
		})
		$('.imgD9').css({
			width: '53px',
			height: '75px',
			left: '260px',
			top: '498px',
		})
	};
	function mmp6(){
		$('.imgE1').animate({
			left:-10
		},600);
		$('.imgE2').animate({
			left:25
		},1200);
		$('.imgE3').animate({
			left:110
		},1500);
		$('.imgE4').animate({
			left:200
		},1200);
		$('.imgE5').animate({
			left:350
		},600);
		$('.imgE6').animate({
			left:35,
			scale:1
		},900);
		$('.imgE7').animate({
			left:350,
			scale:1
		},900);
		$('.imgE8').animate({
			left:400,
			top:80
		},1200);
		$('.imgE9').fadeIn(1600)
		$('.imgE14').fadeIn(1200)
		timer6A=setTimeout(function(){
			$('.imgE11').fadeIn(800)
			$('.imgE12').fadeIn(800)
		},1300)
		timer6B=setTimeout(function(){
			$('.imgE13').fadeIn(800)
			$('.imgE15').fadeIn(800)
			$('.imgE16').fadeIn(800)
		},800)
		timer6C=setTimeout(function(){
			$('.imgE10').fadeIn(1600)
		},2000)
	};
	function mgd6(){
		clearTimeout(timer6A)
		clearTimeout(timer6B)
		clearTimeout(timer6C)

		$('.imgE1').css({
			left:-'600px'
		});
		$('.imgE2').css({
			left:'600px'
		});
		$('.imgE3').css({
			left:'-200px'
		});
		$('.imgE4').css({
			left:'-200px'
		});
		$('.imgE5').css({
			left:'-200px'
		});
		$('.imgE6').css({
			left:'600px',
			scale:'5'
		});
		$('.imgE7').css({
			left:'600px',
			scale:'5'
		});
		$('.imgE8').css({
			left:'-200px',
			top:'350px'
		});
		$('.imgE9').hide();
		$('.imgE10').hide();
		$('.imgE11').hide();
		$('.imgE12').hide();
		$('.imgE13').hide();
		$('.imgE14').hide();
		$('.imgE15').hide();
		$('.imgE16').hide();
	};
	function mmp7(){
		$('.imgF1').fadeIn(800)
	
		timer7A=setTimeout(function(){
			$('.imgF2').fadeIn(800)
		},1000)
		timer7B=setTimeout(function(){
			$('.imgF3').fadeIn(800)
		},2000)
		timer7C=setTimeout(function(){
			$('.imgF4').fadeIn(800)
		},3000)
		timer7D=setTimeout(function(){
			$('.imgF5').fadeIn(800)
		},4000)
		timer7E=setTimeout(function(){
			$('.imgF11').animate({
				height:360
			},2500)
		},5000)
	};
	function mgd7(){
		clearTimeout(timer7A)
		clearTimeout(timer7B)
		clearTimeout(timer7C)
		clearTimeout(timer7D)
		clearTimeout(timer7E)
		$('.imgF1').fadeOut()
		$('.imgF2').fadeOut()
		$('.imgF3').fadeOut()
		$('.imgF4').fadeOut()
		$('.imgF5').fadeOut()
		$('.imgF11').css({
			height:0
		})
	};
	function mmp8(){
		
		$('.imgG2').animate({
			top:30,
			left:25
		},1500);
		$('.imgG3').animate({
			top:25,
			left:90
		},2000);
		$('.imgG4').animate({
			top:25,
			right:25
		},1500);
		timer8A=setTimeout(function(){
			$('.imgG1').animate({
				top:30,
				left:-15
			},1000);
			$('.imgG5').animate({
			top:105,
			right:30
			},1000);
			$('.imgG6').animate({
				top:-5,
				right:-15
			},1000);
		},2200)
		timer8B=setTimeout(function(){
			$('.imgG7').animate({
				top:75,
				left:110
			},2000);
		},3000)
		timer8C=setTimeout(function(){
			$('.imgG8').fadeIn(1200)
		},5000)
		timer8D=setTimeout(function(){
			$('.imgG9').fadeIn(1200)
		},6500)
		timer8E=setTimeout(function(){
			$('.imgG10').fadeIn(1200)
		},7900)
		timer8F=setTimeout(function(){
			$('.imgG11').fadeIn(1200)
		},9300)
		timer8G=setTimeout(function(){
			$('.imgG12').fadeIn(1200)
		},10500)
	};
	function mgd8(){
		clearTimeout(timer8A)
		clearTimeout(timer8B)
		clearTimeout(timer8C)
		clearTimeout(timer8D)
		clearTimeout(timer8E)
		clearTimeout(timer8F)
		clearTimeout(timer8G)
		$('.imgG1').css({
			top:30,
			left:-500
		});
		$('.imgG2').css({
			top:30,
			left:800
		});
		$('.imgG3').css({
			top:600,
			left:800
		});
		$('.imgG4').css({
			top:25,
			right:800
		});
		$('.imgG5').css({
			top:105,
			right:-500
		});
		$('.imgG6').css({
			top:-5,
			right:-500
		});
		$('.imgG7').css({
			top:75,
			left:800
		});
		$('.imgG8').fadeOut()
		$('.imgG9').fadeOut()
		$('.imgG10').fadeOut()
		$('.imgG11').fadeOut()
		$('.imgG12').fadeOut()
	};
})