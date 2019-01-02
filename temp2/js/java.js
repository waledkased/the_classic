$(document).ready(function() {
	'use strict';
	//adjsut hedear height
	$(".header").height($(window).height());
	$(window).resize(function(){
		$(".header").height($(window).height());
		$('.bxslider').each(function(){
	  	$(this).css('paddingTop',($(window).height() - $('.bxslider li').height())/2);
	  });
	  
	});
	//links active
	$('.links li a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	//center
	  $('.bxslider').each(function(){
	  	$(this).css('paddingTop',($(window).height() - $('.bxslider li').height())/2);
	  });

	  $('.bxslider').bxSlider(
	  	{
	  		pager:false
	  	});
	  //smooth scrool//
	  $(".navbar .links  li a").click(function(){
	  	$('html, body').animate({
	  		scrollTop:$('#'+$(this).data("value")).offset().top
	  	},1000);
	  });
	  //auto slider for testimonials //
	  (function autoslider(){
	  	$('.slider .active').each(function(){
	  		if(!$(this).is(':last-child')){
	  			$(this).delay(3000).fadeOut(1000,function(){
	  				$(this).removeClass('active').next().addClass('active').fadeIn();
	  				autoslider();
	  			});
	  		}else{
	  			$(this).delay(3000).fadeOut(3000,function(){
	  				$(this).removeClass('active');
	  				$('.slider div').eq(0).addClass('active').fadeIn();
	  				autoslider();
	  			});
	  		}
	  	});

	  }());

	  //id shuffle
	  $('#container').mixItUp();
	  //selected
	  $('.shuffle li').click(function(){

	  	$(this).addClass('selected').siblings().removeClass('selected');
	  });
	  //nice scrool
	  $('html').niceScroll(
	  	{
	  		  cursorcolor:"#19bd9b",
	  		      cursorwidth: "20px"
	  	});

});