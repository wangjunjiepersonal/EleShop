<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
    	<router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userInfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else><i class="iconfont icon-yonghuming"></i></span>
        
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in categoryArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(food,i) in item" :key="i">
              <div class="food_container">
                <img :src="baseImageUrl+food.image_url">
              </div>
              <span>{{food.title}}</span>
            </a>
            
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else/>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
	    <div class="shop_header">
	      <i class="iconfont icon-xuanxiang"></i>
	      <span class="shop_header_title">附近商家</span>
	    </div>
	    <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
	import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
	import ShopList from '@/components/ShopList/ShopList.vue'
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import { mapState,mapActions } from 'vuex'
	
	export default {
		data(){
			return {
	      baseImageUrl: 'https://fuss10.elemecdn.com'
			}
		},
		mounted(){
			this.$store.dispatch('getCategory')
			this.$store.dispatch('getShops')
			
		},
    computed:{
			...mapState(['address','categorys','userInfo']),
			categoryArr(){
				// 1.获取准备遍历的数组
				const { categorys } = this
				// 2.准备一个空的二维数组--categorysArr
	      const arr = []
	      // 3.准备一个小数组--pages(最大长度为8)
	      let minArr = []
				categorys.forEach((item) => {
					//如果minArr这个小数组已经存储了8个小数组 重新创建一个
					if (minArr.length == 8) {
						minArr = []
					}
					if (minArr.length == 0) {
						arr.push(minArr) 
					}
					minArr.push(item)
				})
				return arr
			}
	  },
	  watch:{
	  	categorys(value){
	  		// 在修改数据之后立即使用它，然后等待 DOM 更新。
				this.$nextTick(() => {
					// 一旦完成界面更新, 立即执行回调
				    new Swiper('.swiper-container', {
				    	loop: true,
				    	pagination: {
					    	el: '.swiper-pagination',
					    	clickable: true
				    	}
				    })	
				})
	  	}
	  },
		components:{
			HeaderTop,
			ShopList
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>