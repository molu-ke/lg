<?php
require_once("00-init.php");
$sql="select * from lg_mp3 limit 0,7";
$result=mysqli_query($conn,$sql);
$rowList=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rowList);
?>