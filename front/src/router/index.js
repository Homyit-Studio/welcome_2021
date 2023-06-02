import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/enter',
        meta : {
            title : 'enter'
        }
    },
    {
        path: '/technique',
        component: () => import('../views/technique.vue'),
        meta : {
            title : 'technique'
        }
    },
    {
        path: '/develop',
        component: () => import('../views/develop.vue'),
        meta : {
            title : 'develop'
        }
    },
    {
        path: '/enter',
        component: () => import('../views/enter.vue'),
        meta : {
            title : 'enter'
        }
    },
    {
        path: '/login',
        component: () => import('../views/login.vue'),
        redirect: '/login/loginform',
        children: [{
            path: '/login/loginform',
            component: () => import('../components/content/loginform.vue'),
            meta : {
                title : 'login'
            }
        },
        {
            path: '/login/contact',
            component: () => import('../components/content/contact.vue'),
            meta: {
                islogin: true,
                title : 'contact'
            }
        }
        ]
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
        meta : {
            title : 'home'
        }
    }, {
        path: '/background',
        component: () => import('../views/background.vue'),
        meta : {
            title : 'background'
        }
    },
    {
        path : '/photo',
        component : () => import('../views/photo.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router;
