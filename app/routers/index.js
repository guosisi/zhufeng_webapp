import React,{Component} from 'react';
import {
    HashRouter as Router, //路由类型
    Route, //小路由
    Switch
} from 'react-router-dom';
import Home from '../containers/Home'
import City from '../containers/City'
export default class RouterMap extends Component{
    render(){
        return (
            <Router>
                {/*当访问 / 时返回首页组件 router中只能拥有一个孩子节点*/}
                {/*switch只匹配一次，匹配到后结束匹配*/}
                <Switch>
                    {/*将两个路由 全部匹配了,只有当前路径是/的时候才匹配这个路由*/}
                    <Route exact path="/" component={Home}/>
                    <Route path="/city" component={City}/>
                </Switch>
            </Router>
        )
    }
}