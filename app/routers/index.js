import React,{Component} from 'react';
import {
    HashRouter as Router, //路由类型
    Route //小路由
} from 'react-router-dom';
import Home from '../containers/Home'
export default class RouterMap extends Component{
    render(){
        return (
            <Router>
                {/*当访问 / 时返回首页组件*/}
                <Route path="/" component={Home}/>
            </Router>
        )
    }
}