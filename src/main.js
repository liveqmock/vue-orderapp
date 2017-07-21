// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueBus from 'vue-bus';

import routes from './router/index'
import FastClick from 'fastclick'



//引入自定义的css样式
import './common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueRouter);
//全局注册VueResource
Vue.use(VueResource);
//vue-bus事件处理中心
Vue.use(VueBus);

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
});

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
