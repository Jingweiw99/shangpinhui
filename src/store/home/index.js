import  {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api'
// home模块的小仓库
const state ={
    //state中数据默认初始值别瞎写，服务器返回的是对象你就写对象。
    categoryList:[],
    //录播图数据
    bannerList:[],
    //楼层数据
    floorList:[]

};
// mutation是唯一修改state的地方
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList=floorList
    }

};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result =await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result =await reqGetBannerList();
        if(result.code==200){
            commit("BANNERLIST",result.data)
        }
    },
    //获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code==200){
            commit("FLOORLIST",result.data)
        }
    }
};
const getters ={};
export default {
    state,mutations,actions,getters,
}