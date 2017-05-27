import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return (
            <div className="load-more">
                {this.props.hasMore?
                <div onClick={this.props.loadMoreFn}>
                    点击加载更多
                </div>:
                <div>
                    我是底线的
                </div>
                }
            </div>
        )
    }
}