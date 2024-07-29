export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/mobile',
    name: 'indexMb',
    component: () => import('@/views/mobile/index.vue'),
  },
  {
    path: '/mobile/detail',
    name: 'detail',
    component: () => import('@/views/mobile/detail.vue'),
  },
];
