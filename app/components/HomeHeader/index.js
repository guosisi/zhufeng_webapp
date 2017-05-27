import React,{Component} from 'react';
import './index.less';
import {Link } from 'react-router-dom'; //Link用来跳转路由的
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header">
                {/*导入iconfont字体*/}
                <Link to="/city">
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-unfold"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <input type="text"/>
                </div>
                <div className="profile">
                    <i className="iconfont icon-people_fill"></i>
                </div>
            </div>
        )
    }
}