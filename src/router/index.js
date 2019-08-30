import Vue from 'vue';
import Router from 'vue-router';

import ddd from '@/page/dd';
import aaa from '@/page/aa'

Vue.use(Router);
// hash
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/rank',
            name: 'rank',
            component: () =>
                import ( /* webpackChunkName: "rank" */ '@/page/rank')
        },
        {
            path: '/a',
            name: 'a',
            component: () =>
                import ( /* webpackChunkName: "a" */ '@/page/a')
        },
        {
            path: '/b',
            name: 'b',
            component: () =>
                import ( /* webpackChunkName: "bb" */ '@/page/bb')
        },
        {
            path: '/ddd',
            name: 'ddd',
            component: ddd
        },
        {
            path: '/aaa',
            name: 'aaa',
            component: aaa
        }
    ]
});