import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        notificationConfig: {
            timeout: 4000
        },
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules,
    strict: process.env.NODE_ENV !== 'production',
})

export default store

