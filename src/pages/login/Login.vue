<template>
	<div id="login">
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
		                <div class="right-nav">
		                    <div class="nav-left nav-left-qr" @click="loginchange('Login1'),logincolorleft">{{msg1}}</div>
		                    <div class="nav-right" @click="loginchange('Login2'),logincolorright">{{msg2}}</div>
		                </div>
		                <component :is='change'></component>
		            <div class="right-footer clearfix">
		                <div class="right-min-footer">
		                    <div class="min-footer-top">
		                        <div>
		                            <a><span class="wei-icon"></span></a>
		                        </div>
		                    </div>
		                    <div class="min-footer-bottom">
		                        <ul>
		                            <li><a href="">新浪微博</a></li>
		                            <li><a href="">QQ</a></li>
		                            <li><a href="">支付宝</a></li>
		                        </ul>
		                        <a href="" class="more">更多
		                            <span></span>
		                        </a>
							<router-link
							to="/reg">
								<a href="javascript:;" class="free">免费注册</a>
							</router-link>
		                    </div>
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
	import './assets/css/login.css'
	import Login1 from '../../components/login1/login1.vue'
	import Login2 from '../../components/login2/login2.vue'
	export default{
		name:"Login",
		data(){
			return {
				msg1:'扫码登录',
				msg2:'账户登录',
				 change:'Login1',
			 }
		},
		components:{
			Login1,Login2
		},
		methods:{	
			loginchange(text){
				this.change = text
			},
			logincolorleft(){
				var navLeft = document.querySelector(".nav-left");
				    navLeft.style.color = "#f10180"
				    navRight.style.color = "#666"
				
			},
			logincolorright(){
				var navRight = document.querySelector(".nav-right");
				    navRight.style.color = "#f10180";
				    navLeft.style.color = "#666"
				
			}
		}
	}
</script>

<style>
	#footer{
	    width: 1000px;
	    height: 78px;
	    line-height: 78px;
	    margin-left: auto;
	    margin-right: auto;
	}
	.copyright{
	    text-align: center;
	    color: #666;
	}
</style>
