const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const routerConfig = require('./router.js');
const path = require('path');

module.exports = async function() {
  
  const app = new Koa();

  var router = new Router();

// .get('/ts/node', async (ctx, next) => {
//   const ctl = require('./controller/node/select.js');
//   await ctl(ctx);
// })

  routerConfig.forEach(({ method, requestPath, controllerPath })=>{
    debugger;
    router[method](requestPath, async(ctx)=>{
      const ctl = require(controllerPath);
      await ctl(ctx);
    })
  })

  app
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  return app;

}