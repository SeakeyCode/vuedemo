import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home.vue'
import Chain from '@/components/designPattern/chain.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', component: Home },
        { path: '/chain', component: Chain },
        { path: '/', redirect: '/chain' }
    ]
}
)
