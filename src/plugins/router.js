import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//懒加载
 const List =()=>import(/* webpackChunkName: "list" */ "../pages/list/List.vue");
 const Detail =()=>import(/* webpackChunkName: "list" */ "../pages/detail/Detail.vue");
 const Cart =()=>import(/* webpackChunkName: "list" */ "../pages/cart/Cart.vue");

 const Login =()=>import(/* webpackChunkName: "user" */ "../pages/login/Login.vue");
 const Reg =()=>import(/* webpackChunkName: "user" */ "../pages/reg/Reg.vue");
 
 const NoPage =()=>import(/* webpackChunkName: "nopage" */ "../pages/NoPage.vue");

 const Home =()=>import(/* webpackChunkName: "home" */ "../pages/home/Home.vue");


let routes = [
	{path:'/home',component:Home},
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/Reg',component:Reg},
	{path:'/Login',component:Login},
	{path:'/List',component:List},
	{path:'/Cart',component:Cart},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage}
];

let router = new VueRouter({
	routes
})

export default router;