import Vue from 'vue';
import App from './App';
import router from './router';
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
});


// import a from './a.js'
// import b from './b.js'


// import ( /* webpackChunkName: "a" */ './a.js')

// import ( /* webpackChunkName: "b" */ './b.js')

// import d from './d.js'
// import e from './e.js'

// console.log(d.c)
// console.log(e.c)