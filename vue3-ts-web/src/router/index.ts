import { createRouter, createWebHashHistory } from 'vue-router';
import Empty from '../views/empty'

const routes = [
    {
        name: 'layout',
        path: '/',
        component: () => import('../views/tabs/index.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/index/index.vue'),
                name: 'home',
                meta: {
                    // keepAlive: true,
                    title: '首页'
                }
            },
            {
                path: '/article',
                component: () => import('../views/monitor/index.vue'),
                name: 'article-list',
                meta: {
                    keepAlive: true,
                    title: '文章列表'
                }
            },
            // {
            //     path: '/article/:id',
            //     component: () => import('../views/monitor/detail.vue'),
            //     name: 'article-detail',
            //     props: true,
            //     meta: {
            //         keepAlive: true,
            //         title: '文章详情'
            //     }
            // },
            {
                path: '/KeepScroll',
                component: () => import('../views/scroll.vue'),
                name: 'KeepScroll',
                meta: {
                    keepAlive: true,
                    title: '记录滚动位置'
                }
            },
            {
                // 空白页，刷新tab页时用来做中转
                path: '/_empty',
                name: '_empty',
                component: Empty
            }
        ]
    }
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: () => import('../components/layout/index.vue'),
    //     meta: { authRequired: true },
    //     children: [
    //         {
    //             path: 'index',
    //             name: 'index',
    //             component: () => import('@/views/index/index.vue'),
    //         },
    //         {
    //             path: 'monitor',
    //             name: 'monitor',
    //             component: () => import('../views/monitor/index.vue'),
    //         },
    //         {
    //             path: 'setting',
    //             name: 'setting',
    //             component: () => import('../views/setting/index.vue'),
    //         }, {
    //             path: 'menu',
    //             name: 'menu',
    //             component: () => import('../views/menu/index.vue'),
    //         },
    //     ]
    // }
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
    // if (to.name != 'Login' && !token) next({ name: 'Login' })
    // else next()
    // if (to.name == 'login' && token) next({ name: 'home' })
})
export default router