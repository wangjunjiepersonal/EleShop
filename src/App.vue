<template>
  <div id="app">
   
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>

import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods:{
  	...mapActions(['getAddress','getUserInfo'])
  },
  mounted () {
    this.getAddress()
    this.getUserInfo()
	},
  components:{
  	FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
