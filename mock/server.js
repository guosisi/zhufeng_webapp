let Koa = require("koa");
let Router = require("koa-router");
let app = new Koa;
let router = new Router();

let ad = require('./home/ad');
//超值特惠
router.get('/api/ad',(ctx)=>{
    ctx.body = ad;// 将数据放到响应体中
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
