import React,{Component} from 'react';
import {getList} from '../../../fetch/home';
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
                {this.state.data.length}
            </div>
        )
    }
    //1.获取数据
    componentDidMount(){
        //获取数据
        getList(this.props.cityName,0).then(res=>res.json()).then(({data,hasMore})=>{
            console.log(data);
            this.setState({
                data,
                hasMore
            });
        })
    }
}