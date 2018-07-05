<?php
  $mysqli = mysqli_connect("127.0.0.1","root","root","test");
  $use = $_POST['username'];
  $pwd = $_POST['pwd'];
  $sql = "select * from orderAdmin where username='".$use."' AND pwd='".$pwd."'";
  
  $result2 = $mysqli->query($sql);
  $rowcount=mysqli_num_rows($result2);
  if($rowcount>0){
    header("location:index.php");
  }else{
    header("location:load.php");
    
  }
  $mysqli->close();
  
?>

