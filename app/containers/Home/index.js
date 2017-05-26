import React,{Component} from 'react';
import HomeHeader from  '../../components/HomeHeader'
import Slider from  '../../components/Slider'
export default class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader cityName="北京"/>
                {/*slider组件*/}
                <Slider/>
            </div>
        )
    }
}