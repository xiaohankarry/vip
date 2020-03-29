<template>
	<div class="beijing">
	        <section class="wrap">
	            <!-- 轮播图-->
	            <div class="wrapUp">
	                <ul class="list">
	                    <li class="cur"><a href=""><img src="./assets/images/banner.jpg" alt="" width="974.09"></a></li>
	                    <li><a href=""><img src="./assets/images/banner1.jpg" alt="" width="974.09"></a></li>
	                </ul>
	                <span class="btn left">&lt;</span>
	                <span class="btn right">&gt;</span>
	            </div>
	        <!-- 标题 -->
	        <section class="wrapDown">
	            <ol>
	                <li class="cur">施华洛世奇品牌钜献 &nbsp;&nbsp;</li>
	                <li>飞利浦品牌钜献 低至2折</li>
	                </ol>
	            <!-- 横线 -->
	            <div class="line"></div>
	        </section>
	    </section>
	</div>
</template>

<script>
	import './assets/css/swiper.css'
	// import './assets/js/index.js'
	import $ from './assets/js/jquery-3.4.1.min.js'
	 export default {
	   name:'Swiper',
	   props:{},
	   data(){
	     return {
	       
	     }
	   },
	   components:{},
	   mounted(){},
	   updated(){
		   //鼠标以上通过索引值切换
		       //图片
		       //当前文字颜色
		       $(".wrapDown li").mouseenter(function () {
		           //定义变量接收索引值
		           var index=$(this).index();
		           console.log(index);
		           play(index);
		           //根据索引值图片
		         /*  $(".wrapUp li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
		           //文字切换
		           $(".wrapDown li").eq(index).addClass("cur").siblings().removeClass("cur");
		           //滑动线切换
		           $(".line").stop().animate({left:index*200},100)*/
		       });
		       //把切换封装成一个函数
		   
		   
		       //自动播放
		       //定义播放
		       function play(aaa){
		           $(".wrapUp li").eq(aaa).stop().fadeIn().siblings().stop().fadeOut();
		           //文字切换
		           $(".wrapDown li").eq(aaa).addClass("cur").siblings().removeClass("cur");
		           //滑动线切换
		           $(".line").stop().animate({left:aaa*200},100)
		       }
		       var timer=null;//先设置个定时器timer 让值为空
		       var num=0;//需要有一个索引数字控制它动，初始为0
		       var len=$(".wrapDown li").length;//需要有一个索引值和num对比,为li的个数。
		       //封装自定义播放动画
		       function autoplay() {
		           timer=setInterval(function () {//此处的timer是给定时器赋值
		               num++;
		               if(num>len-1){num=0;}
		               play(num);
		               console.log(num);
		           },1000);
		       }
		   
		   //鼠标以上停止,鼠标离开调用自动播放
		       $(".wrap").hover(function () {
		           clearInterval(timer);
		       },function () {
		           autoplay();
		       });
		   //箭头点击切换图片
		       $(".right").click(function () {
		           num++;
		           if(num>len-1){num=0;}
		           play(num);
		       });
		       $(".left").click(function () {
		           num--;
		           if(num<0){num=len-1;}
		           play(num);
		       });
	   },
	   methods:{}
	 }
</script>

<style>
	
</style>
