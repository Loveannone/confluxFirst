import Vue from "vue"; // 这一步是在引用vue库
import vuex from "vuex"; // 这一步是在引用vuex库

Vue.use(vuex); // 将vuex挂载在vue中（这个vue项目要使用vuex）

export default new vuex.Store({
	// 默认抛出一个实例化构造函数vuex.store
	state() {
		// 一个函数，名字叫state，里面返回一个值isLogin：false
		return {
			isLogin: false, // 里面可以返回无数个公共变量
		};
	},
	mutations: {
		// 一个对象，里面放了一个函数，函数接收两个入参，一个state，一个boo
		changeIsLogin(state, boo) {
			// 这里的state封装好的，可以直接访问到上一个state（）函数
			state.isLogin = boo; // 这里给boo赋值，让boo的值等于state的返回值
		},
	},
});
