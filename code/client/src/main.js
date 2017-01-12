import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import Home from './components/home.vue'
import Contact from './components/contact.vue'
import Projects from './components/projects.vue'

var router = new VueRouter({
    mode: 'hash',
    base: window.location.href,
    routes: [
        {path: '/', component: Home},
        {path: '/projects', component: Projects},
        {path: '/contact', component: Contact}
    ]
});

var app = new Vue({
    router,
}).$mount('#app');