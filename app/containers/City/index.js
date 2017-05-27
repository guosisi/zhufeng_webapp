import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import CurrentCity from "../../components/CurrentCity/index";
import ChooseCity from "../../components/ChooseCity/index";
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/userInfo'
class City extends Component{
    render(){
        return (
            <div>
                <HeaderComponent title="选择城市"/>
                {/*传递redux中的cityName 给当前CurrentCity组件*/}
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <ChooseCity choose={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(city){ //要更改城市的方法
        this.props.actions.update({
            cityName:city
        })
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo
        }
    },
    dispatch=>{
        return {
            actions:bindActionCreators(actions,dispatch)
        }
    }
)(City);