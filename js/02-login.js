$(document).ready(function(){


//表单验证
(()=>{
    //用户名
    var name=$("#r-uname");  //uname
    var unameSpan=name.next();   //span
    var  isName=false;
    name.focus();
    name.focus(function(){
        unameSpan.html("用户名长度在3到12位之间");
        unameSpan.removeClass();
        unameSpan.addClass("msg-default");
        isName=false;
    });
    name.blur(function(){
        //正则表达式
        var reg=/^(\w|[\u4e00-\u9fa5]){3,12}$/;
        var bool=reg.test(name.val());
        if(name.val().length==0){
            unameSpan.html("用户名不能为空");
            unameSpan.removeClass();
            unameSpan.addClass("msg-error")
            isName=false
        }else if(!bool){
            unameSpan.html("用户名不能少于3位");
            unameSpan.removeClass();
            unameSpan.addClass("msg-error");
            isName=false;
        }else{

            /*$.ajax({
                type:"post",
                url:"http://localhost/lg/data/02-checkregister.php",
                data:{uname:name.val()},
                success:function(data){*/
					var data={code:1};
                    if(data.code==1){
                        unameSpan.html("用户名可以使用");
                        unameSpan.removeClass();
                        unameSpan.addClass("msg-success");
                        isName=true;
                        pwd.focus();
                    }else{
                        unameSpan.html("用户名己被占用");
                        unameSpan.removeClass();
                        unameSpan.addClass("msg-error")
                        isName=false
                    }
           /*     },
                error:function(){
                    alert("网络出现错误 ");
                }
            });*/
        }
    });
    //第一次输入密码
    var pwd=$("#r-upwd");  //upwd
    var pwdSpan=pwd.next();   //span
    var isPwd=false;
    pwd.focus(function(){
        pwdSpan.html("密码长度在6到12位之间");
        pwdSpan.removeClass();
        pwdSpan.addClass("msg-default");
        isPwd=false;
    });
    pwd.blur(function(){
        var reg=/^\w{6,12}$/;
        var bool=reg.test(pwd.val());
        if(pwd.val().length==0){
            pwdSpan.html("密码不能为空");
            pwdSpan.removeClass();
            pwdSpan.addClass("msg-error");
            isPwd=false;
        }else if(!bool){
            pwdSpan.html("密码不能少于6位");
            pwdSpan.removeClass();
            pwdSpan.addClass("msg-error");
            isPwd=false;
        }else{
            pwdSpan.html("密码格式正确");
            pwdSpan.removeClass();
            pwdSpan.addClass("msg-success");
            isPwd=true;
            pwdConfirm.focus();
        }
    });
    //第二次输入密码
    var pwdConfirm=$("#r-upwdconfirm");  //upwdconfirm
    var pwdConfirmSpan=pwdConfirm.next();   //span
    var isPwdc=false;
    pwdConfirm.focus(function() {
        pwdConfirmSpan.html("密码长度在6到12位之间");
        pwdConfirmSpan.removeClass();
        pwdConfirmSpan.addClass("msg-default");
        isPwdc=false;
    });
    pwdConfirm.blur(function(){
        var reg=/^\w{6,12}$/;
        var bool=reg.test(pwdConfirm.val());
        if(pwdConfirm.val().length==0){
            pwdConfirmSpan.html("确认密码不能为空");
            pwdConfirmSpan.removeClass();
            pwdConfirmSpan.addClass("msg-error");
            isPwdc=false;
        }else if(!bool){
            pwdConfirmSpan.html("确认密码不能少于6位");
            pwdConfirmSpan.removeClass();
            pwdConfirmSpan.addClass("msg-error");
            isPwdc=false;
        }else if(pwdConfirm.val()!=pwd.val()){
            pwdConfirmSpan.html("两次输入密码不一致");
            pwdConfirmSpan.removeClass();
            pwdConfirmSpan.addClass("msg-error");
            isPwdc=false;
        }else{
            pwdConfirmSpan.html("两次输入密码一致");
            pwdConfirmSpan.removeClass();
            pwdConfirmSpan.addClass("msg-success");
            isPwdc=true;
            email.focus();
        }
    });
    //邮箱
    var email=$("#r-email");  //email
    var emailSpan=email.next();   //span
    var isEmail=false;
    email.focus(function() {
        emailSpan.html("请输入合法的邮箱地址");
        emailSpan.removeClass();
        emailSpan.addClass("msg-default");
        isEmail=false;
    });
    email.blur(function(){
        var reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var bool=reg.test(email.val());
        if(email.val().length==0){
            emailSpan.html("邮箱不能为空");
            emailSpan.removeClass();
            emailSpan.addClass("msg-error");
            isEmail=false;
        }else if(!bool){
            emailSpan.html("邮箱格式不正确");
            emailSpan.removeClass();
            emailSpan.addClass("msg-error");
            isEmail=false;
        }else{
			/*
            $.ajax({
                type:"post",
                url:"http://localhost/lg/data/02-checkregister.php",
                data:{email:email.val()},
                success:function(data){*/
					var data={code:1}
                    if(data.code==1){
                        emailSpan.html("该邮箱可以使用");
                        emailSpan.removeClass();
                        emailSpan.addClass("msg-success");
                        isEmail=true;
                        phone.focus();
                    }else{
                        emailSpan.html("该邮箱己被占用");
                        emailSpan.removeClass();
                        emailSpan.addClass("msg-error");
                        isEmail=false;
                    }
               /* },
                error:function(){
                    alert("网络出现错误 ");
                }
            });*/
        }
    });
    //手机号
    var phone=$("#r-phone");  //phone
    var phoneSpan=phone.next();   //span
    var isPhone=false;
    phone.focus(function() {
        phoneSpan.html("请输入合法的手机号");
        phoneSpan.removeClass();
        phoneSpan.addClass("msg-default");
        isPhone=false;
    });
    phone.blur(function(){
        var reg=/^1[34578]\d{9}$/;
        var bool=reg.test(phone.val());
        if(phone.val().length==0){
            phoneSpan.html("手机号不能为空");
            phoneSpan.removeClass();
            phoneSpan.addClass("msg-error");
            isPhone=false;
        }else if(!bool){
            phoneSpan.html("手机号格式不正确");
            phoneSpan.removeClass();
            phoneSpan.addClass("msg-error");
            isPhone=false;
        }else{
            /*$.ajax({
                type:"post",
                url:"http://localhost/lg/data/02-checkregister.php",
                data:{phone:phone.val()},
                success:function(data){*/
					var data={code:1};
                    if(data.code==1){
                        phoneSpan.html("该电话可以使用");
                        phoneSpan.removeClass();
                        phoneSpan.addClass("msg-success");
                        isPhone=true;

                    }else{
                        phoneSpan.html("该电话己被占用");
                        phoneSpan.removeClass();
                        phoneSpan.addClass("msg-error");
                        isPhone=false;
                    }
               /* },
                error:function(){
                    alert("网络出现错误 ");
                }
            });*/
        }
    });
    //注册
    $("#bt-register").on("click",function(e){
        if (!isName || !isPwd || !isEmail || !isPhone || !isPwdc) {
            e.preventDefault();
            return;
        }
        var uname=$("#r-uname").val();
        var upwd=$("#r-upwd").val();
        var uemail=$("#r-email").val();
        var uphone=$("#r-phone").val();
		/*
        $.ajax({
            type:"post",
            url:"http://localhost/lg/data/01-register.php",
            data:{uname:uname,upwd:upwd,email:uemail,uphone:uphone},
            success:function(data){*/
				var data={code:1};
                if(data.code==1){
                    alert("注册成功");
                    location.href="login.html";
                }else{
                    alert("注册失败");
                }
           /* },
            error:function(){
                alert("网络出现错误 ");
            }
        });*/
    });
})();
//用帐号密码登录
(()=>{
    $(".form-login").on("click",".f-button",function(e){
        e.preventDefault();
        //用户名
        var uName=$("#uName").val();
        var reg=/^\s+$/;
        var boolName=reg.test(uName);
        if(boolName||uName.length==0){
            $(".f-title").html("<span>请输入用户名</span>");
            return;
        }
        //密码
        var upwd=$("#upwd").val();
        var boolUpwd=reg.test(upwd);
        if(boolUpwd||upwd==0){
            $(".f-title").html("<span>请输入登录密码</span>");
            return;
        }
		/*
        $.ajax({
            type:"post",
            url:"http://localhost/lg/data/03-login.php",
            data:{uname:uName,upwd:upwd},
            success:function(data){*/
				var data={code:1};
                if(data.code==-1){
                    $(".f-title").html(`<span>${data.msg}</span>`);
                }else{
                    $(".f-title").html("成功");
					//保存用户帐号和id
					sessionStorage["uid"]=data.uid; 
					sessionStorage["uName"]=uName;
                    location.href="./index.html";
                }
          /*  },
            error:function(){
                alert("网络出现错误 ");
            }
        });*/

    });
})();
//二维码登码
(()=>{
    var bool=true;
    $(".f-photo").click(function(){
      var html="";
      if(bool){
          //反面
          html=`<h2 class="f-title">扫码登录</h2>
                <img src="../img/code.png" alt="" class="twoCodeImg"/>
                <p class="twoCodeP">请使用手机扫码</p>`;
          bool=false;
          $(this).css("background-position","-260px -260px");
      }else{
          //正面
          html=`<h2 class="f-title">登录龙魂时刻</h2>
                <div class="f-uName">
                    <label for="uName">
                        <i class="iconfont icon-yonghu"></i>
                    </label>
                    <input type="text" placeholder="用户名" id="uName" autofocus
                           class="uName"  maxlength="12" minlength="3"/>
                </div>
                <div class="f-uPwd">
                    <label for="upwd">
                        <i class="iconfont icon-mima"></i>
                    </label>
                    <input type="password" placeholder="密码" autofocus class="upwd" id="upwd"/>
                </div>
                <a href="#">忘记登录密码？</a>
                <button class="f-button">登录</button>
                <a href="#">免费注册</a>`;
          bool=true;;
          $(this).css("background-position","-201px -199px");
      }
      $(".form-login").html(html);
    })
})();
//弹出框
(()=>{
    //登录弹出框
    //打开
    $(".content").children().first().click(function(){
        $("#login").show();
        $("#mask").show();
    });
    //关闭
    $("#login>.f-close").click(function(e){
        e.preventDefault();
        $("#login").hide();
        $("#mask").hide();
    });
    //注册弹出框
    //打开
    $(".content").children().last().click(function(){
        $("#register").show();
        $("#mask").show();
    });
    //关闭
    $("#register>.f-close").click(function(e){
        e.preventDefault();
        $("#register").hide();
        $("#mask").hide();
    });

    //免费注册
    $(".form-login").on("click","a:last-child",function(e){
        e.preventDefault();
        $("#login").hide();
        $("#register").show();
    });
    $(".login_go").on("click",function(e){
        e.preventDefault();
        $("#login").show();
        $("#register").hide();
    })
})();

});