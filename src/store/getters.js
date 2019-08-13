
//state的计算属性   和computed一样

export default {
	//计算总数量
//	totalCount(state) {
//		return state.cartFoods.reduce((preTotal,food) => {
//			preTotal + food.count
//		},0)
//	},
	totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },
	//计算总价格
//	totalPrice(state) {
//		return state.cartFoods.reduce((preTotal,food) => {
//			preTotal + food.count*food.price
//		},0)
//	},
	totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  },
	
	positiveSize (state) {
    return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
  }
}
