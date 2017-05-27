import React,{Component} from 'react';
import './index.less'
export default class HeaderComponent extends Component{
    render(){
        return (
            <div className="header-component">
                <i onClick={this.back}>返回</i>
                {this.props.title}
            </div>
        )
    }
    back(){
        //返回上一级
        window.history.back();
    }
}