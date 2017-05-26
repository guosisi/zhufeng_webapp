import {get} from  '../index';

export function getAd() {
    return get('/api/ad');
}
//获取列表的接口
export function getList(city,page) {
    return get('/api/list/'+city+'/'+page);
}