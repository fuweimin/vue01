import Vue from 'vue'
import App from './App.vue'

import router from './router.js'

new Vue({
    el: '#app',
    router,//让路由对象作用于管理整个项目的vue实例
    render: (h)=>h(App)
})