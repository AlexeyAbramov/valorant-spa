import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Characters from './components/Main/Characters'
import E404 from './components/Main/E404'
import Weapons from './components/Main/Weapons'
import Maps from './components/Main/Maps'
import TierList from './components/Main/TierList'
import Hero from './components/Main/Hero'

const routes = [
    {
        path: '',
        redirect: {name:'characters'}
    },
    {   name:'characters',
        path: '/characters',
        component: Characters
    },
    {   name: 'hero',
        path:'/characters/:heroName',
        component: Hero,
        props: true 
    },
    {
        path:'/weapons',
        component: Weapons
    },
    {
        path:'/maps',
        component: Maps
    },
    {
        path:'/tier-list',
        component: TierList
    },
    {
        path:'*',
        component: E404
    }
];

export const router = new VueRouter({
    routes,
    mode:'history'
})