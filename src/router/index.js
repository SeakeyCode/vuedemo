import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import About from '@/components/about'
import domDiff from '@/components/domDiff'
import editing from '@/components/editing'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {  path: '/Home', component: Home },
        {  path: '/about', component: About },
        {  path: '/domDiff', component: domDiff },
        {  path: '/editing', component: editing },
		{ path: '/', redirect: '/chain' }    ]
}
)
