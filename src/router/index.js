import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home') // 异步组件，按需加载
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }],
  // 解决页面滚动的相互影响
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
