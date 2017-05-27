import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return (
            <div className="load-more">
                {this.props.hasMore?
                <div onClick={this.loadMore.bind(this)}>
                    点击加载更多
                </div>:
                <div>
                    我是底线的
                </div>
                }
            </div>
        )
    }
    loadMore(){
        //正在加载中 直接return即可
        if(this.props.isLoading){
            return;
        }
        this.props.loadMoreFn();
    }
}