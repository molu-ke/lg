<?php
require_once("00-init.php");
$sql="select * from lg_carousel limit 0,3";
$reqult=mysqli_query($conn,$sql);
$rowList=mysqli_fetch_all($reqult,MYSQL_ASSOC);
echo json_encode($rowList);
?>