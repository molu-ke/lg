//头部
$(document).ready(function(){
	//(()=>{
		//video标签
		var HeadVideoEject=$(".headVideoEject")[0];
		//视频弹跳层div
		var pop=$(".pop");
		var videoPop=$(".video-pop");
		//点击时出现视频
		$("#headEject").on("click",function(e){
			e.preventDefault();
			$("#mask").show();
			pop.show();
			//让每次点击视频播放，都让视频重新开始播放
			HeadVideoEject.currentTime=0;
			HeadVideoEject.play();
			//播放时，暂停所有正在播放的音乐
			endMusicPlay();
		});
		$("#headCloseWindow").on("click",function(){
			$("#mask").hide();
			videoPop.hide();
			HeadVideoEject.pause();
		});
		//点击视频时开始或暂停
		$(".headVideoEject").on("click",function(){
			if(HeadVideoEject.paused){
				HeadVideoEject.play();
			}else{
				HeadVideoEject.pause();
			}
		});
	//})();
});


//01最新资讯
(()=>{
 //左边文字  JS
	/*$.ajax({
		type:"get",
		url:"data/06-message.php",
		success:function(data){
			
		},
		error:function(){
			alert("网络错误");
		}
	}).then((data)=>{*/
		var data={"comprehensive":[{"mid":"33","category":"\u5c3e\u90e8","title":"\u53f6\u592e**** \u7684\u51dd\u51b0\u6212\u6307 \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1508838400000","href":null},{"mid":"1","category":"\u65b0\u95fb","title":"10\u670819\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1508284800000","href":"#"},{"mid":"8","category":"\u516c\u544a","title":"10\u670819\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1508284800000","href":"#"},{"mid":"9","category":"\u516c\u544a","title":"10\u670812\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1507680000000","href":"#"},{"mid":"2","category":"\u65b0\u95fb","title":"10\u670812\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1506556800000","href":"#"},{"mid":"3","category":"\u65b0\u95fb","title":"9\u670828\u65e5\u5f00\u670d\u516c\u544a","mtime":"1506556800000","href":"#"},{"mid":"10","category":"\u516c\u544a","title":"9\u670828\u65e5\u5ef6\u8fdf\u5f00\u670d\u81f322:00","mtime":"1506556800000","href":"#"}],"news":[{"mid":"1","category":"\u65b0\u95fb","title":"10\u670819\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1508284800000","href":"#"},{"mid":"2","category":"\u65b0\u95fb","title":"10\u670812\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1506556800000","href":"#"},{"mid":"3","category":"\u65b0\u95fb","title":"9\u670828\u65e5\u5f00\u670d\u516c\u544a","mtime":"1506556800000","href":"#"},{"mid":"4","category":"\u65b0\u95fb","title":"9\u670828\u65e5\u5ef6\u8fdf\u5f00\u670d\u81f322:00","mtime":"1506470400000","href":"#"},{"mid":"5","category":"\u65b0\u95fb","title":"9\u670828\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1505865600000","href":"#"},{"mid":"6","category":"\u65b0\u95fb","title":"9\u670821\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1505865600000","href":"#"},{"mid":"7","category":"\u65b0\u95fb","title":"9\u67087\u65e5\u66f4\u65b0\u53ca\u65b0\u7248\u672c\u9884\u544a","mtime":"1504656000000","href":"#"}],"notice":[{"mid":"8","category":"\u516c\u544a","title":"10\u670819\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1508284800000","href":"#"},{"mid":"9","category":"\u516c\u544a","title":"10\u670812\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1507680000000","href":"#"},{"mid":"10","category":"\u516c\u544a","title":"9\u670828\u65e5\u5ef6\u8fdf\u5f00\u670d\u81f322:00","mtime":"1506556800000","href":"#"},{"mid":"11","category":"\u516c\u544a","title":"9\u670821\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1505865600000","href":"#"},{"mid":"12","category":"\u516c\u544a","title":"9\u67087\u65e5\u66f4\u65b0\u53ca\u65b0\u7248\u672c\u9884\u544a","mtime":"1504656000000","href":"#"},{"mid":"13","category":"\u516c\u544a","title":"8\u670831\u65e5\u66f4\u65b0\u516c\u544a","mtime":"1504051200000","href":"#"},{"mid":"14","category":"\u516c\u544a","title":"8\u670824\u65e5\u7ef4\u62a4\u66f4\u65b0\u516c\u544a","mtime":"1503446400000","href":"#"}],"media":[{"mid":"16","category":"\u5a92\u4f53","title":"\u817e\u8baf\u6e38\u620f\u8bc4\u6d4b\uff1a\u723d\u5230\u7206\u53c8\u8650\u5230\u54ed\u7684\u56fd\u4ea7\u52a8\u4f5c\u4f73\u4f5c","mtime":"1490313600000","href":"#"},{"mid":"17","category":"\u5a92\u4f53","title":"\u5173\u4e8e\u4e09\u6d4b\u4fdd\u9001\u8d44\u683c\u7684\u6fc0\u6d3b\u901a\u77e5","mtime":"1488844800000","href":"#"},{"mid":"18","category":"\u5a92\u4f53","title":"173\u72ec\u5bb6\u8bd5\u73a9\uff1a\u5b50\u5f39\u65f6\u95f4\u9006\u5929\u6539\u547d","mtime":"1478217600000","href":"#"},{"mid":"19","category":"\u5a92\u4f53","title":"\u7231\u73a9\u7f51\u8bc4\u6d4b\uff1a\u8d85\u5feb\u611f\u65e0\u9501\u5b9a\u7684\u52a8\u4f5c\u65b0\u6e38","mtime":"1478217600000","href":"#"},{"mid":"20","category":"\u5a92\u4f53","title":"\u5236\u4f5c\u4eba\u4e13\u8bbf\uff1a\u516c\u4f1a\u6218\u63d0\u4f9b\u4e0d\u4e00\u6837\u7684\u56e2\u961fPVP\u4f53\u9a8c","mtime":"1477440000000","href":"#"}],"firstTitle":[{"mid":"21","category":"\u9876\u90e8","title":"\u4e09\u77f3\u7cbe\u9009.\u54c1\u8d28\u6d74\u5dfe30\u5929\u5305\u9000\u6362","mtime":"1477440000000","href":"#"}],"lastTitle":[{"mid":"33","category":"\u5c3e\u90e8","title":"\u53f6\u592e**** \u7684\u51dd\u51b0\u6212\u6307 \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1508838400000","href":null},{"mid":"34","category":"\u5c3e\u90e8","title":"\u82e5\u95ee**** \u7684\u51dd\u51b0\u9879\u94fe \u88c5\u5907\u5347\u661f\u52306\u661f\u6210\u529f","mtime":"1500038400000","href":null},{"mid":"25","category":"\u5c3e\u90e8","title":"\u9171\u9171**** \u7684\u65ad\u6d6a\u8033\u73af \u88c5\u5907\u5347\u661f\u52306\u661f\u6210\u529f","mtime":"1498838400000","href":null},{"mid":"29","category":"\u5c3e\u90e8","title":"\u90a3\u4e00**** \u7684\u5fcd\u6b66\uff08\u8863\u670d\uff09 \u65f6\u88c5\u67d3\u8272\u6210\u529f","mtime":"1498238400000","href":null},{"mid":"28","category":"\u5c3e\u90e8","title":"\u5807\u5e74**** \u7684\u708e\u9b54\u6218\u9774 \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1498238400000","href":null},{"mid":"31","category":"\u5c3e\u90e8","title":"\u516d\u6708**** \u7684\u65ad\u6d6a\u9879\u94fe \u88c5\u5907\u5347\u661f\u52306\u661f\u6210\u529f","mtime":"1496638400000","href":null},{"mid":"24","category":"\u5c3e\u90e8","title":"\u51a5\u795e**** \u7684\u51dd\u51b0\u6212\u6307 \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1496246400000","href":null},{"mid":"23","category":"\u5c3e\u90e8","title":"\u82cd\u4e4b**** \u7684\u788e\u7389\u88e4\u5b50 \u6ce8\u7075\u523013","mtime":"1495929600000","href":null},{"mid":"26","category":"\u5c3e\u90e8","title":"\u94f6\u72d0**** \u7684\u51dd\u51b0\u624b\u956f \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1494838400000","href":null},{"mid":"27","category":"\u5c3e\u90e8","title":"\u79cb\u6708**** \u7684\u708e\u9b54\u62a4\u817f \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1493438400000","href":null},{"mid":"22","category":"\u5c3e\u90e8","title":"\u8352\u51c9**** \u7684\u51dd\u51b0\u9879\u94fe \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1490313600000","href":null},{"mid":"32","category":"\u5c3e\u90e8","title":"\u5bd2\u6885**** \u7684\u65ad\u6d6a\u8033\u73af \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1438334400000","href":null},{"mid":"36","category":"\u5c3e\u90e8","title":"\u7f18\u6765**** \u7684\u708e\u9b54\u62a4\u80a9 \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1418438400000","href":null},{"mid":"37","category":"\u5c3e\u90e8","title":"\u9171\u9171**** \u7684\u5f00\u5929\u9879\u94fe \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1418238400000","href":null},{"mid":"38","category":"\u5c3e\u90e8","title":"\u6c35\u591c**** \u7684\u708e\u9b54\u8170\u5e26 \u88c5\u5907\u6d17\u7ec3\u6210\u529f\u83b7\u5f97\u5c5e\u6027","mtime":"1413138400000","href":null}]}

		//推荐
		var html=`<a href="${data.firstTitle[0].href}">
						<b>${data.firstTitle[0].title}</b>
				  </a>`;
		$(".firstTitle").append(html);
		//获奖公告
		//滚动
		html="";
		var ltData=data.lastTitle;
		for(var i=0;i<ltData.length;i++){
			html+=`<li>${ltData[i].title}</li><br>`;
		}
		$(".roll").html(html);
		rollTop=0;
		setInterval(function(){
			if(rollTop==0){
				$(".roll").css("transition","1s");
			}
			rollTop-=35;
			if(rollTop<=-(35*ltData.length)){
				$(".roll").css("transition","none");
				rollTop=0;
			}
			$(".roll").css("top",rollTop+"px");
		},1500);
		//综合
		html="";
		var chData=data.comprehensive;
		for(var i=0;i<chData.length;i++){
			var time=timeForm(chData[i].mtime);
			html+=`<p>
								<a href='${chData[i].href}'>${chData[i].title}</a>
								<span>${time}</span>
							</p>`;
		}
		$(".comprehensive").html(html);
		//新闻
		html=""
		var nsData=data.news;
		for(var i=0;i<nsData.length;i++){
			var time=timeForm(nsData[i].mtime);
			html+=`<p><a href='${nsData[i].href}'>${nsData[i].title}</a><span>${time}</span></p>`;
		}
		$(".news").html(html);
		//公告
		html=""
		var neData=data.notice;
		for(var i=0;i<neData.length;i++){
			var time=timeForm(neData[i].mtime);
			html+=`<p><a href='${neData[i].href}'>${neData[i].title}</a><span>${time}</span></p>`;
		}
		$(".notice").html(html);
		//媒体
		html=""
		var maData=data.media;
		for(var i=0;i<maData.length;i++){
			var time=timeForm(maData[i].mtime);
			html+=`<p><a href='${maData[i].href}'>${maData[i].title}</a><span>${time}</span></p>`;
		}
		$(".media").html(html);
		//将时间从毫秒转化为2017-10-11的格式	
		function timeForm(mtime){
			var time=parseInt(mtime);
			time=new Date(time).toLocaleDateString().split("/");
			time[1]<10&&(time[1]="0"+time[1]);
			time[2]<10&&(time[2]="0"+time[2]);
			return time.join("-");
		}
		$(".written>.nav").on("click","li:not(:last-child)",function(){
			//消除所有样式
			$(".lineTitle").hide();
			$(".nav>li").removeClass("defalutStyle");
			//给选中的面板增加样式和显示
			$(".lineTitle")[$(this).index()].style.cssText="display:block";
			$(this).addClass("defalutStyle");
		});
	//});
 //轮播
	/*$.ajax({
		type:"get",
		url:"data/05-carouse.php",
		success:function(data){
			
		},
		error:function(){
			alert("网络错误");
		}
	}).then((data)=>{*/
		var data=[{"cid":"1","img":"img\/01-message\/banner1.jpg","title":"\u8f6e\u64ad\u5e7f\u544a\u56fe\u72471"},{"cid":"2","img":"img\/01-message\/banner2.jpg","title":"\u8f6e\u64ad\u5e7f\u544a\u56fe\u72472"},{"cid":"3","img":"img\/01-message\/banner3.jpg","title":"\u8f6e\u64ad\u5e7f\u544a\u56fe\u72473"}]
		var carouselArray=[];
		for(var i=0;i<data.length;i++){
			carouselArray.push(data[i].img);
		}
		var n=0;
		//生成图片
		var html="";
		for(var value of carouselArray){
			html+=`<li><img src="${value}"></li>`;
		};
		html+=`<li><img src="${carouselArray[0]}"></li>`;
		var carouselWidth=(carouselArray.length+1)*466+"px";
		$(".carouselPhoto").css("width",carouselWidth);
		$(".carouselPhoto").html(html);
		//生成圆点
		html="";
		for(var value of carouselArray){
			html+=`<li></li>`;
		};
		$(".carouselCircle").html(html);
		//让圆点居中
		var circleCenter=466/2-$(".carouselCircle")[0].offsetWidth/2+"px";
		$(".carouselCircle").css("left",circleCenter);
		//鼠标移进暂停  移出开始
		$(".carousel").mouseover(function(){
			clearInterval(time);
		});
		$(".carousel").mouseout(function(){
			time=setInterval(function(){active()},2100);
		});
		//点击圆点切换
		$(".carouselCircle").on("click","li",function(){
			n=$(this).index();
			$(`.carouselCircle li`).css("background","rgb(146,146,146)");
			$(`.carouselCircle li:nth-child(${n+1})`).css("background","#c6a86c");
			$(".carouselPhoto").css("left",-464*n+"px");
			console.log(n);
		});
		//让图片动起来
		var time=setInterval(function(){active()},2100);
		function active(){
			console.log();
			if(n<carouselArray.length+1){
				$(`.carouselCircle li`).css("background","rgb(146,146,146)");
				$(".carouselPhoto").css("left",-464*n+"px");
				$(`.carouselCircle li:nth-child(${n+1})`).css("background","#c6a86c");
				if(n==3){
					$(`.carouselCircle li:nth-child(1)`).css("background","#c6a86c");
				}
			}else{//4
				$(".carouselPhoto").css("transition","none");
				n=0;
				$(".carouselPhoto").css("left",-464*n+"px");
				$(`.carouselCircle li`).css("background","rgb(146,146,146)");
				setTimeout(function(){
					$(`.carouselCircle li:nth-child(${n+1})`).css("background","#c6a86c");
					$(".carouselPhoto").css("transition","1s");
					$(".carouselPhoto").css("left",-464*n+"px");
					n=2;
				},60);
			}
			n++;
		};
	//});
})();

