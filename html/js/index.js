$(document).ready(function(e){
	var tl = new TimelineMax({  });
	tl.from($("#illust h1"),1,{scale:0,opacity:0,ease:Elastic.easeOut})
	  .from($("#illust h2"),1,{scale:0,opacity:0,ease:Expo.easeOut},"-=0.5")
	  .from($("#illust .kids_top"),1,{top:"-=100",opacity:0,ease:Expo.easeOut},"-=0.75")
	  .from($("#illust .kids1"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .kids2"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .kids3"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .kids4"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .kids5"),1,{sclae:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .kids6"),1,{sclae:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .cloud1"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .cloud2"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .cloud3"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .cloud4"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .cloud5"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .pig"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75")
	  .from($("#illust .sun"),1,{scale:0,opacity:0,ease:Elastic.easeOut},"-=0.75");
})


