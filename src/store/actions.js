
// 触发mutaions

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

import {
	reqAddress,
	reqFoodCategorys,
	reqShops,
	reqUser,
	reqLogout,
	reqShopInfo,
	reqShopRatings,
	reqShopGoods,
	reqSearchShop
} from '@/api/index.js'

export default {
	// 异步请求一般放在actions中
	
	async getAddress({commit,state}){
		//获取传递的经纬度
		const geohash = `${state.latitude},${state.longitude}`
		//执行请求接口方法 通过result接收
		const result = await reqAddress(geohash)
		//返回正确 接收正确的data
		if (result.code == 0) {
			const address = result.data
			//触发mutations的方法 修改state中的address
			commit(RECEIVE_ADDRESS,{address})
		}
	},
	
	async getCategory({commit,state}){
		//执行请求接口方法 通过result接收
		const result = await reqFoodCategorys()
		//返回正确 接收正确的data
		if (result.code == 0) {
			const categorys = result.data
			//触发mutations的方法 修改state中的address
			commit(RECEIVE_CATEGORYS,{categorys})
		}
	},
	
	async getShops({commit,state}){
		//获取传递的经纬度
		const {latitude, longitude} = state
		//执行请求接口方法 通过result接收
		const result = await reqShops({latitude, longitude})
		//返回正确 接收正确的data
		if (result.code == 0) {
			const shops = result.data
			//触发mutations的方法 修改state中的address
			commit(RECEIVE_SHOPS,{shops})
		}
	},
	
	//同步记录用户信息
	recordUser ({commit},userInfo) {
		commit(RECEIVE_USER_INFO,{userInfo})
	},
	
	//异步获取用户信息  会话
	async getUserInfo({commit}) {
		const result = await reqUser()
		if (result.code === 0) {
			const userInfo = result.data
			commit(RECEIVE_USER_INFO,{userInfo})
		}
		
	},
	
	//账号登出
	async logout ({commit}) {
		const result = await reqLogout()
		if (result.code === 0) {
			commit(RESET_USER_INFO)
		}
	},
	
	// 异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    //console.log(result)
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  // 异步获取商家评价列表
  async getShopRatings ({commit},callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods ({commit},callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //数据请求回来以后 更新better-scroll
      callback && callback()
    }
  },
  
  //更新food的状态 添加购买的数量count
  updateFoodCount ({commit},{isAdd,food}) {
  	if (isAdd) {
  		commit(INCREMENT_FOOD, {food})
  		
  	} else {
  		commit(DECREMENT_FOOD, {food})
  		
  	}
  },
  
  //同步清空购物车
  clearCart ({commit}) {
  	commit(CLEAR_CART)
  },
  
  //搜索商家列表
	async searchShops  ({commit,state},keywords) {
		const geohash = state.latitude + ',' + state.longitude
	  const result = await reqSearchShop(geohash,keywords)
	  if (result.code === 0) {
	    const searchShops = result.data
	    commit(RECEIVE_SEARCH_SHOPS, {searchShops})
	  }
	},
}
