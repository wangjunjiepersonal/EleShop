
//管理state对象

import Vue from 'vue'

import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO,
	RECEIVE_INFO,
	RECEIVE_RATINGS,
	RECEIVE_GOODS,
	INCREMENT_FOOD,
	DECREMENT_FOOD,
	CLEAR_CART,
	RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default {
	[RECEIVE_ADDRESS](state,{address}) {
		state.address = address
	},
	
	[RECEIVE_CATEGORYS](state,{categorys}) {
		state.categorys = categorys
	},
	
	[RECEIVE_SHOPS](state,{shops}) {
		state.shops = shops
	},
	[RECEIVE_USER_INFO](state,{userInfo}) {
		state.userInfo = userInfo
	},
	[RESET_USER_INFO](state) {
		state.userInfo = {}
	},
	[RECEIVE_INFO] (state, {info}) {
 	 state.info = info
	},
	
	[RECEIVE_RATINGS] (state, {ratings}) {
	  state.ratings = ratings
	},
	
	[RECEIVE_GOODS] (state, {goods}) {
	  state.goods = goods
	},
	
	//增加或减少food中的count购买数量
	[INCREMENT_FOOD] (state, {food}) {
	  if (!food.count) {
	  	Vue.set(food, 'count', 1)
	  	//将点击了添加购买的属性对象food添加到购买数组cartFoods中
	  	state.cartFoods.push(food)
	  } else {
	  	food.count++
	  }
	},
	
	[DECREMENT_FOOD] (state, {food}) {
    if (food.count) { // 只有有值才去减
      food.count--
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
	
	[CLEAR_CART] (state) {
	  // 清除food中的count
    state.cartFoods.forEach(food => { food.count = 0 })
    // 移除购物车中所有购物项
    state.cartFoods = []
	},
	
	//获取商家列表
	[RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
	  state.searchShops = searchShops
	},
}
