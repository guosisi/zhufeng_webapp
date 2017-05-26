import reducers from  '../reducers';
import {createStore}  from 'redux'
//导出一个方法在app组件中使用

export function configureStore(initState) {
    //创建store,第一个参数是reducer 第二个是初始状态
    return createStore(reducers,initState);
}