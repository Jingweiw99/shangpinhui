import Mock from 'mockjs';
//引入JSON数据 JSON没有暴露，但是可以直接使用。默认暴露有图片、JSON的数据格式。
import banner from './banner.json';
import floor from './floor.json';

//mock数据 第一个参数是请求地址，第二个参数：请求数据
// 模拟首页大轮播图的数据
Mock.mock('/mock/banner',{code:200,data:banner});
Mock.mock('/mock/floor',{code:200,data:floor});

