<template>
	<div class="list" ref="wrapper">
  <div>
	  <div class="area">
     <div class="title border-topbottom">当前城市</div> 
     <div class="button-list">
       <div class="button-wrapper">
         <div class="button">{{this.currentCity}}</div>
       </div>
     </div>
    </div>
    <div class="area">
     <div class="title border-topbottom">热门城市</div> 
     <div class="button-list">
       <div class="button-wrapper"
         v-for="item of hotCities"
         :key="item.id"
         @click="handleCityClick(item.name)"
         >
         <div class="button">{{item.name}}</div>
       </div>
       
     </div>
    </div>
    <div class="area"   
     v-for="(item ,key) of cities"
     :key="key"
     :ref="key"
     >   <!-- 父级的key值和子集的key值可以相等，只要当前自己这一层的key值不重复就好了 -->
     <div class="title border-topbottom">{{key}}</div>
     <div class="item-list">
       <div class="item border-bottom"
        v-for="innerItem of item"
         :key="innerItem.id"
         @click="handleCityClick(innerItem.name)"
         >
         {{innerItem.name}}
       </div>
     </div> 
    </div>
  </div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState,mapMutations} from 'vuex'
export default {
	name: 'CityList',
  props:{
    cities:Object,
    hotCities:Array,
    letter:String
  },
  computed: {
    ...mapState({
      currentCity:'city'
    })
  },
  methods: {
    handleCityClick(city){
      // this.$store.dispatch('changeCity',city) // 派发了changeCity这个Action
      //this.$store.commit('changeCity',city) //我们也可以跳过actions这一步操作，直接调用mutations
      this.changeCity(city);
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true
    }) //获取bscroll的实例，传入dom
    console.log(this.scroll);
  },
  watch: {
    letter(){
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        console.log(this.$refs[this.letter]);  //获取到的element是一个数组
        this.scroll.scrollToElement(element);
      }
      
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom  // 这个样式在border.css里面设置了，这里直接给它设置颜色显示即可
    &:before
      border-color:#ccc
    &:after
      border-color:#ccc
  .border-bottom
    &:before
      border-color:#ccc 
  .list
    overflow:hidden
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    .title
      line-height:.54rem
      background:#eee
      padding-left:.2rem
      color:#666
      font-size:.26rem
    .button-list
      overflow:hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width:33.33%
        .button
          margin:.1rem
          padding: .1rem 0
          text-align:center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height:.76rem
        padding-left: .2rem
</style>