/*左边导航栏鼠标移上变化*/
$('.list').find('ul').find('li').mouseover(function(){
	$(this).find('img.previous').css('display','none');
	$(this).find('img.hover').css('display','inline-block');
});
$('.list').find('ul').find('li').mouseout(function(){
	$(this).find('img.previous').css('display','inline-block');
	$(this).find('img.hover').css('display','none');
});

/*关闭*/
$('.close1').click(function(){
	$('#HBox').css('display','none');
	$('.bg').css('display','none');
});
