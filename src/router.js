import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('./pages/home')
const tags = () => import('./pages/tags')
const archive = () => import('./pages/archive')
const about = () => import('./pages/about')
const post = () => import('./pages/post')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: home,
    },
    {
        path: '/tags',
        component: tags,
    },
    {
        path: '/archive',
        component: archive,
    },
    {
        path: '/about',
        component: about,
    },
    {
        path: '/post:id',
        component: post,
    }
]

export default new VueRouter({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})