import { reqGetSearchInfo } from '@/api';
// search模块的小仓库
const state = {
    //仓库初始状态,里面是对象就是写对象。
    searchList: {}
};
const mutations = {
    GETSEARCHLIST (state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    async getSearchList ({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
};
//计算属性 主要作用是简化仓库中的数据
//将来要用的数据简化一下，将来要用的时候方便一点。
const getters = {
    //当前形参是当前仓库中的state，不是大仓库中的state。
    goodsList(state){
        //这里的可能有两种情况一种是undefined，还有是服务器返回的数据
        //网络很差的时候会返回一个undefined,就不可能遍历了。至少是来一个数组。
        return state.searchList.goodsList ||[];
    },
    trademarkList(state){
        //这里的可能有两种情况一种是undefined，还有是服务器返回的数据
        return state.searchList.trademarkList
    },
    attrsList(state){
        //这里的可能有两种情况一种是undefined，还有是服务器返回的数据
        return state.searchList.attrsList
    },

};
export default {
    state, mutations, actions, getters
}