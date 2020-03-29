<template>
	    <section class="column">
	        <img src=".././assets/images/block.png" alt="">
	    </section>
</template>

<script>
	 export default {
	    name:'Right',
	    props:{},
	    data(){
	      return {
	        
	      }
	    },
	    components:{},
	    mounted(){},
	    updated(){},
	    methods:{}
	  }
</script>

<style>
	.column{
	    position: fixed;
	    top: 0;
	    right: 0;
	    z-index: 101;
	    height: 100%;
	    background-color: #262626;
	}
</style>
