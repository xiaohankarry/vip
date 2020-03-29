document.querySelector(".reg-form-btn").onclick=function(){
        var username = document.querySelector("#username").value.trim();
        var password = document.querySelector("#password").value.trim();
        if(username == ''){
           alert("用户名不能为空");
            return;
        };
        var reg = /^1[3456789]\d{9}$/;
        if(!reg.test(username)){
        alert("请输入正确的手机号");
        return;
        };
        var yanzheng = document.querySelector("#yanzheng").value.trim();
        if(yanzheng == ''){
            alert("请输入6位手机验证密码");;
            return;
        };
        if(password == ''){
            alert("密码不能为空");;
            return;
        };
        var reg = /^[0-9a-zA-Z]{6,16}$/;
        if(!reg.test(password)){
        alert("密码必须是数字和字母组成的6~16位");
        return;
        };
        var repassword = document.querySelector("#repassword").value.trim();
        if(repassword ==''){
            alert("请输入确认密码");;
            return;
        };
        var reg = /^[0-9a-zA-Z]{6,16}$/;
        if(!reg.test(repassword)){
        alert("确认密码必须是数字和字母组成的6~16位");
        return;
        };
        if(password!=repassword){
        alert("两次密码不一致！");
        return;
        };
    var agreement = document.querySelector("#agreement");
    if(!agreement.checked){
        alert("请同意协议");
        return;
        }