$(document).ready(function(){
	//第二层游戏特色和第五层的视频
	//(()=>{
		$(".common").on("click","a",function(e){
			e.preventDefault();
			$("#mask").show();
			//查找每个点击a标签下对应的video-pop pop
			var videoPop=$(this).parent().children().last();
			//查找video-pop下的vide标签
			var video=videoPop.children().first();
			//让视频层显示出来
			videoPop.show();
			//让每次点击视频播放，都让视频重新开始播放
			video[0].currentTime=0;
			video[0].play();
			//播放时，暂停所有正在播放的音乐
			endMusicPlay();
			//点击x时视频隐藏
			$(".closeWindow").on("click",function(){
				$("#mask").hide();
				videoPop.hide();
				video[0].pause();
			});
			//点击视频时开始或暂停
			video.on("click",function(){
				if(video[0].paused){
					video[0].play();
				}else{
					video[0].pause();
				}
			});
		});
	//})();
});
$(document).ready(function(){
	//03角色介绍
	//(()=>{
	 //第一层：图片弹层
		//点击弹出图片层
		var index="";
		var smallImg="";
		$("#role>ul").on("click","li",function(e){
			e.preventDefault();
			$("#mask").show();
			$("#photoPop").show();
			//获得下标
			index=$(this).index()+1;
			smallImg=$(`#photoPop ul li:nth-child(${index})`);
			smallImg.show();
		});
		//点击x关闭图片层
		$("#photoPop>.close").click(function(){
			$("#mask").hide();
			$("#photoPop").hide();
			$(`#photoPop ul li:nth-child(${index})`).hide();
		});
		//点击箭头进行图片设换
		//右箭头：index++
		$("#photoPop>.arrowRight").click(function(e){
			e.preventDefault();
			$(`#photoPop ul li:nth-child(${index})`).hide();
			index++;
			if(index==7){
				index=1;
			}
			$(`#photoPop ul li:nth-child(${index})`).show();
		});
		//左箭头：index++
		$("#photoPop>.arrowLeft").click(function(e){
			e.preventDefault();
			$(`#photoPop ul li:nth-child(${index})`).hide();
			index--;
			if(index==0){
				index=6;
			}
			$(`#photoPop ul li:nth-child(${index})`).show();
		});


		//第二层：大图片弹层
		//图片对应的下标
		var imgIndex="";
		//图片对应的下标的大图片
		var imgObject="";
		var bigPhotoPop=$(".bigPhotoPop");
		$(".scale").click(function(e){
		   e.preventDefault();
		   imgIndex=$(this).parent().index()+1;
		   imgObject=$(`.bigPhotoPop>ul>li:nth-child(${imgIndex}) img`);
			//让图片淡入
		   imgObject.fadeIn();
		   bigPhotoPop.fadeIn();
		   //让bigPhotoPop父容器自动适应图片的大小
		   var w=imgObject.width();
		   var h=imgObject.height();
		   bigPhotoPop.width(w+10+"px");
		   bigPhotoPop.height(h+10+"px");
		   //弹出图片 遮罩层=》bigPhotoPop=》 对应的大图片
		   $("#mask_two").show();
		   bigPhotoPop.show();
		   imgObject.show();
			//让关闭按纽在图片加载完后才出现
		   setTimeout(function(){
			   $(".bigPhotoPopClose").show();
		   },2000);

		});
		//关闭第二层大图片
		$(".bigPhotoPopClose").click(function(e){
			e.preventDefault();
			$("#mask_two").hide();
			bigPhotoPop.hide();
			imgObject.hide();
			//按关闭图片时，隐藏按纽
			$(this).hide();
			//bigPhotoPop回复到初始状态，供下次过渡使用
			bigPhotoPop.width("50px");
			bigPhotoPop.height("28px");
		});

	   //第二层：视频弹层
		//图片对应的下标
		var videoIndex="";
		////图片对应的下标的大图片
		var videoObject="";
		var video_pop="";
		$(".scale").next().click(function(e){
			e.preventDefault();
			videoIndex=$(this).parent().index()+1;
			video_pop=$(`.videoPop ul li:nth-child(${videoIndex}) .video-pop`);
			videoObject=video_pop.children().first();
			//让第一层图片隐藏
			$("#photoPop").hide();
			$(`#photoPop ul li:nth-child(${index})`).hide();
			//让第二层视频层显示
			video_pop.show();
			videoObject.show();
			videoObject[0].currentTime=0;
			videoObject[0].play();
			//播放时，暂停所有正在播放的音乐
			endMusicPlay();
			//点击x时视频隐藏
			$(".closeWindow").on("click",function(){
				$("#mask").hide();
				video_pop.hide();
				videoObject[0].pause();
			});
			//点击视频时开始或暂停
			videoObject.on("click",function(){
				if(this.paused){
					this.play();
				}else{
					this.pause();
				}
			});
		});
	//})();
});

