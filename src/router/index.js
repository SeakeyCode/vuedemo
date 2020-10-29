import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/home';
import About from '@/components/about';
import domDiff from '@/components/domDiff';
import editing from '@/components/editing';
import minder from '@/components/minder';
import pdf from '@/components/pdf';
import Images from '@/components/images';
import editor from '@/components/editor';
import babel from '@/components/babel';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: babel,
    },
    { path: '/about', component: About },
    { path: '/domDiff', component: domDiff },
    { path: '/editing', component: editing },
    { path: '/minder', component: minder },
    { path: '/pdf', component: pdf },
    { path: '/Images', component: Images },
    { path: '/editor', component: editor },
    { path: '*', component: Home },
  ],
});
