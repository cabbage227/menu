/*文字滚动*/
var demo = document.getElementById("demo");
var demo1 = document.getElementById("demo1");
var demo2 = document.getElementById("demo2");
demo2.innerHTML=document.getElementById("demo1").innerHTML;
function Marquee(){
  if(demo.scrollLeft-demo2.offsetWidth>=0){
    demo.scrollLeft-=demo1.offsetWidth;
  }
  else{
  demo.scrollLeft++;
  }
}
var myvar=setInterval(Marquee,40);
demo.onmouseout=function (){myvar=setInterval(Marquee,40);}
demo.onmouseover=function(){clearInterval(myvar);}


$('.meunSelect').find('ul').find('li').find('a').mouseover(function(){
	$(this).find('img.1').css('display','none');
	$(this).find('img.hoverr').css('display','inline-block');
});
$('.meunSelect').find('ul').find('li').find('a').mouseout(function(){
	$(this).find('img.1').css('display','inline-block');
	$(this).find('img.hoverr').css('display','none');
})


/*点击图片，出现介绍*/

$('.food').find('ul').find('li').find('img').click(function(){
	$('.bg').css('display','block');
	var name = $(this).next('div').find('h1').text();
	var introh = $('.introduction').find('div').find('h1');
	introh.text(name);

	var price = $(this).next('div').find('p').text();
	var introp = $('.introduction').find('div').find('p');
	//introp.text(price);

	var picture = $(this).attr('src');
	var intropic = $('.introduction').find('img.foodimg');
	intropic.attr('src',picture);
	
	var intro = $(this).next('div').find('span').text();
	console.log(intro);
	var introCont = $('.introduction').find('div.detail').find('div');
	introCont.text(intro);

	/*介绍出现*/
	$('.introduction').css('display','block');

});
/*判断购物车是否为空*/
function changee(a){
	var list = $('.m-sidebar').find('ul').find('li');
	
	/*结算*/
	if(a==1){
		if(list.length>0){
			$('.pay').css({
				'background':'rgb(6, 217, 149)',
				'font-size':'18px',
				'font-weight':'600'
			});
			$('.pay').attr('class','pay gotoPay');
			$('.shoping').css('background','#000');
			$('#shopcar').css('color','#999');
			$('#end').css({'background':'url(./images/car3.svg)',
							'background-size':'20px 20px'});
			$('.pay').text('去 结 算 >');
		}
	}
	/*购物车为空*/
	if(a==2){
		if(list.length==0){
			$('.pay').css({
				'background':'#251f1f',
				'font-size':'16px',
				'font-weight':'500'
			});
			$('.pay').removeClass('gotoPay');
			$('.shoping').css('background','#f1caca');
			$('#shopcar').css('color','#000');
			$('#end').css({'background':'url(./images/car1.svg)',
							'background-size':'20px 20px'});
			$('.pay').text('购物车为空');
			$('.total').find('span').remove();
			$('.total').html(' ');
		}
	}
}

/*关闭介绍*/
$('.close').find('img').click(function(){
	$('.introduction').css('display','none');
	$('.bg').css('display','none');
});
/*加入购物车*/
$('.m-tip').click(function(){
	var tableIdd = $('#tt').text();
	if(tableIdd.length>5){ alert("请先选择座位！！！");}
	else{

		var cont = $('.m-sidebar').find('ul');
		var li = document.createElement('li');
		var nameP = document.createElement('p');
		var countDiv = document.createElement('div');
		var price = document.createElement('p');
		var spanP = document.createElement('span');

		cont.append(li);

		li.append(nameP);

		li.append(countDiv);

		li.append(price);
		li.append(spanP);	

		var buttonMin = document.createElement('button');
		countDiv.append(buttonMin);
		var inputC = document.createElement('input');
		countDiv.append(inputC);
		$(inputC).val('1');
		var buttonMax = document.createElement('button');
		countDiv.append(buttonMax);
		$(nameP).attr('class','joinName');
		$(countDiv).attr('class','counter');
		$(price).attr('class','shopPrice');
		$(buttonMin).text('-');
		$(buttonMin).attr('class','buttonMin');
		$(buttonMax).text('+');
		$(buttonMax).attr('class','buttonMax');
		/*显示名字*/
		var name = $(this).prev().prev().prev().text();
		$(nameP).text(name);
		/*显示价格*/
		var pric = $(this).prev().prev().text();
		$(price).text(pric);
		$(spanP).text(pric);
		allmoney();

		changee(1);
		/*记录购物车的数量*/
	}
	

});





