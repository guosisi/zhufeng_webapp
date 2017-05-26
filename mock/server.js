let Koa = require("koa");
let Router = require("koa-router");
let app = new Koa;
let router = new Router();

let ad = require('./home/ad');
//超值特惠
router.get('/api/ad',(ctx)=>{
    ctx.body = ad;// 将数据放到响应体中
});
let list = require('./home/list');
//传递城市
router.get('/api/list/:city/:page',(ctx)=>{
    //前端传递过来的城市和页码
    console.log(ctx.params.city);
    console.log(ctx.params.page);
    ctx.body = list;// 将数据放到响应体中
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
