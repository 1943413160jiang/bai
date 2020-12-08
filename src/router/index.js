import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Nowplaying from '../views/Movie/Nowplaying'
import Beforebegin from '../views/Movie/Beforebegin'
import Detail from '../views/Detail'
import Search from '../views/Search'
import http from '@/util/http'
import City from '@/views/City'
Vue.prototype.http = http;
Vue.use(VueRouter)

const routes = [{
    path: '/movie',
    component: Movie,
    children: [{
        path: "/movie/nowplaying",
        component: Nowplaying
    }, {
        path: "/movie/beforebegin",
        component: Beforebegin
    }, {
        path: "",
        redirect: "/movie/nowplaying"
    }],
}, {
    path: '/cinema',
    component: Cinema
}, , {
    path: '/cinema/search',
    component: Search
}, {
    path: '/center',
    component: Center
}, {
    path: '/city',
    component: City
}, {
    path: '/detail',
    component: Detail
}, {
    path: '*',
    redirect: '/movie'
}]

const router = new VueRouter({
    routes
})

export default router