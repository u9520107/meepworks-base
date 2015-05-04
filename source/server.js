import koa from 'koa';
import favicon from 'koa-favicon';
import mount from 'koa-mount';
import router from 'koa-router';
import serve from 'koa-static-cache';
import * as config from './config';

import path from 'path';

import './filter';

import AppDriver from 'meepworks/server-app-driver';
import App from './app/app';

const port = process.env.PORT || 13382;
const server = koa();

const cacheTime = 5*60*1000;

server.use(favicon());

server.use(mount('/jspm_packages', serve(path.resolve(__dirname, '../jspm_packages'), {
})));
server.use(mount('/build', serve(path.resolve(__dirname, '../build'), {
})));
server.use(mount('/bundle', serve(path.resolve(__dirname, '../bundle'), {
})));

server.use(function*(next) {
  console.log(this.req.url);
  yield next;
});



server.use(mount('/', new AppDriver(App, {
  appPath: 'app/app',
  jspm: {
    path: 'jspm_packages',
    config: 'jspm_packages/config.js'
  },
  distPath: {
    external: 'build',
    internal: 'build'
  },
  fileRoot: __dirname
})));


server.listen(port, () => {
  console.log(`listening to ${port}`);
});

