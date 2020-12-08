import Vue from 'vue'
import Vuex from 'vuex'
import CinemaModule from '@/store/module/CinemaModule'
import CityModule from '@/store/module/CityModule'
import TabbarModule from '@/store/module/TabbarModule'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        CinemaModule,
        CityModule,
        TabbarModule
    }
})