/*加入购物车后按‘+’数目增加*/
/*
注意：在用append插入元素不能绑定事件，由于事件冒泡，
解决方法，用on来绑定。
*/
$(document).on("click",".buttonMax",function(){
	var inputC = $(this).prev().val();
	inputC++;
	$(this).prev().val(inputC);
	var onePrice = $(this).parent().next().next().text();
	onePrice = onePrice.split('￥')[1];
	var allPrice = (onePrice-0)*(inputC-0);
	$(this).parent().next().text('￥'+allPrice);
	allmoney();
});
$(document).on('click','.buttonMin',function(){
	var inputC = $(this).next().val();
	inputC = inputC-1;
	if(inputC==0){
		$(this).parent().parent().remove();
		/*判断购物车是否为空*/
		changee(2);
	}
	$(this).next().val(inputC);
	var onePrice = $(this).parent().next().next().text();
	onePrice = onePrice.split('￥')[1];
	var allPrice = (onePrice-0)*(inputC-0);
	$(this).parent().next().text('￥'+allPrice);
	allmoney();
});


/*计算总价*/
function allmoney(){
	var allP = $('.shopPrice');
	var sum = 0;

	for(var i=0;i<allP.length;i++){		
		var index = $(allP[i]).text().split('￥')[1];
		sum += (index-0);
	}
	$('.total').html('<span id="note">￥</span>'+sum);
}


/*时间*/
var t = null;
t = setTimeout(time,1000);
function time(){
	clearTimeout(t);
	var dt = new Date();
	var y = dt.getFullYear();
	var mon = dt.getMonth()+1;
	var d = dt.getDate();
	var h = dt.getHours();
	if(h<10) h='0'+h;
	var m = dt.getMinutes();
	if(m<10) m = '0' + m;
	var s = dt.getSeconds();
	if(s<10) s = '0' + s;
	$('.time').text(y+'/'+mon+'/'+d+' '+h+':'+m+':'+s);
	t = setTimeout(time,1000);
}


/*菜单折叠*/
	$('.meunSelect').on('click',function(){
		$(this).find('ul').slideToggle();    
	});


/*去支付*/
	$(document).on('click','.gotoPay',function(){
		$('.payAll').css('display','block');
		$('.bg').css('display','block');
		var allM = $('.total').text();
		$('#payMoney').text(allM);
		/*显示订单号*/
		var mydate = new Date();
		var myYear = mydate.getFullYear();
		var myMonth = mydate.getMonth()+1;
		if(myMonth<10) myMonth='0'+myMonth;
		var myDay = mydate.getDate();
		if(myDay<10) myDay='0'+myDay;
		var myHour = mydate.getHours();
		if(myHour<10) myHour='0'+myHour;
		var myMin = mydate.getMinutes();
		if(myMin<10) myMin='0'+myMin;
		var mySecond = mydate.getSeconds();
		if(mySecond<10) mySecond='0'+mySecond;
		/*拼接成订单号*/
		var orderId =''+myYear+myMonth+myDay+myHour+myMin+mySecond+'0';
		$('#padId').text(orderId);
		gotoPayAll();
	});
	$('.close').find('img').click(function(){
		$('.payAll').css('display','none');
		$('.payList').find('table').remove();
		$('.bg').css('display','none');
	});

	/*菜单信息显示在结算中*/
	function gotoPayAll(){
		var listMeun = $('.m-sidebar').find('ul').find('li');
		var table= document.createElement('table');
		var payList = $('.payList');
		payList.append(table);
		var tr1 = document.createElement('tr');
		table.append(tr1);
		var th1 = document.createElement('th');
		$(th1).text('序号');
		tr1.append(th1);

		var th2 = document.createElement('th');
		$(th2).text('菜名');
		tr1.append(th2);

		var th3 = document.createElement('th');
		$(th3).text('单价');
		tr1.append(th3);

		var th4 = document.createElement('th');
		$(th4).text('数量');
		tr1.append(th4);

		var th5 = document.createElement('th');
		$(th5).text('备注');
		tr1.append(th5);

		var th6 = document.createElement('th');
		$(th6).text('总价');
		tr1.append(th6);



		for(var i=0;i<listMeun.length;i++){
			var tr = document.createElement('tr');
			table.append(tr);
			var td1 = document.createElement('td');
			$(td1).text(i+1);
			tr.append(td1);

			var dishesname = $(listMeun[i]).find('p.joinName').text();
			var td2 = document.createElement('td');
			$(td2).text(dishesname);
			tr.append(td2);

			var td3 = document.createElement('td');
			var oneP = $(listMeun[i]).find('span').text();
			$(td3).text(oneP);
			tr.append(td3);

			var td4 = document.createElement('td');
			var countt = $(listMeun[i]).find('div.counter').find('input').val();
			$(td4).text(countt);
			tr.append(td4);

			var td5 = document.createElement('td');
			tr.append(td5);
			var input = document.createElement('input');
			td5.append(input);

			var td6 = document.createElement('td');
			var total = $(listMeun[i]).find('p.shopPrice').text();
			$(td6).text(total);
			tr.append(td6);

		}
	}

