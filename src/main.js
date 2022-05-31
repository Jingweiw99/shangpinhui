import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
//第一个参数：全局组件的名字，第二个参数：哪一个组件。
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel)
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
import {reqCategoryList} from '@/api'
reqCategoryList();
//引入MockServe.js ----mock数据
import '@/mock/mockServe';
//引入swiper样式
import "swiper/css/swiper.css";
import {reqGetSearchInfo} from '@/api'
reqGetSearchInfo({})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由：  注意上下面的router小写
  router,
  //goSearch
  store
  



}).$mount('#app')
