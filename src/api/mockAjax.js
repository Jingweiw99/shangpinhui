//axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css"
//start:进度条开始 done:进度条结束

//常见axios实例对象
const requests = axios.create({
    //配置，基础路径和请求时间
    baseURL: "/mock",
    timeout: 5000
});
// 请求拦截器 在发请求之前，请求拦截器可以检测到，可以在请求发出前做一些事情。
requests.interceptors.request.use((config) => {
    nprogress.start();
    return config
});


//响应拦截器
requests.interceptors.response.use((res) => { 
    nprogress.done();
    return res.data;
},(error) => { 
    return Promise.reject(new Error("faile"))
});


//对外暴露
export default requests;
