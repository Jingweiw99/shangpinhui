//进行API统一管理
import requests from './request';
import mockRequests from './mockAjax'
//三级联动接口  /api/product/getBaseCategoryList  get 无参数
export const reqCategoryList = () => 
    // 发请求axios  发请求是Promise对象
    requests({ url: '/product/getBaseCategoryList', method: 'get' });
//获取banner （home首页轮播图接口）
export const reqGetBannerList= ()=>mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')