$(document).ready(function(){
	//04龙曦大陆 图片弹层
	//(()=>{
		var mainIndex="";
		var mainUl="";
		var liIndex="";
		$("#mainland").on("click","div",function(){
			mainIndex=$(this).index();
			$(".mainlandPop").show();
			mainUl=$(`.mainlandPop ul:nth-child(${mainIndex})`);
			mainUl.children().first().show();
			$("#mask").show();   // 1 show
			liIndex=1;
		});
		//点击箭头进行图片设换
		//右箭头：Index++   2
		$(".mainArrowRight").click(function(){
			mainUl.children(`:nth-child(${liIndex})`).hide();
			liIndex++;
			if(liIndex==4){
				liIndex=1;
			}
			mainUl.children(`:nth-child(${liIndex})`).show();
		});
		//左箭头：index++
		$(".mainArrowLeft").click(function(){
			mainUl.children(`:nth-child(${liIndex})`).hide();
			liIndex--;
			if(liIndex==0){
				liIndex=3;
			}
			mainUl.children(`:nth-child(${liIndex})`).show();
		});
		//点击x关闭图片层
		$(".mainClose").click(function(){
			$("#mask").hide();
			$(".mainlandPop").hide();
			$(`.mainlandPop ul:nth-child(${mainIndex})`).children().hide();
		});
	//})();

});
// 05视听中心--->音乐播放
(()=>{
    var dataArray=[{"mid":"1","role":"\u9f99\u66e6\u5927\u9646","sing":"\u4f20\u8bf4","sm":"img\/05-seeinghearing\/mp3\/disc1.png","md":"img\/05-seeinghearing\/mp3\/mbg1.jpg","singUrl":"audio\/\u5149\u5e74\u4e4b\u5916.m4a"},{"mid":"2","role":"\u73d1\u590f","sing":"\u547d\u8fd0","sm":"img\/05-seeinghearing\/mp3\/disc2.png","md":"img\/05-seeinghearing\/mp3\/mbg2.jpg","singUrl":"audio\/InLove.m4a"},{"mid":"3","role":"\u5080\u5149","sing":"\u7075\u9b42","sm":"img\/05-seeinghearing\/mp3\/disc3.png","md":"img\/05-seeinghearing\/mp3\/mbg3.jpg","singUrl":"audio\/\u610f\u5916.m4a"},{"mid":"4","role":"\u4f3d\u5a1c","sing":"\u590d\u4ec7","sm":"img\/05-seeinghearing\/mp3\/disc4.png","md":"img\/05-seeinghearing\/mp3\/mbg4.jpg","singUrl":"audio\/\u6211\u7684\u672a\u6765\u4e0d\u662f\u68a6.m4a"},{"mid":"5","role":"\u5b64\u6708\u57ce","sing":"\u6551\u8d4e","sm":"img\/05-seeinghearing\/mp3\/disc5.png","md":"img\/05-seeinghearing\/mp3\/mbg5.jpg","singUrl":"audio\/\u5149\u5e74\u4e4b\u5916.m4a"},{"mid":"6","role":"\u57fa\u8328","sing":"plan B","sm":"img\/05-seeinghearing\/mp3\/disc6.png","md":"img\/05-seeinghearing\/mp3\/mbg6.jpg","singUrl":"audio\/\u610f\u5916.m4a"},{"mid":"7","role":"\u838e\u841d\u5a05","sing":"\u8424\u5149","sm":"img\/05-seeinghearing\/mp3\/disc7.png","md":"img\/05-seeinghearing\/mp3\/mbg7.jpg","singUrl":"audio\/\u6211\u7684\u672a\u6765\u4e0d\u662f\u68a6.m4a"}];
	//初始状态为0
	var n=0;

   /* $.ajax({
        type:"get",
        url:"data/04-mp3.php",
        success:function(data){
            dataArray=data;
			replace(0);
        },
        error:function(){
            alert("网络出错");
        }
    }).then(()=>{*/
		//音乐
		var music=$("#music");
		//右边按钮
		music.on("click",".right_button",function(){
				//第一次点为1
				n++;
				if(n==7){n=0};
				musicClick(n);			
		});
		//左边按钮
		music.on("click",".left_button",function(){
				if(n==0){return}
				n--;
				musicClick(n);
		});
		//点击中间列表
		music.on("click","ul>li",function(e){
			e.preventDefault();
			n=$(this).index();
			musicClick(n);
		});
		/*
		 *上述三个事件监听抽取出共有代码封装
		 *主要更换下一首歌
		 *参数：n  下标
		 */
		function musicClick(n){
			replace(n);
			$("#audio")[0].play();
			$(".startButton").addClass("endButton");
			$("#audio").one("canplay",function(){
				console.log("gi tf ");
				ProgressDialog($("#audio")[0]);
			})	
		}
		//中间按钮(开始或暂停音乐)
		music.on("click",".startButton",function(){
			$(this).toggleClass("endButton");
			if($("#audio")[0].paused){
				$("#audio")[0].play();
				ProgressDialog($("#audio")[0]);
			}else{
				$("#audio")[0].pause();
				clearInterval(playend);
				playend=null;
			}
		});
		//页面加载时点击音乐进度条，实现快进快退
		$("#audio").one("canplay",function(){		
			ProgressDialog($("#audio")[0]);
		})
		/*三个问题：加载时点击进度条修改时间
			        音频开始播放时有几秒误差*/
	//});
	/*
	 *进度条函数
	 *参数： audioDOM是audio
	 */
	//定时器
	var playend="";
	//开始时间随播放时间变化己变化
     var timepiece=0;
	function  ProgressDialog(audioDOM){
		//清除定时器和进度条绑定的事件
		replacement();
		//总时长
		var totalTime=audioDOM.duration;	
		//分
        var minute=Math.floor(totalTime/60);
		//秒
        var second=parseInt(totalTime%60);  	
		if(second<10){
            second="0"+second;
        }
        if(minute<10){
            minute="0"+minute;
        }
        $(".endTime").html(minute+":"+second);
		//点击音乐进度条，实现快进快退=>修改当时歌曲播放时间
        $(".progress").click(function(e){
			//点击时获取进度条的宽度
			var clickLength=e.offsetX;
			timepiece=clickLength*totalTime/335;
			audioDOM.currentTime=clickLength*totalTime/335;
			//最快的速度去到点击的位置
			 $(".changeProgress").css("width",clickLength+"px");
			$(".changeProgress>i").css("left",clickLength+"px");
			//通过封装函数修改开始时间
			 musicPosition(timepiece);
        });

		setTimeout(function(){
            timepiece=audioDOM.currentTime;
            //通过封装函数修改开始时间
            musicPosition(timepiece);
            //通过修改width，显示进度条的进度情况
            length=335*timepiece/totalTime;
            $(".changeProgress").css("width",length+"px");
            $(".changeProgress>i").css("left",length+"px");
		},100);
        playend=setInterval(function(){
            timepiece=audioDOM.currentTime;
            //通过封装函数修改开始时间
            musicPosition(timepiece);
            //通过修改width，显示进度条的进度情况
            length=335*timepiece/totalTime;
            $(".changeProgress").css("width",length+"px");
            $(".changeProgress>i").css("left",length+"px");
			
			//自动播放下一首音乐
			if(timepiece>=totalTime-1){
				replacement();
				n++;
				if(n==7){n=0}
				replace(n);
				$("#audio")[0].play();
				$("#audio").one("canplay",function(){
					ProgressDialog($("#audio")[0]);
				})
            }
        },1000);
    }
    /*
     *进度条函数进一步封装：开始时间
     * timepiece  音乐当时播放时间
     */
    function musicPosition(timepiece){
        var startMinute=Math.floor(timepiece/60);  //分
        var sm="";
        if(startMinute==0){
            sm="00";
        }else if(startMinute<10){
            sm="0"+startMinute;
        }else{
            sm=startMinute;
        }
        var startSecond=parseInt(timepiece%60);  //秒
        if(startSecond<10){
            startSecond="0"+startSecond;
        }
        $(".startTime").html(sm+":"+startSecond);
    }
	//进度条在播放下一首音乐前，清除定时器
    function replacement(){
        clearInterval(playend);
		//清除进度条点击事件，不然会多次绑定
		$(".progress").unbind("click");
        playend=null;
    }
	//变换div
	function replace(n){	
		var html="";
			html+=`
				<div class="CDLibrary">
					<div class="button left_button">
						<div class="line"></div>
						<div class="info">`;
			if(n==0){
				html+=`<p>${dataArray[0].sing}</p>
							<p>${dataArray[0].role}</p>`;
			}else{
				html+=`<p>${dataArray[n-1].sing}</p>
							<p>${dataArray[n-1].role}</p>`;
			}			
			html+=`<img src="img/05-seeinghearing/num_f1b794c.png" alt=""/>
						</div>
					</div>
					<div class="button right_button">
						<div class="line"></div>
						<div class="info">`;
			if(n==6){
				html+=`<p>${dataArray[0].sing}</p>
					   <p>${dataArray[0].role}</p>`
			}else{
				html+=`<p>${dataArray[n+1].sing}</p>
							<p>${dataArray[n+1].role}</p>`
			}
			html+=`<img src="img/05-seeinghearing/num_f1b794c.png" alt=""/>
						</div>
					</div>
				</div>
				<!--中间播放中心-->
				<div class="center_play">
					<!--播放列表-->
					<div class="play_list">
						<div></div>
						<ul>`;
			for(var i=0;i<dataArray.length;i++){
				if(i==n){
					html+=`<li><a href="#" class="select">${dataArray[i].role}-${dataArray[i].sing}</a></li>`
				}else{
					html+=`<li><a href="#">${dataArray[i].role}-${dataArray[i].sing}</a></li>`;				
				}
			};
			html+=`</ul>
					</div>
					<!--播放按钮-->
					<div class="play_button">
						<p class="song">${dataArray[n].sing}</p>
						<p class="singer">${dataArray[n].role}</p>
						<div>
							<span class="startTime">00:00</span>
							<!--进度条-->
							<div class="progress">
								<!--变化的进度条-->
								<div class="changeProgress">
									<!--小圆点-->
									<i></i>
								</div>
							</div>
							<span class="endTime">00:00</span>
						</div>
						<i  class="startButton"></i>
					</div>
				</div>
				<audio src=${dataArray[n].singUrl} id="audio"></audio>	
			`
		var music=$("#music");
		music.html(html);
		music.removeClass();
		switch(n){
			case 0:
				music.addClass("demo1");
				break;
			case 1:
				music.addClass("demo2");
				break;
			case 2:
				music.addClass("demo3");
				break;
			case 3:
				music.addClass("demo4");
				break;
			case 4:
				music.addClass("demo5");
				break;
			case 5:
				music.addClass("demo6");
				break;
			default:
				music.addClass("demo7");
		}
	}
})();
//全局函数，播放视频时，暂停所有正在播放的音乐
function endMusicPlay(){
	var audio=$(`#music audio`)[0];
		audio.pause();
		//播放时间清零，让下次开始时重新播放
		audio.currentTime=0;
}
/*楼层滚动*/
$(document).ready(function(){
	//页面加载时，在不滑动时触发楼层滚动
	//兼容性
	var hTop=document.body.scrollTop|| document.documentElement.scrollTop;
	floorGlide(hTop);
	//滑动时触发楼层滚动
	$(window).scroll(function(){
			var hTop=document.body.scrollTop|| document.documentElement.scrollTop;
			floorGlide(hTop);
	});
	/*
	 * 楼层滚动函数：floorGlide
     * 作用：监测楼层的高度，从而触发对应的动画
     * 参数：hTop(页面滚动过的高度)
     */
	function floorGlide(hTop){
		if(hTop>=250){
			$("#head>img").css("animation","r_to_up 1s linear  1");
			$("#head>ul").css("animation","r_to_up 1s linear 0.7s 1");
			$("#head>img").removeClass("hide");	
			setTimeout(function(){
				$("#head>ul").removeClass("hide");
			},800);
		}
		if(hTop>=680){
			$("#message").css("animation","r_to_up 1s linear 1");
			$(".carousel").css("animation","r_to_up 1s linear 1s 1");
			$("#message").removeClass("hide");
			setTimeout(function(){
				$(".carousel").removeClass("hide");
			},1200);
		}
		if(hTop>=1540){
			$("#item>img").css("animation","r_to_up 1s linear 1");
			$("#item>img").removeClass("hide");
		}
		if(hTop>=1780){
			$("#item .ts1").css("animation","r_to_up 1s linear  1");
			$("#item .ts1").removeClass("hide");
			setTimeout(function(){
				$("#item .ts2").css("animation","r_to_up 1s linear  1");
				$("#item .ts2").removeClass("hide");
			},500);
		}
		if(hTop>=2440){
			$("#item .ts4").css("animation","r_to_right 1s linear 1");
			$("#item .ts3").css("animation","r_to_left 1s linear 1");
			$("#item .ts4").removeClass("hide");
			$("#item .ts3").removeClass("hide");
		}
		if(hTop>=2740){
			$("#item .ts5").css("animation","r_to_up 1s linear  1");
			$("#item .ts5").removeClass("hide");
		} 
		if(hTop>=3100){
			$("#item .ts6").css("animation","r_to_left 1s linear 1");
			$("#item .ts7").css("animation","r_to_up 1s linear 1");
			$("#item .ts6").removeClass("hide");
			$("#item .ts7").removeClass("hide");
		}
		if(hTop>=4200){
			$("#role>img").css("animation","r_to_up 1s linear 1");
			$("#role>img").removeClass("hide");
		}
		if(hTop>=5200){
			$("#mainland>img").css("animation","r_to_up 1s linear 1");
			$("#mainland>img").removeClass("hide");
		}
		if(hTop>=5300){
			$(".first-block>ul").css("animation","r_to_up 1s linear 0.6s 1");	
			$(".second-block>ul").css("animation","r_to_up 1s linear 0.7s 1");
			$(".thrid-block>ul").css("animation","r_to_up 1s linear   1");
			$(".fourth-block>ul").css("animation","r_to_up 1s linear 0.5s 1");
			$(".thrid-block>ul").removeClass("hide");
				setTimeout(function(){
				$(".fourth-block>ul").removeClass("hide");
				$(".first-block>ul").removeClass("hide");
				$(".second-block>ul").removeClass("hide");
			},1000);
		}
		if(hTop>=5850){
			$("#seeinghearing>img").css("animation","r_to_up 1s linear 1");
			$("#seeinghearing>img").removeClass("hide");
			//清除鼠标监听
			$(window).unbind("scroll");
		}
	}
});

