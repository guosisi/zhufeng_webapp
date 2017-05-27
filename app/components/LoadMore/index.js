import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return (
            <div className="load-more">
                {this.props.hasMore?
                <div onClick={this.loadMore.bind(this)} ref="more">
                    点击加载更多
                </div>:
                <div>
                    我是底线的
                </div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.fn = () => {
           //节流
           clearTimeout(this.timer);
           this.timer = setTimeout(()=>{
               //这里是要执行的逻辑
               //这里执行加载的方法
               //1.如果正在加载中
               if(this.props.isLoading){
                   return
               }
               //2.如果当前加载更多的按钮漏出到页面上，加载更多
               //当加载更多的按钮 进入到屏幕中，肯定当前按钮距离屏幕顶端的距离会小于屏幕的高度
               let screen = window.screen.height;
               let top = this.refs.more.getBoundingClientRect().top;//获取按钮距离屏幕的上高度
               if(top<screen){
                   this.props.loadMoreFn();//加载更多
               }
           },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        //当组件移除后 移除掉监听函数
        window.removeEventListener('scroll',this.fn);
    }
    loadMore(){
        //正在加载中 直接return即可
        if(this.props.isLoading){
            return;
        }
        this.props.loadMoreFn();
    }
}