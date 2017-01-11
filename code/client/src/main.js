// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
//
// import routes from './routes/config'
// import Home from './components/home.vue'
//
// Vue.use(VueRouter);
// Vue.use(VueResource);
//
//
// // var Home    = Vue.component('home', require('./components/home.vue'));
// // var Contact = Vue.component('contact', require('./components/contact.vue'));
//
// const router = new VueRouter({
//     routes: routes,
//     mode: 'history',
//     render: h => h(Home),
// });
//
// const app = new Vue({
//     router: router
// }).$mount('#app');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import Home from './components/home.vue'
import Contact from './components/contact.vue'

var router = new VueRouter({
    mode: 'hash',
    base: window.location.href,
    routes: [
        {path: '/', component: Home},
        {path: '/contact', component: Contact}
    ]
});

var app = new Vue({
    router,
    data: {
        message: 'Vue is working!! Yaaayyy!'
    }
}).$mount('#app');