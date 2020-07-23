<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
      
			<router-link tag="li"
        :to="'./detail/' +item.id"
         class="item"
         v-for="item of list"
         :key="item.id"
         >
				<img class="item-img" :src="item.imgUrl">	
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-btn">查看详情</button>
				</div>
			</router-link>
     
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'HomeRecommend',
		props: {
			list: Array
		},
		data (){
			return {
				
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    margin-top:.2rem
    line-height:.8rem
    background:#ccc
    text-indent:.2rem
  .item
    overflow:hidden
    display:flex
    height:1.9rem
  	.item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      flex:1
      padding: .1rem
      min-width:0   // 省略号没有出现的情况下
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height:.4rem
        color:#ccc
        ellipsis()
      .item-btn
        background:#ff9300
        margin-top:.2rem
        padding:0 .2rem
        border-radius:.06rem
        color:#fff   
        	
</style>
