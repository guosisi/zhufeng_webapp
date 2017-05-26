import React,{Component} from 'react';
import HomeHeader from  '../../components/HomeHeader'
import Slider from  '../../components/Slider'
import Ad from './subpage/Ad';
import List from './subpage/List';
import {connect} from 'react-redux';
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
                {/*slider组件*/}
                <Slider/>
                {/*超值特惠获取数据*/}
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {
            //userInfo会放在this.props上
           userInfo:state.userInfo
        }
    },
    dispath=>{
        return {

        }
    }
)(Home);