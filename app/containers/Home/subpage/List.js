import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
import ListItem from "../../../components/ListItem/index";
export default class List extends Component{
    constructor(){
        super();
        this.state = {
            hasMore:true,
            data:[]
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
            </div>
        )
    }
    //1.获取数据
    componentDidMount(){
        //获取数据
        getList(this.props.cityName,0).then(res=>res.json()).then(({data,hasMore})=>{
            this.setState({
                data,
                hasMore
            });
        })
    }
}