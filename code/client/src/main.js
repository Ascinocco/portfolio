import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('app', require('./components/app.vue'));

new Vue({
    el: '#app'
})