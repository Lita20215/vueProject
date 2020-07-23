import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex) //Vuex是一个插件，Vue里面使用插件用use()方法

export default new Vuex.Store({  //export default 是导出的意思，new Vuex.store Vuex的仓库
	state:state,
	mutations 
	//, getters:{
	// 	doubleCity (state){
	// 		return state.city +' '+state.city
	// 	}
	// }
})