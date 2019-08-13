import Vue from 'vue'
import Router from 'vue-router'
	//import Msite from '@/pages/Msite/Msite.vue'
	//懒加载路由
	const Msite = () => import('@/pages/Msite/Msite.vue')
	import Search from '@/pages/Search/Search.vue'
	import Order from '@/pages/Order/Order.vue'
	import Profile from '@/pages/Profile/Profile.vue'
	import Login from '@/pages/Login/Login.vue'
	import Shop from '@/pages/shop/shop.vue'
	import ShopGoods from '@/pages/shop/ShopGoods/ShopGoods.vue'
	import ShopInfo from '@/pages/shop/ShopInfo/ShopInfo.vue'
	import ShopRatings from '@/pages/shop/ShopRatings/ShopRatings.vue'
	
Vue.use(Router)

export default new Router({
  //去掉地址中的哈希#
  mode: 'history',
  routes: [
	  {
	    path: '/',
	    redirect: '/msite'
	  },
	  {
	    path: '/msite',
	    component: Msite,
	    meta:{
	    	showFooter:true
	    }
	  },
	  {
	    path: '/search',
	    component: Search,
	    meta:{
	    	showFooter:true
	    }
	  },
	  {
	    path: '/order',
	    component: Order,
	    meta:{
	    	showFooter:true
	    }
	  },
	  {
	    path: '/profile',
	    component: Profile,
	    meta:{
	    	showFooter:true
	    }
	  },
	  {
	    path: '/login',
	    component: Login,
	  },
	  {
			path: '/shop',
			component: Shop,
				children: [{
					path: '/shop/goods',
					component: ShopGoods
				},
				{
	        path: '/shop/ratings',
	        component: ShopRatings
				},
				{
					path: '/shop/info',
	        component: ShopInfo
				},
				{
	        path: '',
	        redirect: '/shop/goods'
				}]
		}
  ]
})
