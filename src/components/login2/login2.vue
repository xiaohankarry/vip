<template>
	<div class="c-tab-content">
		<div class="right-body-form">
		    <div class="form-input1">
		        <input type="text" class="input1"  id="username" placeholder="手机号/用户名/邮箱">
		        <span class="c-icon"></span>
		        <div class="form-tip"><span class="text"></span></div>
		    </div>
		    <div class="form-input1">
		        <input type="password" class="input1"  id="password" placeholder="密码">
		        <span class="c-icon c-icon2"></span>
		        <div class="form-tip"><span class="pass"></span></div>
		    </div>
		    <div class="form-group">
		        <label>
		            <input type="checkbox" id="remember"> 记住
		        </label>
		    </div>
		    <div class="u-other-item">
		        <a href="">短信验证登入</a>
		        <a href="">忘记密码</a>
		    </div>
		    <div class="form-sumbit">
		        <button @click="login">登录</button>
		    </div>
		</div>
	</div>
</template>

<script>
	import './assets/css/login2.css'
	export default{
		name:"Login1",
		data(){
			return{
				username:'',
				password:''
				
			}
		},
		components:{
			
		},
		methods:{
			login(){
				axios({
					url:'/api/login',
					method:'post',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(
				res=>{
					window.localStorage.setItem('user',JSON.stringify(res.data))
					if(this.$route.query.p){
						this.$router.replace(this.$route.query)
					}else{
						this.$router.replace('/home')
					}
				}
				)
			}
			
		}
	}
</script>

<style>
	
</style>
