import 'whatwg-fetch'; //兼容fetch
import 'es6-promise';//兼容es6promise

export function get(url) {
    return fetch(url,{
        Accept:'application/json'
    }); //接收的数据类型是json数据
}

