import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    routes: [{
        path: '/',
        name: '系统列表',
        component: () =>
            import ('./views/Home.vue'),
        hidden: false,
        // children:[{

        // }]
    }]
    
})