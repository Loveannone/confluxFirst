import Vue from "vue"; // 固定写法：引入第三方的包
import VueRouter from "vue-router"; // 固定写法：在vue项目中使用vue-router进行管理
import NftPage from "@/page/NftPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: "/",
			component: NftPage,
		},
	],
});
export default router;
