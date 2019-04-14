[TOC]
# pm2
## 常用命令
* pm2 start ./index.js
* pm2 start ./index.js --watch --node-args='--inspect' 
* pm2 list
* pm2 stop index
## 坑，暂仅记录
### 可能是node相关：Error: listen EADDRINUSE: address already in use :::3000
lsof -i tcp:3000
kill -9 28905