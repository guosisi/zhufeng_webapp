// combineReducer redux中的
import { combineReducers} from 'redux';

import {userInfo} from './userInfo';
//合并后的reducer
export default combineReducers({
    userInfo
});
//整合后的reducer 放到哪里？