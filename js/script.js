$(document).ready(function(){
	
	$(window).scroll(function(){
		
		var scrol = $(window).scrollTop();
		
		if(scrol > 1000){
			
			$(".scroll1").fadeIn()
			
		}else{
			
			$(".scroll1").fadeOut()
		}
		if(scrol >= 900){
			
			$(".fix").slideDown()
			
		}else{
			
			$(".fix").slideUp()
		}
	});
//############################################
	$(".scroll1").on("click" , function(){
		
		$("body , html").animate({
			
			scrollTop : 0
		},1000)
	});
//############################################
    $(".fa-times").css("display","none");
	
	$(".fa-buromobelexperte").on("click" , function(){
		
		$(this).hide();
		
		$(".fa-times").slideDown();
	});
	
	$(".fa-times").on("click" , function(){
		
		$(".fa-times").css("display","none");
		
		$(".fa-buromobelexperte").slideDown();
	});
//##########################################
    $(".nav1 .navbar-light .navbar-nav a").on("click" , function(){
		
		$(this).addClass("active1");
		
		$(".nav1 .navbar-light .navbar-nav a").removeClass("active1").not($(this).addClass("active1"))
	});
//#############################################
    var winH = $(window).height(),
	
	    navH = $(".nav1").innerHeight();
		
	$(".slid1 .carousel-item").height(winH - navH);
	
	$(window).on("resize" , function(){
		
		var winH = $(window).height();
	
	    navH = $(".nav1").innerHeight();
		
		$(".slid1 .carousel-item").height(winH - navH)
	});
//###############################################
   $(".load3").click(function(){
		
        $('.timer').countTo();

  });
//################################################
    $(".list1 ul li").on("click" , function(){
		
		$(this).addClass("activ1").siblings().removeClass("activ1")
	});
//###############################################
    $(function(){
		
		$("#contfilt").mixItUp();
	})
})