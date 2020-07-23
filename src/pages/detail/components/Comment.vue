<template>
	<div class="comment">
		<div class="com-title border-bottom">用户评论</div>
		<div class="com-Container" v-for="(item,index) of commentList">
			<div class="com-header" >
				<img class="head-img" :src="item.headImg">
				<ul class="com-detail">
					<li class="com-name">{{item.name}}</li>
					<li class="com-date">{{item.date}}</li>
				</ul>
			</div>
			<div class="com-content">{{item.comContent}}</div>
			<div class="com-image">
				<img class="item-img" :src="img"  v-for="(img,index) of item.comImages">
				
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'DetailComment',
	components:{
		
	},
	data(){
		return {
			commentList:[]
		}
	},
	methods: {
		getCommentInfo(){
			axios.get('/api/comment.json')
			.then(this.handleGetDataSucc)
		},
		handleGetDataSucc (res){
			res = res.data
			if (res.data) {
				const data = res.data
				this.commentList = data.comContent

			}
		}
	},
	mounted(){
		this.getCommentInfo()
	}
}
</script>

<style lang="stylus" scoped>
  .comment
    margin-top:.3rem
    .com-title
      padding:.2rem .2rem
	.com-title
	  font-size:.4rem
	  font-weight:bold
	.com-Container
	  padding:.25rem
	  border-bottom:1px solid #ddd
	  .com-header
	    display:flex
	    align-items:center
	    .head-img
	      display:inline-block
	      width:.9rem
	      height:.9rem
	      border-radius:50%
	    .com-detail
	      padding-left:.2rem
		  .com-date
		    color:#898989
		    padding-top:.1rem
	  .com-content
	  	margin-top:.1rem
	  	padding:.2rem
	  .com-image
	    display:flex
	    margin:.1rem
	    .item-img
	      width:33%
	      margin-right:.1rem
</style>