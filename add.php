<?php
	$mysqli = mysqli_connect('127.0.0.1','root','root','test');
	$infor = $_POST['infor'];

	
	/*添加留言*/
	if($infor == "left"){
		$name = $_POST['leftName'];
		$img = $_POST['leftImg'];
		$cont = $_POST['leftMain'];
		$timezone = "PRC";
 		if(function_exists('date_default_timezone_set')){
    		date_default_timezone_set($timezone);
 		}
		$date = date("Y/m/d H:i:s");
		if(preg_match("/^1[34578]\d{9}$/", $name) && $cont!=null){
			$sql = "insert into cookLeft(tel,img,cont,date) values('".$name."','".$img."','".$cont."','".$date."')";
			mysqli_query($mysqli,$sql);
		}
		
		$mysqli->close();
		header("location:left.php");

	}

	/*添加回复*/
	if($infor == "returnLeft"){
		$returnID = $_POST['sayID'];
		$cont = $_POST['leftsay'];
		$tel = "66654314";
		$sql = "insert into cookleft(tel,cont,returnID) values('$tel','$cont','$returnID')";
		mysqli_query($mysqli,$sql);
		echo $sql;
		$mysqli->close();
		header("location:leftManage.php");
	}


	/*添加菜品*/
	if($infor == "menu"){
		$atype = $_POST['atype'];
		$adishID = $_POST['adishID'];
		$adishName = $_POST['adishName'];
		$ataste = $_POST['ataste'];
		$adishprice = $_POST['adishprice'];
		$adishIntro = $_POST['adishIntro'];
		$adishImg = $_POST['adishImg'];
		$sql = "insert into menu values('".$adishID."','".$adishName."','".$ataste."','".$atype."',0,'".$adishIntro."','".$adishImg."')";
		mysqli_query($mysqli,$sql);
		$mysqli->close();
		header("location:index.php");

	}



?>