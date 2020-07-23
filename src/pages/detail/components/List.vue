<template>
	<div>
	<div 
	 class="item"
	 v-for="(item,index) of list"
	 :key="index">
	  <div class="item-title border-bottom" @click="handleListClick(item.level)">
	  	<span class="item-title-icon"></span>
	  	{{item.title}}
	  </div>
	  <div v-if="item.children"  class="item-children" >  <!-- 如果当前的一级列表下有children ，就将children也显示在二级菜单那里-->
	  	<detail-list :list="item.children" v-show="levelActive==item.level"></detail-list>
	  </div>
	</div>
	</div>
</template>

<script>
export default {
	name: 'DetailList',
	props: {
		
		list:Array
	},
	data(){
		return {
			// showItem:false
			levelActive:'level-0'
		}
	},
	methods:{
		handleListClick(lev){

			const levelA = lev
			if (this.levelActive == levelA) {
				this.levelActive=""
			}
			// this.showItem=!this.showItem
			this.levelActive = levelA
			// console.log(this.levelActive)
		}
	}
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position:relative
    left:.06rem
    top:.06rem
    display:inline-block
    width:.36rem
    height:.36rem
    background:url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-size:.4rem
  .item-title
  	line-height:.8rem
  	font-size:.32rem
  	padding: 0 .2rem
  .item-children
  	padding:0 .2rem
</style>