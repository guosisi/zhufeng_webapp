
import * as Types from '../constants/userInfo';

//reducer中有几个参数
let initState = {};
export function userInfo(state = initState,action) {
    switch (action.type){
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}
//目前只有一个reducer ，最终是将多个reducer 合并成一个reducer, combineReducer