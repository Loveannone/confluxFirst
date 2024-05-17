import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./baseStyle.less";
import ElementUI from "element-ui";
import store from "./store";
import "element-ui/lib/theme-chalk/index.css";
// import VueI18n from "vue-i18n";
Vue.use(ElementUI);
// Vue.use(VueI18n);
Vue.config.productionTip = false;
// const i18n = new VueI18n({
// 	locale: "zh-CN", // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
// 	messages: {
// 		"zh-CN": require("./language/zh-CH.json"), // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
// 		"en-US": require("./language/en-US.json"),
// 	},
// });
new Vue({
	store,
	router,
	// i18n, //把 i18n 挂载到 vue 根实例上components
	render: (h) => h(App),
}).$mount("#app");
