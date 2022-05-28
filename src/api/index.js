//进行API统一管理
import requests from './request';

//三级联动接口  /api/product/getBaseCategoryList  get 无参数
export const reqCategoryList = () => 
    // 发请求axios  发请求是Promise对象
    requests({ url: '/product/getBaseCategoryList', method: 'get' });


