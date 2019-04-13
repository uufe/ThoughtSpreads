

// // .get('/ts/node/post', async (ctx, next) => {
// .post('/ts/node', async (ctx, next) => {
//   const ctl = require('./controller/node/insert.js');
//   await ctl(ctx);
// })
// // .get('/ts/node/del', async (ctx, next) => {
// .del('/ts/node', async (ctx, next) => {
//   const ctl = require('./controller/node/remove.js');
//   await ctl(ctx);
// })
// // .get('/ts/node/put', async (ctx, next) => {
// .put('/ts/node', async (ctx, next) => {
//   const ctl = require('./controller/node/modify.js');
//   await ctl(ctx);
// })
// // .get('/ts/node/get', async (ctx, next) => {
// .get('/ts/node', async (ctx, next) => {
//   const ctl = require('./controller/node/select.js');
//   await ctl(ctx);
// })

const fs = require('fs');
const path = require('path');

const pathPrefix = 'ts';
const controllerPath = path.join(__dirname, '../controller');
const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file).replace(/\.js$/, ''));
    }
  });
  return filelist.filter(f => f.substr(0, 1) !== '_')
};


const requestMethods = fs.readdirSync(controllerPath).filter(m => m.substr(0, 1) !== '_')
const res = [];

requestMethods.forEach(m=>{

  const methodPath = path.join(controllerPath, m)
  const files = walkSync(methodPath);

  files.forEach(f=>{
    res.push({
      method: m,
      requestPath: path.join('/', pathPrefix, f.replace(methodPath, '')),
      controllerPath: f
    })
  })

})

module.exports = res;
// module.exports = [{
//   method,
//   requestPath,
//   controllerPath
// }]

