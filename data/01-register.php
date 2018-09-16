<?php
$n=$_REQUEST["uname"];
$pw=$_REQUEST["upwd"];
$e=$_REQUEST["email"];
$ph=$_REQUEST["uphone"];
require_once("00-init.php");
$sql="insert into lg_user values(null,'$n','$pw','$e','$ph')";
$result=mysqli_query($conn,$sql);
if($result){
	echo '{"code":1}';
}else{
	echo  '{"code":-1}';
}
?>