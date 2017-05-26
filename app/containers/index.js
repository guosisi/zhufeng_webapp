//入口
import React,{Component} from 'react';
//判断的路由是哪一个
import RouterMap from '../routers';
//关系是在这个文件中使用路由
export default class App extends Component{
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
    }
}