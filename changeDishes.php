<?php
	$mysqli = mysqli_connect('127.0.0.1','root','root','test');
	$dishesID = $_POST['dishesID'];
	$dishesName = $_POST['dishesName'];
	$dishesTaste = $_POST['dishesTaste'];
	$dishesType = $_POST['dishesType'];
	
	$dishesIntro = $_POST['dishesIntro'];
	$dishesImage = $_POST['dishesImage'];
	$sql = "update menu set dishName='$dishesName',taste='$dishesTaste',dishesType='$dishesType',introduction='$dishesIntro',image='$dishesImage' where dishesID='$dishesID'";

	mysqli_query($mysqli,$sql);
	header("location:index.php");
	echo $sql;
?>
