import React,{Component} from 'react';
import HomeHeader from  '../../components/HomeHeader'
import Slider from  '../../components/Slider'
import Ad from './subpage/Ad'
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京"/>
                {/*slider组件*/}
                <Slider/>
                {/*超值特惠获取数据*/}
                <Ad/>
            </div>
        )
    }
}