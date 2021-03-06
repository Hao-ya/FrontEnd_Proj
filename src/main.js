// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/*
 入口JS
 */
import Vue from 'vue'
import App from './App'
import router from './router'

/* new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
}) */

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
