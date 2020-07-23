<template>
    <div>
	<div class="search">
	  <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或地名">
	</div>
    <div
     class="search-content" ref="search" v-show="keyword">
        <ul>
            <li class="search-item border-bottom"
             v-for="item of list"
              :key="item.id"
              @click="handleCityClick(item.name)"
             >{{item.name}}</li>
             <li
             class="search-item border-bottom" v-show="!hasList"
             >没有找到匹配数据</li>
        </ul>
    </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
	export default {
		name: 'CitySearch',
        props: {
            cities:Object
        },
        data() {
            return {
                keyword:'',
                list:[],
                timer: null
            }
        },
        computed:{
            hasList(){
                return this.list.length
            }
        },
        watch: {
            keyword() {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                if (!this.keyword) {
                    this.list = []
                    return 
                }
                this.timer = setTimeout(() =>{
                    const result = []
                    for (let i in this.cities) {
                        //console.log(i); //打印A-Z
                        this.cities[i].forEach((value) =>{
                            if (value.spell.indexOf(this.keyword) >-1 || value.name.indexOf(this.keyword)>-1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list=result
                },100)
            }
        },
        methods:{
          handleCityClick(city){
            this.$store.commit('changeCity',city) //我们也可以跳过actions这一步操作，直接调用mutations
            this.$router.push('/')  //改变城市之后跳转到首页
          }
        },
        mounted() {
          this.scroll = new BScroll(this.$refs.search,{
              click: true
          })
        }
	}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    height: .72rem
    padding:0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      padding:0 .1rem
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color:#666
  .search-content
    z-index:1
    overflow:hidden  //去掉浏览器自己的滚动，用better-scroll滚动
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    background:#eee
    .search-item
        line-height:.62rem
        background:#fff
        color:#666
        padding-left:.2rem
</style>