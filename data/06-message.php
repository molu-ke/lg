<?php
require_once("00-init.php");
#综合
$sql="select * from lg_message order by mtime desc limit 0,7";
$reqult=mysqli_query($conn,$sql);
$comprehensive=mysqli_fetch_all($reqult,MYSQLI_ASSOC);
#新闻
$sql="select * from lg_message where category='新闻' order by mtime desc limit 0,7";
$reqult=mysqli_query($conn,$sql);
$news=mysqli_fetch_all($reqult,MYSQLI_ASSOC);
#公告
$sql="select * from lg_message where category='公告' order by mtime desc limit 0,7";
$reqult=mysqli_query($conn,$sql);
$notice=mysqli_fetch_all($reqult,MYSQLI_ASSOC);
#媒体
$sql="select * from lg_message where category='媒体' order by mtime desc limit 0,7";
$reqult=mysqli_query($conn,$sql);
$media=mysqli_fetch_all($reqult,MYSQLI_ASSOC);
#推荐
$sql="select * from lg_message where category='顶部' order by mtime desc limit 0,1";
$reqult=mysqli_query($conn,$sql);
$firstTitle=mysqli_fetch_all($reqult,MYSQLI_ASSOC);
#获奖公告
$sql="select * from lg_message where category='尾部' order by mtime desc limit 0,15";
$reqult=mysqli_query($conn,$sql);
$lastTitle=mysqli_fetch_all($reqult,MYSQLI_ASSOC);
$output = ["comprehensive"=>$comprehensive,     
            "news"=>$news,        
            "notice"=>$notice,           
            "media"=>$media,          
            "firstTitle"=>$firstTitle, 
            "lastTitle"=>$lastTitle
            ];
echo json_encode($output);
?>