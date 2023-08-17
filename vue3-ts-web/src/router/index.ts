import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../components/login/index.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/layout/index.vue'),
        meta: { authRequired: true },
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/views/index/index.vue'),
            },
            {
                path: 'monitor',
                name: 'monitor',
                component: () => import('../views/monitor/index.vue'),
            },
            {
                path: 'setting',
                name: 'setting',
                component: () => import('../views/setting/index.vue'),
            }, {
                path: 'menu',
                name: 'menu',
                component: () => import('../views/menu/index.vue'),
            },
        ]
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
//添加动态路由
// let isAdmin = true
// if (isAdmin) {
//     //注册homevip.vue
//     router.addRoute('vip', {
//         path: 'vip',
//         component: () => import('../views/home/vip.vue')
//     })
// }
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.name != 'Login' && !token) next({ name: 'Login' })
    else next()
    if (to.name == 'login' && token) next({ name: 'home' })
})
export default router