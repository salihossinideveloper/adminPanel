import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import modules from "@/modules";
import routes from './routes'

Vue.use(VueRouter)
Vue.use(VueMeta, {
    keyName: 'page',
})

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
})

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {

    let token = modules.actions.getToken()
    let needToken = modules.config.noneToken.indexOf(routeTo.name) === -1

    //redirect
    const redirectToLogin = () => {
        modules.actions.clearToken()
        modules.actions.clearUser()
        modules.actions.redirectTo('/login')
    }

    if (!token && needToken) {
        return routeTo.name !== 'login' ? next(redirectToLogin()) : next()
    }
    next()

})

export default router
