$(document).ready(function(e){
	$(".fancybox").fancybox();
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});



	$(".a_button li").on("click",function(e){
		var img_src=$(this).find("a img").attr("src");
		$(".a_button li").find("a img").attr("src",img_src.replace("_on","_off"));
		$(this).find("a img").attr("src",img_src.replace("_off","_on"));
		var visual_sel = $(this).index()+1;
		$(".collec_img_a > a > img").attr("src","images/art_a0"+visual_sel+".jpg");
		$(".collec_img_a > a").attr("href","images/a_0"+visual_sel+".jpg");
		$(".a_wrap > li .a_list").css("display","none");
		$(".a_wrap > li:eq("+$(this).index()+") .a_list").css("display","block");
	});

	$(".b_button li").on("click",function(e){
		var img_src=$(this).find("a img").attr("src");
		var yt_src=["plY4Vx0erig","7dpGBTsaE8Y","uCEUWGDPkIQ"];
		$(".b_button li").find("a img").attr("src",img_src.replace("_on","_off"));
		$(this).find("a img").attr("src",img_src.replace("_off","_on"));
		var visual_sel = $(this).index()+1;
		var yt_sel = $(this).index();
		$(".collec_img_b > a > img").attr("src","images/art_b0"+visual_sel+".jpg");
		$(".collec_img_b > a").attr("href","http://youtu.be/"+yt_src[yt_sel]);
		$(".b_wrap > li .a_list").css("display","none");
		$(".b_wrap > li:eq("+$(this).index()+") .a_list").css("display","block");
	});


	$(".c_button li").on("click",function(e){
		var img_src=$(this).find("a img").attr("src");
		$(".c_button li").find("a img").attr("src",img_src.replace("_on","_off"));
		$(this).find("a img").attr("src",img_src.replace("_off","_on"));
		var visual_sel = $(this).index()+1;
		$(".collec_img_c > a > img").attr("src","images/art_c0"+visual_sel+".jpg");
		$(".collec_img_c > a").attr("href","images/c_0"+visual_sel+".jpg");
		$(".c_wrap > li .a_list").css("display","none");
		$(".c_wrap > li:eq("+$(this).index()+") .a_list").css("display","block");
	});

	$(".d_button li").on("click",function(e){
		var img_src=$(this).find("a img").attr("src");
		$(".d_button li").find("a img").attr("src",img_src.replace("_on","_off"));
		$(this).find("a img").attr("src",img_src.replace("_off","_on"));
		var visual_sel = $(this).index()+1;
		$(".collec_img_d > a > img").attr("src","images/art_d0"+visual_sel+".jpg");
		$(".collec_img_d > a").attr("href","images/d_0"+visual_sel+".jpg");
		$(".d_wrap > li .a_list").css("display","none");
		$(".d_wrap > li:eq("+$(this).index()+") .a_list").css("display","block");
	});


})


