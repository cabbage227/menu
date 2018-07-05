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
$link=mysqli_connect('127.0.0.1','root','root','test');
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
          <div class="dishManager">
            <h1>菜品管理</h1>
            <p>添加菜品信息</p>
          </div>
					<div class="soup">						
						<div class="soupCont allCont">
              <h3>荤菜</h3>
							<table class="table soupTable">
        						<thead>
          							<tr>
             							<th width='50'>菜单编号</th>
            							<th>菜名</th>
            							<th width='25'width='25'>口味</th>
            							<th width='50'>菜的种类</th>
            						
            							<th>介绍</th>
            							<th>图片</th>
            							<th width='25'>操作</th>
          							</tr>
        						</thead>
        						<tbody>
                        <?php
                          $sql = "select * from menu where dishesType='时令菜'";
                          $result = $link->query($sql);
                          while($row=$result->fetch_assoc()){
                            echo "<tr>";
                            echo "<td width='50'>".$row["dishesID"]."</td>";
                            echo "<td>".$row['dishName']." </td>";  //显示姓名
                            echo "<td width='25'>".$row['taste']." </td>";
                            echo "<td width='50'>".$row['dishesType']." </td>"; 
                      
                            echo "<td>".$row['introduction']." </td>";
                            echo "<td><img src='./dishes/".$row['image']."' /></td>";
                            echo "<td width='25'><p class='changee'>修改</p>
                            <p class='deletee'>删除</p></td>";
                            echo "</tr>";
                          }

                        ?>
        						</tbody>
      						</table>
						</div>
					</div>
          <div class="soup">
            <div class="soupCont allCont">
              <h3>素菜</h3>
              <table class="table soupTable">
                    <thead>
                        <tr>
                          <th width='50'>菜单编号</th>
                          <th>菜名</th>
                          <th width='25'width='25'>口味</th>
                          <th width='50'>菜的种类</th>
                          
                          <th>介绍</th>
                          <th>图片</th>
                          <th width='25'>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                          $sql = "select * from menu where dishesType='烧卤冷味'";
                          $result = $link->query($sql);
                          while($row=$result->fetch_assoc()){
                            echo "<tr>";
                            echo "<td width='50'>".$row["dishesID"]."</td>";
                            echo "<td>".$row['dishName']." </td>"; 
                            echo "<td width='25'>".$row['taste']." </td>";
                            echo "<td width='50'>".$row['dishesType']." </td>"; 
                           
                            echo "<td>".$row['introduction']." </td>";
                            echo "<td><img src='./dishes/".$row['image']."' /></td>";
                            echo "<td width='25'><p class='changee'>修改</p>
                            <p class='deletee'>删除</p></td>";
                            echo "</tr>";
                          }
                        ?>
                    </tbody>
                  </table>
            </div>
          </div>

				</div>
			</div>
		</div>
	</div>
  <div id="HBox" class="changeDish">
      <div class="close1"></div>   
      <h1>菜品信息修改</h1>
      <form method="post" action="changeDishes.php">
        <ul class="tablelist">
          <li>
            <label for="dishesID">菜品编号：</label><input readonly="readonly" id="dishesID" name="dishesID" type="text" />
          </li>
          <li>
            <label for="dishesName">菜  名：</label><input type="text" id="dishesName" name="dishesName" />
          </li>
          <li>
            <label for="dishesTaste">口  味：</label><input type="text" id="dishesTaste" name="dishesTaste" />
          </li>
          <li>
            <label for="dishesType">种 类：</label><input readonly="readonly" type="text" id="dishesType" name="dishesType" />
          </li>
          <li style="display:none">
            <label for="dishesPrice">价 格：</label>
            
            <input id="dishesPrice" name="dishesPrice" type="text" />          
          </li>
          <li>
            <label for="dishesIntro">介 绍：</label><textarea id="dishesIntro" name="dishesIntro" type="text" ></textarea>          
          </li>
           <li class="menuPic">
            <label for="dishesImage">图 片：</label><input id="dishesImage"  type="file" /> <div class="changeImg"><img src/></div>
            <input name="dishesImage" class="imgurl" style="display:none" />         
          </li>
          <li>
            <button>提交</button>
          </li>
        </ul>
      </form>
  </div>
  <div id="addDishInfor">
      <div class="close1"></div>   
      <h1>添加菜品</h1>
      <form method="post" action="add.php">
        <ul class="tablelist">
          <li style="display:none">
            <input type="text" name="infor" value="menu" />
          </li>
          <li>
            <label for="atype">菜品类型：</label>
            <select id="atype" name="atype">
              <option value="时令菜">荤菜</option>
              <option value="烧卤冷味">素菜</option>
            </select>
          </li>
          <li>
             菜品编号：<span id='cookarea'>0</span><input id="adishID" name="adishID" readonly="readonly" type="text" />
          </li>
          <li>
            <label for="adishName">菜 名：</label><input type="text" id="adishName" name="adishName" />
          </li>
          <li>
            <label for="ataste">口 味：</label><input type="text" id="ataste" name="ataste" />
          </li>
          <li style="display:none">
            <label for="adishprice">价 格：</label><input id="adishprice" name="adishprice" type="text" />          
          </li>
          <li class="textare">
            <label for="adishIntro">介 绍：</label><textarea id="adishIntro" name="adishIntro"></textarea>          
          </li>
          <li style="margin-top:10px;">
            <label for="adishImg">图 片：</label><input id="adishImg" name="adishImg" type="file" /> 
            <div class="addpic"><img src='./images/no1.png'/></div>
                  
          </li>
          <li>
            <button>提交</button>
          </li>
        </ul>
      </form>
  </div>
  <div class="bg"></div>
  <script type="text/javascript" src="./js/index.js"></script>
</body>
</html>