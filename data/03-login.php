<?php
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
require_once("00-init.php");
$sql="select * from lg_user where uname='$uname' and upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$rowAll=mysqli_fetch_assoc($result);
if($rowAll==null){
	echo '{"code":-1,"msg":"该用户不存在或密码错误,请更换账户"}';
}else{
	$uid=$rowAll["uid"];
	echo '{"code":1,"uid":'.$uid.'}';
}
?>