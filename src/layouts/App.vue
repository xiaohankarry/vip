<template>
  <div id="app">
	  <vipNav v-if="$store.state.vnav"/>
	  <Header v-if="$store.state.vheader"/>
	  <HeaderBottom v-if="$store.state.vheaderbottom"/>
	<router-view></router-view>
	  <Right v-if="$store.state.vright"/>
	  <Footer v-if="$store.state.vfooter"/>
	  <loading v-if="$store.state.vloading"/>
  </div>
</template>

<script>
import Header from './header/Header.vue'
import HeaderBottom from './header-bottom/Header-bottom.vue'
import vipNav from '../components/vip-nav/nav.vue'
 import Footer from './Footer/Footer.vue'
import Right from './Right.vue'
 import loading from '../components/loading.vue';
export default {
  name: 'App',
  components: {
	  Header,Footer,Right,HeaderBottom,vipNav,loading
  },
  watch:{
	  $route:{
		  handler(nextValue,PrevValue){
		  		  let path = nextValue.path;
		  		  if(/home|list/.test(path)){
		  			  this.$store.commit('updatenav',true)
		  			  this.$store.commit('updateheader',true)
		  			  this.$store.commit('updateheaderbottom',true)
		  			  this.$store.commit('updatefooter',true)
		  			  this.$store.commit('updateright',true)
		  		  }
		  		  if(/cart|detail/.test(path)){
		  			  this.$store.commit('updatenav',true)
		  			  this.$store.commit('updateheader',false)
		  			  this.$store.commit('updateheaderbottom',false)
		  			  this.$store.commit('updatefooter',true)
		  			  this.$store.commit('updateright',true)
		  			  
		  		  }
				  if(/login|reg/.test(path)){
				  			  this.$store.commit('updatenav',false)
				  			  this.$store.commit('updateheader',false)
				  			  this.$store.commit('updateheaderbottom',false)
				  			  this.$store.commit('updatefooter',false)
				  			  this.$store.commit('updateright',false)
				  			  
				  		  }
				  
		  },
		  immediate:true
	  }
  }
}
</script>

<style>
</style>
