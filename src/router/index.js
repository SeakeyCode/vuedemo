import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home.vue'
import Markdown from '@/components/markdown.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', component: Home },
        { path: '/markdown', component: Markdown },
        { path: '/', redirect: '/markdown' }
    ]
}
)
