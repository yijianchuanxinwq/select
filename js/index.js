//获取操作对象sss
var length=$(".btn").length;
$(".btn").on('click',function(){
$("._nav").hide();
for(var i=0;i<length;i++){
	$($($(".btn")[i]).children().eq(2)).attr({"class":"glyphicon glyphicon-triangle-bottom"});
}
	if($(this).attr("class")=="btn"){
		$(".btn").removeClass("show");
		$(this).addClass("show");
		$($(".show").children().eq(2)).attr({"class":"glyphicon glyphicon-chevron-up"});
		$($(".show").next()).show();
	}else{
		$($(".show").children().eq(2)).attr({"class":"glyphicon glyphicon-triangle-bottom"});
		$($(".show").next()).hide();
		$(this).removeClass("show");
	}

})
