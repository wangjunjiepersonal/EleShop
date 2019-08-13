// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 在入口的main.js引入Button // 注册全局组件
import {Button} from 'mint-ui'
Vue.component(Button.name, Button)

//引入mockserver
import '@/mock/mockServer.js'

// 图片懒加载 将一张loading图片加载进来
import loading from './common/img/loading.gif'
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
	loading
})

//加载过滤器
import '@/filters'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
})
