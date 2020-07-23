<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
		  <swiper :options="swiperOptions">
			<swiper-slide
			 v-for="(item,index) in imgs"
			  :key="index">
				<img class="gallary-img" :src="item" />
			</swiper-slide>			
			<div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonGallary',
	props: {
		imgs: {
			type:Array,
			default(){
				return []
			}
		}
	},
	data (){
		return {
			swiperOptions:{
			pagination: '.swiper-pagination',
			paginationType:'fraction',
			observeParents:true, 
			observer:true
			// 当swiper元素或它的父元素发生DOM结构变化时，会自我刷新一次，否则gallary出现的时候，宽度会出现错误，不能正常切换图片
				},
			}
		},
		methods: {
			handleGallaryClick(){
				this.$emit('close');
			}
		}
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow:inherit
  .container
    display:flex
    flex-direction:column
    justify-conetnt:center
    z-index:99
    position:fixed
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    .wrapper
      height:0
      width:100%
      padding-bottom:100%
      .gallary-img
        width:100%
        margin-top:30%
      .swiper-pagination
        color:#fff
        bottom:-1rem
</style>
