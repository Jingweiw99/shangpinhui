import Vue from 'vue';
import Vuex from 'vuex';
//需要使用插件一次
Vue.use(Vuex);
import home from './home';
import search from './search'
//state:仓库存储数据的地方
const state = {

};
//mutations:修改state的唯一手段
const mutations = {};
//action: 处理action，可以书自己的业务逻辑，也可以处理异步。不能修改数据

const actions = {};
//getters:可以理解为计算属性，用于建华仓库数据，让组件获取仓库的数据更加方便。
const getters = {};
//暴露Store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块式开发
    modules: { home, search }

});
