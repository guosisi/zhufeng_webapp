//入口
import React,{Component} from 'react';
//判断的路由是哪一个
import RouterMap from '../routers';
//关系是在这个文件中使用路由
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userInfo'
class App extends Component{
    constructor(){
        super();
        this.state = {
            loading:false
        }
    }
    render(){
        return (
            <div>
                {/*展示一个loading效果 这里的routerMap 会将对应的组件显示到这个位置*/}
                {this.state.loading?
                    <RouterMap/>:
                    <div>正在加载</div>
                }
            </div>
        )
    }
    componentDidMount(){
       this.setState({
           loading:true
       });

       let cityName = localStorage.getItem('cityName');
       if(cityName == undefined){
           cityName = '深圳'
       }
       //页面加载后 首先获取当前本地是否存储了城市，如果存储了 使用存储的城市
        //如果没有设置默认城市 北京
        //将北京存入到redux中
        this.props.actions.update({ //会调用action中的update方法
            cityName
        });
    }
}
//页面一加载 就将cityName存入
export default connect(
    state => {
        return {}
    },
    dispatch =>{
        return {
            //会在this.props增加actions属性,里面就有一个叫update的方法
            actions:bindActionCreators(actions,dispatch)
        }
    }
    //两个参数  第一个参数是mapStateToProps 获取状态
    //第二个参数 mapActionsToProps 获取action的
)(App);