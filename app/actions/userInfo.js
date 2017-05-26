// 用户信息 action.type data

//Types中保存着 UPDATE_CITY，SAVE_ID
import * as Types from '../constants/userInfo';

//Action creator
export function update(data) {//调用update动作时 会传入？
    return {
        type:Types.UPDATE_CITY, //修改的类型
        data
    }
}// action -> reducer(函数)