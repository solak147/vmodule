export default [
  {
		path: '/',
		name: '/',
    redirect: '/baseList',
		component: () => import('@/layout/index.vue'),
		children: [
      {
        path: '/baseList',
        name: 'baseList',
        component: () => import('@/views/baseList.vue'),
      },
    ]
  }
]

