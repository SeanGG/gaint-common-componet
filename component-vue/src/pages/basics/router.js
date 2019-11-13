// import Index from '@/pages/base/index';
// import Solution from '@/pages/base/solution';

const router = [
  {
    path: '/',
    name: 'index',
    title: '首页',
    // component: () => import('@/pages/base/index')
    component: () => import(/* webpackChunkName: "index" */ '@/pages/basics/index')
  },
  {
    path: '*',
    name: '404',
    title: '未知页面',
    hideInMenu: true,
    // component: () => import('@/pages/base/index')
    component: () => import(/* webpackChunkName: "404" */ '@/pages/basics/404')
  },
];

export default router