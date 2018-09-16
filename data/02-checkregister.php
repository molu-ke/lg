<?php
@$uname=$_REQUEST["uname"];
@$uemail=$_REQUEST["email"];
@$phone=$_REQUEST["phone"];
require_once("00-init.php");
if($uname!=null){
	$sql="select uname from lg_user where uname='$uname'";
}else if($uemail!=null){
	$sql="select uemail from lg_user where uemail='$uemail'";
}else if($phone!=null){
	$sql="select uphone from lg_user where uphone='$phone'";
}
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row==null){
	echo '{"code":1}';
}else{
	echo '{"code":-1}';
}
?>