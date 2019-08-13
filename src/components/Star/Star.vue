<template>
	<div class="star" :class="`star-${size}`">
    <span v-for="(item,index) in starClass" :key="index" class="star-item" :class="item"></span>
  </div>
</template>

<script>
	
	const CLASS_ON = 'on'
	const CLASS_HALF = 'half'
	const CLASS_OFF = 'off'
	
	export default {
		props:{
			//评分和尺寸2x图还是3x图 
			score:Number,
			size:Number
		},
		computed:{
			starClass () {
				const {score} = this
				const scs = []
				//给scs中添加on half off 向下取整获得on 根据小数四舍五入获得half 对5取余获得off
				const scoreInteger = Math.floor(score)
				
				for (let i=0; i<scoreInteger;i++) {
					scs.push(CLASS_ON)
				}
				
				if (score*10 - scoreInteger*10 >= 5) {
					scs.push(CLASS_HALF)
				}
				while (scs.length < 5) {
					scs.push(CLASS_OFF)
				}
				return scs
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>