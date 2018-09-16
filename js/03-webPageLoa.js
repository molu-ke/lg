(()=>{
	 var uid=sessionStorage["uid"];
	 var uName=sessionStorage["uName"];
    $.ajax({
        type:"get",
        url:"./header.html",
        success:function(headerData){
           $("#topBar").html(headerData);
        },
        error:function(){
            console.log("网络错误");
        },
    }).then(()=>{
		if(uid){
			var login=`<a href="javaScript:;">欢迎您: &nbsp ${uName}</a>`;
			var	register=`<a href="javaScript:;">退出</a>`;
			$("#topBar ul li:nth-child(2)").html(login);
			$("#topBar ul li:nth-child(2) a").addClass("uName");;
			$("#topBar ul li:nth-child(3)").html(register);
		}
	});
    $.ajax({
        type:"get",
        url:"./footer.html",
        success:function(footerData){
            $("#foot").html(footerData);
        },
        error:function(){
            console.log(alert("网络错误"));
        }
    });

	//退出登录
	$(document).ready(function(){
		if(uid){
			$("#topBar").on("click","ul li:nth-child(3) a",function(e){
				e.preventDefault();
				sessionStorage.clear();
				location.href="./index.html";
			});
		}
	});

})();
	
	

