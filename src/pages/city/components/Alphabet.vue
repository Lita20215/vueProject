<template>
	<div>
   <ul class="list">
     <li class="item"
      v-for="(item) of letters"
       :key="item"
       :ref="item"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove"
       @touchend="handleTouchEnd"
       @click="handleLetterClick">
       {{item}}
     </li>
   </ul> 
  </div>
</template>

<script>
export default {
	name: 'CityAlphabet',
  props:{
    cities:Object
  },
  data() {
    return {
      touchStatus: false,
      startY:0,
      timer:null
    }
  },
  computed: {
    letters() {
      const letters = []
      for (var i in this.cities) {
        letters.push(i)
      }
      // console.log(letters);
      return letters //['A','B','C',...]
    }
  },
  updated() {  //因为父组件传过来的cities一开始是空的，当cities获取之后，就会触发updated这个生命周期函数
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change',e.target.innerText)
      // console.log(e.target.innerText);
    },
    handleTouchStart (){
      this.touchStatus= true
    },
    handleTouchMove (e){
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        
      this.timer = setTimeout(() =>{
        //console.log(startY); //94
        const touchY = e.touches[0].clientY - 79   //79px是标题和搜索框那一块的高度
        const index =Math.floor((touchY -this.startY) /20)   //20是每个字母的高度
        // console.log(index);
        if (index >= 0 && index < this.letters.length) {
            this.$emit('change',this.letters[index])
        }
      },8)  //16毫秒之内再次进行了相同的操作，就像上一次的清除掉，开始下一次定时器，16秒之后触发
      }
    },
    handleTouchEnd (){
      this.touchStatus= false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    top:1.58rem
    right:0
    bottom:0
    width: .4rem
    .item
      line-height: .4rem
      text-align:center
      color:$bgColor
</style>