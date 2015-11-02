$(document).ready(function(e){
	$("#cafe_wrap .cafe_btn > li").on("mouseenter",function(e){
		var img_src=$(this).find(">a>img").attr("src");
		$(this).find(">a>img").attr("src",img_src.replace("_off","_on"));
	});
	$("#cafe_wrap .cafe_btn > li").on("mouseleave",function(e){
		var img_src=$(this).find(">a>img").attr("src");
		$(this).find(">a>img").attr("src",img_src.replace("_on","_off"));
	});
	$("#cafe_wrap > .cafe_btn > li").on("click",function(e){
		var cafe_btn_sel = $(this).index();
		$("#cafe_wrap .cafe_btn > li").eq(cafe_btn_sel).trigger("mouseenter");
	});


	$(".btn_green a").on("click",function(e){
		$(".cafe .cafe_box").css("display","none");
		$(".cafe .green").css("display","block");
		$(this).css("background-image","url('images/item0_on.gif')");
	});
	$(".btn_halluka a").on("click",function(e){
		$(".cafe .cafe_box").css("display","none");
		$(".cafe .halluka").css("display","block");
	});
	$(".btn_wons a").on("click",function(e){
		$(".cafe .cafe_box").css("display","none");
		$(".cafe .wons").css("display","block");
	});




	function auto(){
		TweenMax.to($(".green .img_box li:last"),0.5,{opacity:0,onComplete:change_list1});
		TweenMax.to($(".halluka .img_box li:last"),0.5,{opacity:0,onComplete:change_list2});
		TweenMax.to($(".wons .img_box li:last"),0.5,{opacity:0,onComplete:change_list3});
	}
	function change_list1(){
		$(".green .img_box li:last").css("opacity",1);
		$(".green .img_box").prepend($(".green .img_box li:last"));
	}
	function change_list2(){
		$(".halluka .img_box li:last").css("opacity",1);
		$(".halluka .img_box").prepend($(".halluka .img_box li:last"));
	}
	function change_list3(){
		$(".wons .img_box li:last").css("opacity",1);
		$(".wons .img_box").prepend($(".wons .img_box li:last"));
	}
	del = setInterval(auto,2000);


	$("#setmenu_wrap .setmenu_btn > li").on("mouseenter",function(e){
		var img_src=$(this).find(">a>img").attr("src");
		$(this).find(">a>img").attr("src",img_src.replace("_off","_on"));
	});
	$("#setmenu_wrap .setmenu_btn > li").on("mouseleave",function(e){
		var img_src=$(this).find(">a>img").attr("src");
		$(this).find(">a>img").attr("src",img_src.replace("_on","_off"));
	});

	$(".btn_origin a").on("click",function(e){
		$(".setmenu .set_box").css("display","none");
		$(".setmenu .origin").css("display","block");
	});
	$(".btn_stamina a").on("click",function(e){
		$(".setmenu .set_box").css("display","none");
		$(".setmenu .stamina").css("display","block");
	});

})


