export default {
	changeCity (state,city){  //state指我们的公用数据
			state.city=city
			try {
				localStorage.city=city
			}catch (e){}	
		}
}