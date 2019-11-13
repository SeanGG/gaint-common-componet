// import Index from '@/pages/base/index';
// import Solution from '@/pages/base/solution';

const router = [
  {
    path: '/',
    name: 'cp-view',
    title: '组件展示',
    // component: () => import('@/pages/base/index')
    component: () => import(/* webpackChunkName: "index" */ './index')
  },
];

export default router