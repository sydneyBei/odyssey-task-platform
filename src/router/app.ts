export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
            keepAlive: true,
            icon: '',
        },
    },
]
