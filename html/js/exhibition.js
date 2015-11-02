$(document).ready(function(e){
	$(".exhibition_btn > li").on("mouseenter",function(e){
		var img_src=$(this).find(">a>img").attr("src");
		$(this).find(">a>img").attr("src",img_src.replace("_off","_on"));
	});
	$(".exhibition_btn > li").on("mouseleave",function(e){
		var img_src=$(this).find(">a>img").attr("src");
		$(this).find(">a>img").attr("src",img_src.replace("_on","_off"));
	});
	$(".btn_korea a").on("click",function(e){
		$("#ex_page").css("display","none");
		$("#ex_korea").css("display","block");
	});
	$(".btn_page a").on("click",function(e){
		$("#ex_korea").css("display","none");
		$("#ex_page").css("display","block");
	});

})


