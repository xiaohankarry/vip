<template>
	<div>
		<section id="header">
		        <section id="c-header">
		            <div class="logo">
					<router-link to='/home'>
						<a href="javascript:;" class="c-logo" title="唯品会">唯品会</a>
					</router-link>
		            </div>
		            <div class="service"></div>
		        </section>
		    </section>
		    <section id="middle">
		        <div class="c-middle">
		            <div class="c-middle-right">
		                <div class="middle-right-header">
		                    <div>
		                        已注册可<router-link
							to="/login">
								<a href="javascript:;" class="active">直接登录</a>
							</router-link>

		                    </div>
		                    <h3>会员注册</h3>
		                </div>
		                <div class="middle-right-body">
		                    <div class="body-form">
		                        <form action="">
		                            <div class="form-div1">
		                                <div class="form-input1">
		                                    <input type="text" class="input1"  id="username" placeholder="请输入手机号码">
		                                    <span class="c-icon"></span>
		                                    <div class="form-tip"><span class="text"></span></div>
		                                </div>
		                                <div class="form-input1">
		                                    <input type="text" class="input2"  id="yanzheng" placeholder="请输入验证码">
		                                    <span class="c-icon c-icon1"></span>
		                                    <a href="javascript:;" class="code">666666</a>
		                                    <div class="form-tip"><span class="yan"></span></div>
		                                </div>
		                                <div class="form-input1">
		                                    <input type="password" class="input1"  id="password" placeholder="密码由6-20位字母，数字和符号组合">
		                                    <span class="c-icon c-icon2"></span>
		                                    <div class="form-tip"><span class="pass"></span></div>
		                                </div>
		                                <div class="form-input1">
		                                    <input type="password" class="input1"  id="repassword" placeholder="请再次输入上面的密码">
		                                    <span class="c-icon c-icon3"></span>
		                                    <div class="form-tip"><span class="repass"></span></div>
		                                </div>
		                            </div>
		                            <div class="terms">
		                                <div class="form-check">
		                                    <input type="checkbox" id="agreement">
		                                    <label for="J_mobile_agree" class="u-provision-txt">我已阅读并接受以下条款：
		                                        <a href="https://viva.vip.com/act/supportClause-pc?wapid=vivac_802&amp;ff=125|2|1|12" class="u-link" target="_blank" id="J_mobile_provision">《唯品会服务条款》</a>
		                                        <a href="https://viva.vip.com/act/supportPrivacy-pc?wapid=vivac_804" class="u-link" target="_blank">《隐私条款》</a>
		                                        <a href="https://i.vpal.com/clause.html" class="u-link" target="_blank">《唯品支付用户服务协议》</a>
		                                    </label>
		                                </div>
		                                <div class="form-tip"></div>
		                            </div>
		                            <div class="control-group clearfix">
		                                <a href="javascript:;" class=" reg-form-btn " passport_mars_sead_hover="" mars_sead="125|2|1|9" @click="handlereg">
		                                   立即注册
		                                </a>
		                            </div>
		                        </form>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <section id="footer">
		        <p class="copyright">Copyright 2008-2020 vip.com，All Rights Reserved ICP证：粤 B2-20080329</p>
		    </section> 
	</div>
</template>

<script>
	//  import './assets/js/reg.js'
 import './assets/css/reg.css'
	 export default{
		name:'Reg',
		data(){
			return{
				username:'',
				password:'',
				errorMess:''
			}
		},
		components:{
			
		},
		methods:{
			handlereg(){
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
				    };
					
					let fromData = new fromData();
					fromData.append('username',this.username)
					fromData.append('password',this.password)
					axios({
						url:'/api/register',
						methos:'post',
						data:fromData
					}).then(
					res=>{
						if(res.data.err===0){
							this.$router.replace('/login')
						}else{
							this.errorMess = res.data.msg
						}
					}
					)
			},
		}
	}
</script>

<style>
</style>
