<!DOCTYPE html>
<html>
<head>
	<title>MyStyle</title>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" type="text/css" href="./css/main.css">
	<link rel="stylesheet" type="text/css" href="./css/left.css">
	<script type="text/javascript" src="./js/jquery-1.8.3.min.js"></script>
</head>
<!-- 连接数据库test中menu表 -->


<body>
<?php
  $mysqli = mysqli_connect('127.0.0.1','root','root','test');
?>
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
            <!-- <li>欢迎来到桔子酒店</li>
            <li>热烈祝贺王先生和杜小姐新婚快乐</li>
            <li>热烈祝贺王琦山小宝宝1周年快乐</li> -->
          
          </ul>
        </div>
        <div id="demo2"></div>
      </div>
      </div>
    </div>
	<div class="main">
		<div class="mainleft">
			<div class="banner seatBanner">
				<div>
					<ul>
						<li class="meunSelect"><a href="main.php">菜谱</a></li>
						<!-- <li class="payMoney"><a href='pay.php'>结算</a></li>
						<li class="chooseS"><a href="seat.php">选座</a></li> -->
            <li class="chooseS"><a href="left.php">留言</a></li>
					</ul>		
				</div>		
			</div>
		</div>
		<div class="right seatRight" >
			<div class="header">
				<p class="time"></p>
				<a class="load" title="用户登录" href="load.php"><img src="./images/load1.svg"></a>

			</div>
			<div class="seatCont">
        <h1 class="leftH1">留言</h1>
				<div class="wrap">
                <div id="msgBox">
                  <form id="insertLeft" action="add.php" method="post" >
                    <h2>有什么想说的</h2>
                    <div>
                      <input type="text" name="infor" value="left" style="display:none" />
                      <label for="userName">联系方式：</label><input id="userName" name="leftName" class="f-text" value="" />
                      <p id="face">
                        <span>头像：</span>
                        <img src="images/g1.jpg" class="current" />
                        <img src="images/b1.jpg" />
                        <img src="images/g2.jpg" />
                        <img src="images/b2.jpg" />
                        <img src="images/g3.jpg" />
                        <img src="images/b3.jpg" />
                        <img src="images/g4.jpg" />
                        <img src="images/b4.jpg" />
                        <input type="text" name="leftImg" id="leftImg" value="images/g1.jpg" />
                      </p>
                    </div>
                    <div><textarea id="conBox" name="leftMain" class="f-text"></textarea></div>
                    <div class="tr">
                      <p>
                        <input type="text" id="leftTime" name="leftTime" value="" />
                        <span class="countTxt">还能输入</span><strong class="maxNum">140</strong><span>个字</span>
                        <input class="btn btn-4 btn-4a icon-arrow-right" id="sendBtn" type="submit" value="提交"  />
                      </p>
                    </div>
                  </form>
                  <div class="list">
                    <h3><span>大家在说</span></h3>
                    <ul>
                      <?php
                        $sql = "select * from cookLeft where returnID is Null";
                        $result = $mysqli->query($sql);
                        while($row = $result->fetch_assoc()){
                           $sql1 = "select * from cookLeft where returnID='".$row['leftID']."'";
                           $result1 = $mysqli->query($sql1);
                           $conn = mysqli_num_rows($result1);
                           echo "<li>";
                           echo "<div class='userPic'>";
                           echo "<img src='".$row['img']."'/>";
                           echo "</div>";
                           echo "<div class='content2'>";
                           echo "<div class='leftcont'>";
                           echo "<div class='userName'>";
                           $tel = $row['tel'];
                           $telStart =substr($row['tel'], 0,3);
                           $telEnd = substr($row['tel'], 8,3);
                           echo "<p>".$telStart."***".$telEnd."</p>";
                           echo "</div>";
                           echo "<div class='msgInfo'>";
                           echo "<p>".$row['cont']."</p>";
                           echo "</div>";
                           echo "</div>";
                           echo "<div class='return'>";
                           if($conn>=1){
                            echo "<span style='color:#f6ac49'>商家回复：</span>";
                           }
                           while($row1 = $result1->fetch_assoc()){
                            echo "<p>".$row1['cont']."</p>";
                           }
                           
                           echo "</div>";
                           echo "</div>";
                           echo "</li>";
                        }
                      ?>
                    </ul>
                  </div>  
                </div> 
            </div>


			</div>	
		</div>
		<div class="clear"></div>
	</div>
	<div class="bg"></div>
	
</div>

<script type="text/javascript" src="./js/left.js"></script>

</body>
</html>