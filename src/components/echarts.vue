<template>
	<div id="chart" style="height:300px;"></div>
</template>

<script>
  import echarts from 'echarts/lib/echarts';
	// 引入提示框和标题组件
	import 'echarts/lib/chart/line'
	import 'echarts/lib/chart/bar'
	import 'echarts/lib/component/dataZoom'
	import 'echarts/lib/component/toolbox'
	import('echarts/lib/component/tooltip');
	import('echarts/lib/component/title');
	import('echarts/lib/component/legend');
	export default{
		name:"Echarts",
		data(){
		return{
			 option :{
			            title: {
			                text: ''
			            },
			            tooltip: {},
			            legend: {
			                data:['销量','差评']
			            },
			            xAxis: {
			                data: []
			            },
			            yAxis: {},
			            series: [{
			                name: '销量',
			                type: 'bar',
			                data: []
			            },
						],
						toolbox: {
						      show: true,
						      feature: {
						          dataZoom: {
						              yAxisIndex: 'none'
						          },
						          dataView: {readOnly: false},
						          magicType: {type: ['line', 'bar']},
						          restore: {},
						          saveAsImage: {}
						      }
						  },
						  dataZoom: [
						    {
						        type: 'slider',
						        show: true,
						        xAxisIndex: [0],
						        start: 1,
						        end: 100
						    },
						    {
						        type: 'slider',
						        show: true,
						        yAxisIndex: [0],
						        left: '93%',
						        start: 1,
						        end: 100
						    },
						    {
						        type: 'inside',
						        xAxisIndex: [0],
						        start: 1,
						        end: 35
						    },
						    {
						        type: 'inside',
						        yAxisIndex: [0],
						        start: 29,
						        end: 36
						    }
						],
						
			        }
		}	
		},
		components:{},
		methods:{},
		mounted(){
			let myChart = echarts.init(document.getElementById('chart'));
			myChart.setOption(this.option)
			myChart.showLoading()
			axios({
				url:'../.././public/data/bar.json'
			}).then(
			res=>{
				setTimeout(()=>{
					myChart.hideLoading()
					myChart.setOptions({
						title: {
						    text: res.data.title
						  },
						  xAxis: {
						    data: res.data.xAxis
						  },
						  series: [{
						    name: '销量',
						    data: res.data.series.xx
						  },
						    {
						      name: '投诉',
						      data: res.data.series.oo
						    }
						  ]
						
					})
				},3000)
			}
			)
			myChart.on('click',(params)=>{
				this.title = params.name
			})
		}
	}
</script>

<style>
</style>
