$(document).ready(function(e){
	$("#top").bind("click",function(e){
		TweenMax.to(("html, body"),1,{scrollTop:0,ease:Expo.easeOut});
	});
	var w=$(window).width() ;
	if ( w <=800 && w>480) {
		$(".header").css("height",150);
	} else if ( w <=480 && w>0){
		$(".header").css("height",180);
	} else {
		$("#gnb > li").on("mouseenter",function(e) {
			TweenMax.to($(".header"),1, {height:230,ease:Expo.easeOut});
		});
		$("#gnb_wrap").on("mouseleave",function(e) {
			TweenMax.to($(".header"),1, {height:150,ease:Expo.easeOut});
		});
	}

})


