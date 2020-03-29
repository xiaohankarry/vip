<template>
	<nav class="c-nav">
	            <div class="c-nav-body">
	                <div class="c-nav-site">
	                    <span>北京市</span>
	                    <span class="c-nav-trigon"></span>
	                </div>
	                <ul>
 							<router-link
							to="/login"
							tag="li"
							class="c-li1"
							exact-active-class="active"
							>
								<a href="javascript:;">请登录</a>
							</router-link>
							<router-link
							to="/reg"
							tag="li"
							class="c-li2"
							exact-active-class="active"
							>
								<a href="javascript:;">注册</a>
							</router-link>
	                    <li class="c-li3">
	                       <i class="c-li3-gift"></i>
	                        <a href="javasript:;">签到有礼</a>
	                    </li>
	                    <li class="c-li4">
	                        <a href="javasript:;">我的订单</a>
	                    </li>
	                    <li class="c-li5">
							<el-dropdown>
							  <span class="el-dropdown-link">
								下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
								<el-dropdown-item>黄金糕</el-dropdown-item>
								<el-dropdown-item>狮子头</el-dropdown-item>
								<el-dropdown-item>螺蛳粉</el-dropdown-item>
								<el-dropdown-item disabled>双皮奶</el-dropdown-item>
								<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>	                      
							  <i class="c-li9-trigon"></i>
	                    </li>
	                    <li class="c-li6">
	                        <a href="javasript:;">会员俱乐部</a>
	                        <i class="c-li9-trigon"></i>
	                    </li>
	                    <li class="c-li7">
	                        <a href="javasript:;">客户服务</a>
	                        <i class="c-li9-trigon"></i>
	                    </li>
	                    <li class="c-li8">
	                        <i class="c-li8-phone"></i>
	                        <a href="javasript:;">手机版</a>
	                    </li>
	                    <li class="c-li9">
	                        <a href="javasript:;">更多</a>
	                        <i class="c-li9-trigon"></i>
	                    </li>
	                </ul>
	            </div>
	        </nav>
</template>

<script>
	import './assets/css/nav.css'
	  export default {
	    name:'uc-nav',
		data(){
			return{
				bl:"false"
			}
			},
	    components:{
			
		},
	    mounted(){},
	    updated(){},
	    methods:{
			navshow(){
				this.bl = !this.bl
			}
		},
		
		}
		
</script>

<style>
	  .el-dropdown-link {
	    cursor: pointer;
	    color: #409EFF;
	  }
	  .el-icon-arrow-down {
	    font-size: 12px;
	  }
</style>
