import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PageLayout from '@/layout/page-layout.vue'
import appRoutes from './app'
import { useTitle } from '@vueuse/core'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'root',
        path: '/',
        component: PageLayout,
        children: appRoutes,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
        // name: '404',
        // component: () => import('@/views/404/404.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

export default router
