import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import NoLayout from './app.vue'
import Layout from './views/layout.vue'

const route = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: NoLayout,
            children: [
                {
                    path: "home",
                    component: Layout,
                    children: [
                        {
                            path: "",
                            meta: { title: '首页' },
                            component: () => import("./views/home.vue")
                        }
                    ]
                },
                {
                    path: 'table',
                    component: Layout,
                    children: [{
                        path: 'header',
                        meta: { title: '表格自定义头部', },
                        component: () => import('./views/table/header.vue')
                    }, {
                        path: 'form',
                        meta: { title: '表格编辑', },
                        component: () => import('./views/table/form.vue')
                    }]
                },
                {
                    path: 'form',
                    component: Layout,
                    children: [{
                        path: 'index',
                        meta: { title: '表单', },
                        component: () => import('./views/form/index.vue')
                    }, {
                        path: 'cascader',
                        meta: { title: '级联选择', },
                        component: () => import('./views/form/cascader.vue')
                    }, {
                        path: 'input-custom-result',
                        meta: { title: '自定义结果输入框', },
                        component: () => import('./views/form/inputCustomResult.vue')
                    }, {
                        path: 'fc-designer',
                        meta: { title: '动态表单编辑', },
                        component: () => import('./views/form/fcDesigner.vue')
                    }]
                },
                {
                    path: 'modal',
                    component: Layout,
                    children: [{
                        path: 'index',
                        meta: { title: 'Modal 测试', },
                        component: () => import('./views/modal/index.vue')
                    }]
                },
                {
                    path: 'tree',
                    component: Layout,
                    children: [{
                        path: 'index',
                        meta: { title: 'tree 测试', },
                        component: () => import('./views/tree/index.vue')
                    }]
                },
                {
                    path: '404',
                    meta: { authentication: false, title: '404' },
                    component: () => import("./views/404.vue")
                }

            ]
        },
    ]

})

route.beforeEach((to, from, next) => {
    if (route.getRoutes().map(item => item.path).includes(to.path)) {
        document.title = to.meta.title;
        // 在路由里
        next();
    } else {
        // 不在路由里
        // location.href = to.href
        next('/404');
    }
})

route.afterEach((to) => {
    if (to.path === '/home') {
        // 处理不在菜单上的一些特殊路由 需要重新对菜单的选中进行处理
        store.dispatch('andvx/resetInitMenu')
    }
})


export default route 
