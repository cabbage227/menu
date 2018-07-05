<!DOCTYPE html>
<html>
<head>
	<title>你的随身小厨房后台管理系统</title>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" type="text/css" href="./css/index.css">
  <script type="text/javascript" src="./js/jquery-1.8.3.min.js"></script>
</head>
<body>
<!-- 连接数据库 -->
<?php
$mysqli=mysqli_connect('127.0.0.1','root','root','test');
?>
	<div class="banner">
			<h1>你 的 随 身 小 厨 房 后 台 管 理 系 统</h1>
			<div class="back">
				<a href="main.php">退出</a>				
			</div>
	</div>
	<div class="all">
		
		<div class="main">
			<div class="list">
				<ul>
          			
					<li><a href="index.php"><img class="previous menuImg" src="./images/dish1.svg"><img class="hover menuImg" src="./images/dish.svg"><span>菜品管理</span></a></li>
					
				  <li><a href="leftManage.php"><img class="previous tableImg" src="./images/leftt.svg"><img class="hover tableImg" src="./images/leftt1.svg"><span>留言管理</span></a></li>
				</ul>
			</div>
			<div class="cont">
				<div class="graphs">
         			<div class="soup">
						<div class="addTable">
                			<h3>留言管理</h3>
                			
            			</div>
						<div class="allCont">
							<ul class="leftList">
								<?php			
									$sql = "select * from cookleft where img is not null";
									$result = $mysqli->query($sql);
									while($row = $result->fetch_assoc()){
										echo "<li class>";
										echo "<img src='".$row['img']."'/>";
										echo "<div class='leftContent'>";
										echo "<p class='tel'>".$row['tel']."</p>";
										echo "<p class='inside'>".$row['cont']."<p>";
										echo "<p class='delList'>回复</p>";
										echo "<p class='reback'>返回</p>";
										echo "</div>";

										echo "<div class='backLeft'>";
										echo "<form method='post' action='add.php'>";
										echo "<p style='display:none'>".$row['leftID']."</p>";
  										echo "<textarea name='leftsay'></textarea>";
  										echo "<input class='sayID' name='sayID' type='text' style='display:none' />";
  										echo "<input type='text' name='infor' value='returnLeft' style='display:none' />";
  										echo "<button>提交</button>";
  										echo "</form>";
  										echo "</div>";
  										echo "<div class='clear'></div>";
										echo "</li>";
									}
									
								?>
							</ul>
						
						</div>
					</div>
				

				</div>
			</div>
		</div>
	</div>
  
  
  <div class="bg"></div>
  <script type="text/javascript" src="./js/index.js"></script>
  <script type="text/javascript" src='./js/leftManage.js'> </script>
</body>
</html>