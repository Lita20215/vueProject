<template>
  <div class="header">
    <div class="header-left">
     <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市/经典/游玩主题
  </div>
  <router-link to='/city'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe64a;</span>
    </div>
  </router-link>
</div>
</template>
<script>
import { mapState,mapGetters} from 'vuex'  //mapState的意思是将vuex里面的数据映射到这个组件的conputed的计算属性里的city上，我们可以在直接使用this.city
export default {
  name: 'HomeHeader',
  computed:{  // 展开运算符...mapState
    ...mapState(['city']),
    // ...mapGetters(['doubleCity'])
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    line-height:$headerHeight
    background:$bgColor
    color:#fff
    .header-left
      width:.64rem
      float:left
      .back-icon
        text-align:center
    .header-input
      flex:1
      height:.64rem
      line-height:.64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background:#fff
      border-radius:.1rem
      color:#ccc
    .header-right
      min-width:1.04rem
      padding:0.1rem
      float:right
      text-align:center
      color:#fff  

</style>
