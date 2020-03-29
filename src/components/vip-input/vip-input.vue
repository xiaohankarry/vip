<template>
	<div class="form-input1">
		<input :type="type" class="input1"  id="username" :placeholder="placeholder">
		<span class="c-icon"></span>
		<div class="form-tip"><span class="text"></span></div>
	</div>

</template>

<script>
	import './assets/css/vip-input.css'
	  export default {
	    name:'uc-nav',
	    props:{
			type:{
				type:'String',
				default:'text'
			},
			value:{
				type:'String',
				default:''
			},
			placeholder:{
				type:'String',
				default:''
			}
		},
		data(){
			return{
				
			}
		},
	    components:{},
	    mounted(){},
	    updated(){},
	    methods:{},
		}
</script>

<style>
	
</style>