var menuObj = {
	payID:'',
	tableID:'',
	xuhao:'',
	name1:'',
	price:'',
	number:'',
	note:'',
	total:''
};
/*弹出成功*/
	$('#submitMenu').on('click',function(){
		var tr = $('.payList').find('table').find('tr');
		/*创建一个数组来保存传送的json数据*/
		var a = new Array();
		for(var i=1;i<tr.length;i++){
			var obj = new Object();
			var tds = $(tr[i]).find('td');
			obj.payID = $.trim($('#padId').text());
			obj.tableID =$.trim($('#tablee').text());
			obj.xuhao = $.trim($(tds[0]).text());
			obj.name1 = $.trim($(tds[1]).text());
			obj.price = $(tds[2]).text().split('￥')[1];
			obj.number = $.trim($(tds[3]).text());
			obj.note = $.trim($(tds[4]).find('input').val());
			obj.total = $(tds[5]).text().split('￥')[1];
			a.push(obj);
		}
		/*格式化a，将a格式化为JSON数据*/
		var oobj = JSON.stringify(a);
		$.ajaxSetup({
        	cache:false,
        	contentType : "application/x-www-form-urlencoded; charset=utf-8"
      	});
		$.ajax({
			url:"submitMenu.php",
			type:"POST",
			data:{oobj:oobj},
			success:function(data){
				console.log(data);
				alert('111订餐成功，请耐心等待，我们正在为您准备！');
				
			}
		})
		
		
	})


/*seat.php*/
/*点击座位在输入框显示*/
$('.hall-room').find('p').click(function(){
	var id = $(this).text();
	var seatID = id.substring(0,4);
	var isEmpty = id.substring(4,5);
	if(isEmpty == 1){
		alert('该作为正在使用，请重新选择！！！');
	}
	else
		$('.chooseSeat').find('input').val(seatID);
});
/*提交作为后提醒点菜*/
$('.chooseSeat').find('button').click(function(){
	var mmy = new Object();
	mmy.type = "click";
	mmy.index = $(this).prev().val();
	var wwid = JSON.stringify(mmy);
	$.ajaxSetup({
        cache:false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8"
      });
	$.ajax({
		url:"deleteDis.php",
		type:"POST",
		data:{wwid:wwid},
		success:function(msg){
			alert(msg);
			location.reload();
			
		}
	});
	/*var seat = $(this).prev().val();
	if(seat=='')
		alert('座位不能为空！！！');
	else
		alert('选座成功，您的座位是：'+seat+'。请尽情享用！！！！');*/

});





/*判断作为是否为空*/
$(document).ready(function(){
	var hallSeat = $('.hall-room').find('p');
	for(var i=0;i<hallSeat.length;i++){
		var isEmpty = $(hallSeat[i]).find('span').text();

		/*表示不为空*/
		if(isEmpty == 1){
			$(hallSeat[i]).css('background','rgba(255,174,201,0.8)');
		}
		/*表示为空*/
		if(isEmpty == 0){
			$(hallSeat[i]).css('background','rgba(239,228,176,0.8)');
		}
	}
	
});


/*pay.php*/
/*搜索订单付款*/
var myobj = {
	index:"",
	type:""
}
$('.paySearch').find('button').click(function(){
	var mmy = new Object();
	mmy.type = "search";
	mmy.index = $(this).prev().val();
	var wwid = JSON.stringify(mmy);
	$.ajaxSetup({
        cache:false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8"
      });
	$.ajax({
		url:"deleteDis.php",
		type:"POST",
		data:{wwid:wwid},
		success:function(msg){
			var searchValue = $('.paySearch').find('input').val();
			$('#paytableID').text(searchValue);		

			$('.payLists').html(msg);
			var a = $('#payIdAll').text();
			$('#payIdAlls').text(a);
			var b = $('#allprices').text();
			$('#allpricess').text(b);


			var hight = $('.introduction').height();
			$('.introduction').css('margin-top',-hight/2+'px')
			$('.introduction').css('display','block');
			$('.bg').css('display','block');
			/*alert('111');
			console.log('111');*/
		}
	});
});

/*支付完成，释放座位*/


$('#payrel').click(function(){
	var my = new Object();
	my.index = $('#paytableID').text();
	my.type = "release";
	var wwid = JSON.stringify(my);

	
	$.ajaxSetup({
        cache:false,
        contentType : "application/x-www-form-urlencoded; charset=utf-8"
      });
	$.ajax({
		url:"deleteDis.php",
		type:"POST",
		data:{wwid:wwid},
		success:function(msg){
			alert(msg);
			location.reload();
			
		}
	});
});



