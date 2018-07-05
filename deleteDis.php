<?php
	
	$data = $_POST['wwid'];
	$my=json_decode($data,TRUE);
	$mysqli = mysqli_connect('127.0.0.1','root','root','test');

	
	if($my['type']=='menu'){
		$sql="delete from menu where dishesID='".$my['index']."'";
		mysqli_query($mysqli,$sql);
		echo "删除成功！！！";
	}
	
	
	/*点击菜名显示添加框*/
	if($my['type'] == 'appearDiscount'){
		$sql = "select * from menu where dishName='".$my['index']."'";
		$result = $mysqli->query($sql);
		while($row = $result->fetch_assoc()){
			echo "<div class='appearCont'>";
			echo "<img src='./dishes/".$row['image']."'/>";
			echo "<div>";
			echo "<h1>".$row['dishName']."</h1>";
			echo "<p><span>类型：".$row['dishesType']."</span><span>口味：".$row['taste']."</span></p>";
			echo "<p>原价：￥".$row['price']."</p>";
			echo "<p><label for='nowPrice'>现价：￥</label><input id='nowPrice' type='text'/></p>";
			echo "<input class='add' type='button' value='添加'/>";
			echo "</div></div>";
		}
		
	}

	

	/*自动生成菜品编号*/
	if($my['type'] == 'menuID'){
		$sql = "select * from menu where dishesID like '".$my['index']."%' order by dishesID DESC limit 1";
		$result = $mysqli->query($sql);
		$row = mysqli_fetch_array($result);
		$dishesID = (string)$row['dishesID']+1;
		if($my['index'] == '0'){
			while(strlen($dishesID)<6)
				$dishesID='0'.$dishesID;
		}
		echo $dishesID;
	}


	$mysqli->close();
?>