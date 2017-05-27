import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListItem from "../../../components/ListItem/index";
import LoadMore from "../../../components/LoadMore/index";
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore:true,
            data:[],
            index:0// 当前加载的页码
        }
    }
    render(){
        return (
            <div>
                {this.state.data.length?
                this.state.data.map((item,index)=>(
                    <ListItem data={item} key={index}/>
                )):
                <div>正在加载</div>}

                <LoadMore hasMore={this.state.hasMore} loadMoreFn = {this.loadMore.bind(this)}/>
            </div>
        )
    }
    //1.获取数据
    componentDidMount(){
        //获取数据
        this.processData(getList(this.props.cityName,this.state.index))
    }
    //将加载更多的事件传递给木偶组件，木偶组件点击时触发加载更多
    processData(result){
        result.then(res=>res.json()).then(({data,hasMore})=>{
            this.setState({
                data:[...this.state.data,...data],
                hasMore
            });
        })
    }
    loadMore(){ //加载更多的方法
        this.setState({
            index:this.state.index + 1
        },()=>{
            this.processData(getList(this.props.cityName,this.state.index));
        });
    }
}