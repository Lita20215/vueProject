import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    ,{
      path: '/city',
      name: 'City',
      component: City
    }
    ,{   //在Vue里面，通过路径后面加:id的方式，称为动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x:0,y:0}
  }
})
