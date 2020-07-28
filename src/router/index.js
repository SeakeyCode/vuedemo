import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import About from '@/components/about'
import domDiff from '@/components/domDiff'
import editing from '@/components/editing'
import minder from '@/components/minder'
// import textcom from '@/components/textcom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '/about', component: About },
        { path: '/domDiff', component: domDiff },
        { path: '/editing', component: editing },
        { path: '/minder', component: minder },
        // { path: '/textcom', component: textcom },
        { path: '*', component: About },
      ],
    },
  ],
})
