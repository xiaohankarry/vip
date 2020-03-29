import Vue from 'vue'
import App from './layouts/App.vue'
 Vue.config.productionTip = false
//重置样式
import './assets/css/reset.css'
//路由配置
import router from './plugins/router.js'
//服务器端配置模块
import server from './config/server.js'
Vue.prototype.$baseUrl = server.baseUrl  //服务器基础地质，帮到Vue
import store from './plugins/vuex.js'
import './plugins/axios'
//element
import './plugins/element'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// export default vm;