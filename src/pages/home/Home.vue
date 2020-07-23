<template>
<div>
<home-header></home-header>
<home-swiper :list="swiperList"></home-swiper>
<home-icons :list="iconList"></home-icons>
<home-recommend :list="recommendList"></home-recommend>
<home-weekend :list="weekList"></home-weekend>
</div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data (){
  	return {
  		swiperList:[],
  		iconList:[],
  		recommendList:[],
  		weekList:[],
      lastCity:''

  	}
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
  	getHomeInfo (){
  		axios.get('/api/index.json?city'+this.city)
  		  .then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc (res){
  		res = res.data
  		if (res.ret && res.data) {
  			const data =res.data
  			this.swiperList = data.swiperList
  			this.iconList = data.iconList
  			this.recommendList = data.recommendList
  			this.weekList = data.weekendList
  		}
  	}
  },
  mounted (){  
    this.lastCity = this.city
  	this.getHomeInfo()
  },
  activated () {
  //初次加载和改变city时都会打印
    //当页面重新显示的时候，判断上次页面城市跟这次页面的城市是否时相同的，不相同，我们再发一次ajax请求
    if (this.lastCity !== this.city) {
      this.lastCity=this.city
      this.getHomeInfo()
    }
  }

}
</script>
<style>

</style>
