<template>
	<div>
		<Swiper/>
		 <section class="warp-sale">
		        <div class="hot-sale">
		            <div class="hot-sale-title">
		                <img src="./assets/images/sale.jpg" alt="" width=1000>
		            </div>
		            <div class="box1">
		                <div class="wrap-box">
		                    <img src="./assets/images/pic5.png" alt="" width="1000px">
		                    <img src="./assets/images/pic4.png" alt="" width="1000px">
		                </div>
		            </div>
		        </div>
		        <div class="shop-sale">
		            <div>
		                <img src="./assets/images/today_DDp.png" alt="" width="1000px">
		            </div>
		            <img src="./assets/images/time.png" alt="">
		        </div>
		        <div class="item-page">
		            <div class="first-page">
		               <router-link to="/list">
		               	<a href="javascript:;">
		               	    <img src="./assets/images/pic4.jpg" alt="" width="490px" height="235px">
		               	    <div class="item-text">
		               	        <span class="item-name">MO&Co.开年特惠专场</span>
		               	        <div class="item-xiao-name">
		               	            <span class="brand-discount">
		               	                <span>1.5</span>
		               	                折起
		               	            </span>
		               	            <span>|</span>
		               	            <div class="pms-info">
		               	                部分商品折上3.9折起
		               	            </div>
		               	        </div>
		               	    </div>
		               	</a>
		               </router-link>
		            </div>
		            <div class="first-page">
						<router-link to="/list">
							<a href="javascript:;">
							    <img src="./assets/images/pic4.jpg" alt="" width="490px" height="235px">
							    <div class="item-text">
							        <span class="item-name">MO&Co.开年特惠专场</span>
							        <div class="item-xiao-name">
							            <span class="brand-discount">
							                <span>1.5</span>
							                折起
							            </span>
							            <span>|</span>
							            <div class="pms-info">
							                部分商品折上3.9折起
							            </div>
							        </div>
							    </div>
							</a>
						</router-link>
		                
		            </div>
		        </div>
		    </section>
	</div>
	
</template>

<script>
	import './assets/css/home.css'
	import Swiper from '../../components/swiper/swiper.vue'
	export default{
		name:'Home',
		data(){
			return {
				
			}
		},
		props:{
			
		},
		components:{Swiper},
		updated(){},
		mounted(){},
		methods:{}
	}
</script>

<style>
</style>
