$('.changee').click(function(){
	$('#HBox').css('display','block');
	$('.bg').css('display','block');
	var dishesID=$(this).parent().prev().prev().prev().prev().prev().prev().text();
	$('#dishesID').val(dishesID);
	var dishesName=$(this).parent().prev().prev().prev().prev().prev().text();
	$('#dishesName').val(dishesName);
	var dishesTaste=$(this).parent().prev().prev().prev().prev().text();
	$('#dishesTaste').val(dishesTaste);
	var dishesType=$(this).parent().prev().prev().prev().text();
	$('#dishesType').val(dishesType);
	var dishesIntro=$(this).parent().prev().prev().text();
	$('#dishesIntro').val(dishesIntro);
	var dishesPic=$(this).parent().prev().find('img').attr('src');
	$('.changeImg').find('img').attr('src',dishesPic);
	dishesPic = dishesPic.split('/')[2];
	$('.imgurl').val(dishesPic);

});

/*关闭修改*/
$('.close1').click(function(){
	$('#HBox').css('display','none');
	$('#addDishInfor').css('display','none');
	$('.bg').css('display','none');
});

/*删除*/
var myobj = {
	index:"",
	type:""
}
$('.deletee').click(function(){
	var mid = $(this).parent().prev().prev().prev().prev().prev().prev().text();
	var my = new Object();
	my.index = mid;
	my.type = "menu";
	var wwid = JSON.stringify(my);

	$.ajaxSetup({
        cache:false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8"
      });
	$.ajax({
		url:"./deleteDis.php",
		type:"POST",
		data:{wwid:wwid},
		success:function(msg){
			location.reload();
					
		}
	});
});

/*自动生成编号*/
var myobj = {
	index:"",
	type:""
}
function autoID(msg){
	var obj = new Object();
	obj.type = 'menuID';
	obj.index = msg;
	var wwid = JSON.stringify(obj);
	$.ajaxSetup({
        cache:false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8"
      });
	$.ajax({
		url:"./deleteDis.php",
		type:"POST",
		data:{wwid:wwid},
		success:function(data){
			$('#adishID').val(data);
					
		}
	});
}

/*添加菜品*/
$('.dishManager').find('p').click(function(){
	$('#addDishInfor').css('display','block');
	$('.bg').css('display','block');
	autoID('0');
});

/*左边导航栏鼠标移上变化*/
$('.list').find('ul').find('li').mouseover(function(){
	$(this).find('img.previous').css('display','none');
	$(this).find('img.hover').css('display','inline-block');
});
$('.list').find('ul').find('li').mouseout(function(){
	$(this).find('img.previous').css('display','inline-block');
	$(this).find('img.hover').css('display','none');
});

/*菜品类型改变编号改变*/

$('#atype').change(function(){
	var type = $(this).val();
	var area = "";
	if(type == '时令菜')
		area = '0';
	if(type == '烧卤冷味')
		area = '1';
	if(type == '秦淮小厨')
		area = '2';
	if(type == '传家煲')
		area = '3';
	if (type == '主食')
		area = '4';
	if(type == '金陵什锦')
		area = '5';
	if (type == '煎炸小吃')
		area = '6';
	if(type == '酒水饮料')
		area = '7';

	/*自动生成编号*/
	autoID(area);
	$('#cookarea').text(area);

});


$('#dishesImage').change(function(){
	var imgval = $(this).val();
	var img = imgval.split('\\')[2];
	imgval = './dishes/'+ img;
	$('.changeImg').find('img').attr('src',imgval);
	$('.imgurl').val(img);

});
$('#adishImg').change(function(){
	var imgval = $(this).val();
	var img = imgval.split('\\')[2];
	imgval = './dishes/'+ img;
	$('.addpic').find('img').attr('src',imgval);
	
});



/*修改*/
/*var menu = {
	type:'',
	dishesID:'',
	dishName:'',
	taste:'',
	dishesType:'',
	price:'',
	introduction:'',
	image:''
}
$('.tablelist').find('button').click(function(){
	var menus = new Object();
	menus.type = 'menu';
	menus.dishesID = $(this).parent().prev().prev().prev().prev().prev().prev().prev().find('input').val();
	menus.dishName = $(this).parent().prev().prev().prev().prev().prev().prev().find('input').val();
	menus.taste = $(this).parent().prev().prev().prev().prev().prev().find('input').val();
	menus.dishesType = $(this).parent().prev().prev().prev().prev().find('input').val();
	menus.price = $(this).parent().prev().prev().prev().find('input').val();
	menus.introduction = $(this).parent().prev().prev().find('textarea').val();
	menus.image = $(this).parent().prev().find('input.imgurl').val();
	var manage = JSON.stringify(menus);
	$.ajaxSetup({
        cache:false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8"
      });
	$.ajax({
		url:"./changeTable.php",
		type:"POST",
		data:{manage:manage},
		success:function(data){
			alert(data);
			location.reload();
					
		}
	});
	
})*/

