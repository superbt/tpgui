import { createRouter, createWebHistory} from "vue-router";
import  page00 from '../components/pages/page00.vue'
import  page01 from '../components/pages/page01.vue'
import  page02 from '../components/pages/page02.vue'
import  page03 from '../components/pages/page03.vue'
import  page04 from '../components/pages/page04.vue'
import  page05 from '../components/pages/page05.vue'
import  page05_01 from '../components/pages/sub05pages/page05_01.vue'
const  routes = [
    {
        path: '/',
        name: 'page00',
        component: page00
    },
    {
        path: '/page01',
        name: 'page01',
        component: page01
    },
    {
        path: '/page02',
        name: 'page02',
        component: page02
    },
    {
        path: '/page03',
        name: 'page03',
        component: page03
    },
    {
        path: '/page04',
        name: 'page04',
        component: page04
    },
    {
        path: '/page05',
        name: 'page05',
        component: page05
    },
    {
        path: '/page05_01',
        name: 'page05_01',
        component: page05_01
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export  default router
