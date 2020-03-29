<template>
	<div class="dedil">
		<vipNav/>
		<Header></Header>
		<header-bottom></header-bottom>
		<div class="enlarge">
		    
		    </div>
		    <section class="detail">
		        <p class="d-p1"><span class="name"></span></p>
		        <div class=""> 
		            <p class="introduce"></p>
		        </div>
		        <section class="s-txt">
		            <p class="d-p2">
		                <span class="sp-title">折后价
		                </span><i>￥</i><span class="price"></span>
		            </p>
		            <p class="in-p">唯品会价￥999</p>
		        </section>
		        <div class="address">
		            <span>配送</span>
		            <input type="text" placeholder="请选择省区" height="32px">
		        </div>
		        <div class="yunfei">
		            <span>运费</span>
		            <span>新会员专享首单满38元免邮 （限唯品自营商品，部分商品不可用）</span>
		        </div>
		        <div class="chima">
		            <span>尺码</span>
		            <div class="nubmer">04</div>
		            <div class="nubmer">06</div>
		            <div class="nubmer">08</div>
		            <div class="nubmer">10</div>
		        </div>
		        
		        <button class="btn btn-primary addCart">加入购物车</button>
		        <button class="btn btn-primary goCart">进入购物车</button>
		      
		    </section> 
		    <div class="clearfix"></div>
			<Footer></Footer>
	</div>
</template>

<script>
import Header from '../../layouts/header/Header.vue'
import HeaderBottom from '../../layouts/header-bottom/Header-bottom.vue'
import vipNav from '../../components/vip-nav/nav.vue'
import Footer from '../../layouts/Footer/Footer.vue'
import './assets/css/detail.css'
	export default {
	  name: 'Detail',
	  props: {},
	  components: {Header,HeaderBottom,vipNav,Footer
	  },
	  activated() {
	    
	    let apiname=this.$route.query.apiName;
	    let _id = this.$route.params._id
	    this.$store.dispatch(this.$types.DETAIL,{apiname,_id})
	    
	  },
	  updated() {},
	  methods: {},
	  computed:mapState(['detail']),
	  filters:{
	    }
	  }

</script>

<style>
</style>
