<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>MyStyle</title>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" type="text/css" href="./css/main.css">
	<script type="text/javascript" src="./js/jquery-1.8.3.min.js"></script>
</head>
<!-- 连接数据库test中menu表 -->
<?php
	$mysqli = mysqli_connect("127.0.0.1","root","root","test");
?>

<body>
<div id="tt" style="display:none"><?php
	$tableId = $_SESSION['seatID'];
	echo $tableId;
?></div>
<div class="cont">
	<img class="blur" src="./images/3.jpg">
	<div class="hotel">
		<div class="logo">
			<img src="./images/h1.png">
			你的随身小厨房
		</div>
		<div id="demo" class="qimo8">
		<div class="qimo">
		    <div id="demo1">
		      <ul>
		      
		      </ul>
		    </div>
	    	<div id="demo2"></div>
	  	</div>
	  	</div>
  	</div>

	<div class="main">
		<div class="mainleft">
			<div class="banner">
				<div>
					<ul>
						<li class="meunSelect">菜单
							<ul>
								<li><a href="#shilingcai"><img class="1" src="./images/vag.svg"><img class="hoverr" src="./images/vag1.svg"/>荤菜</a></li>
								<li><a href="#shaolu"><img class="1" src="./images/leng1.svg"><img class="hoverr" src="./images/leng.svg">素菜</a></li>
								<li><a href="#xiaochu"><img class="1" src="./images/xiaochu.svg" /><img class="hoverr" src="./images/xiaochu1.svg" /> 秦淮小厨</a></li>
								<li><a href="#bao"><img class="1" src="./images/bao.svg"><img class="hoverr" src="./images/bao1.svg">传家煲</a></li>
								<li><a href="#mainfood"><img class="1" src="./images/main1.svg"><img class="hoverr" src="./images/main.svg"> 主 食</a></li>
								<li><a href="#shenjin"><img class="1" src="./images/shenjin.svg"><img class="hoverr" src="./images/shenjin1.svg"> 金陵什锦</a></li>
								<li><a href="#xiaochi"><img class="1" src="./images/xiaochi1.svg"><img class="hoverr" src="./images/xiaochi.svg"> 煎炸小吃</a></li>
								<li><a href="#drink"><img class="1" src="./images/drink.svg"><img class="hoverr" src="./images/drink1.svg"> 酒水饮料</a></li>
							</ul>
						</li>
					
						<li class="chooseS"><a href="left.php">留言</a></li>
					</ul>
				
				</div>		
			</div>

		</div>
		<div class="right" >
			<div class="header">
				<p class="time"></p>
				<a class="load" title="用户登录" href="load.php"><img src="./images/load1.svg"></a>
			</div>
			<div class="mainCont">
			
			
					<div class="clear"></div>
				</ul> 
			</div> -->
			<div id="shilingcai" class="food">
				<p class="foodname">荤菜</p>
				<ul>
					<?php
						$sql = "select * from menu where dishesType='时令菜' AND dishName not in(select dishName from discount)";
						$result = $mysqli->query($sql);
						while($row = $result->fetch_assoc()){
							echo "<li>";
							echo "<img src='./dishes/".$row['image']."'>";
							echo "<div>";
							echo "<h1>".$row['dishName']."</h1>";
							echo "<p>口味：".$row['taste']."</p>";
							echo "<span>".$row['introduction']."</span>";
							
							echo "</div>";
							echo "</li>";
						}
					?>
					<div class="clear"></div>
				</ul> 
			</div>
			<div id="shaolu" class="food">
				<p class="foodname">素菜</p>
				<ul>
					<?php
						$sql = "select * from menu where dishesType='烧卤冷味' AND dishName not in(select dishName from discount)";
						$result = $mysqli->query($sql);
						while($row = $result->fetch_assoc()){
							echo "<li>";
							echo "<img src='./dishes/".$row['image']."'>";
							echo "<div>";
							echo "<h1>".$row['dishName']."</h1>";
							echo "<p>￥".$row['price']."</p>";
							echo "<span>".$row['introduction']."</span>";
							
							echo "</div>";
							echo "</li>";
						}
					?>
					<div class="clear"></div>
				</ul>
			</div>
			
					<div class="clear"></div>
				</ul>
			</div> -->
			</div>	
		</div>
		<div class="clear"></div>
	</div>
	<div class="bg"></div>
	<div class="introduction">
		<div class="close">
			<img src="./images/3.gif">
		</div>
		<img class="foodimg" src="">
		<div class="detail">
			<h1></h1>
			<div></div>
			<!-- <p>￥34</p> -->
		</div>
	</div>
	
</div>
<script type="text/javascript" src="./js/main.js"></script>
<script src="ogLaVp_data/requestAnimationFrame.js"></script>
<script src="ogLaVp_data/jquery_002.js"></script> 
<script src="ogLaVp_data/stopExecutionOnTimeout.js"></script> 
<script>

 $(function () {
    var offset=$('#end').offset();
    $(window).scrollTop(0);
    $(window).resize(site);
    function site() {
        $(window).scrollTop(0);
        offset=$('#end').offset();
    }
    $('.m-tip').on('click',function () {
    	var tableIdd = $('#tt').text();
		if(tableIdd.length<5){
        	var addcar=$(this);
        	var scrollTop=$(window).scrollTop(); 
        	var flyer = $('<img class="u-flyer" src="ogLaVp_data/profile-80_1.jpg"/>');
        	flyer.fly({
           	 	start:{
                	left:event.pageX,
                	top:event.pageY-scrollTop
            	},
            	end:{
                	left:offset.left,
                	top:offset.top,
                	width:0,
                	height:0
            	}

        	})
    	
		}
	})

})
</script> 



</body>
</html>