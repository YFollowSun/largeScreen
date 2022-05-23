// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// // 待理解
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import './assets/css/global.css'

// import VueDragResize from "vue-drag-resize"

// Vue.component('vue-drag-resize', VueDragResize)
// //将全局echats对象挂载到Vue的原型对象上 
// // 在别的组件中通过this.$eacharts使用echarts对象
// Vue.prototype.$echarts = window.echarts
// Vue.config.productionTip = false

// Vue.use(ElementUI, { size: 'small' });

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import axios from "axios";
import VueAxios from 'vue-axios'
import {postRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {getRequest} from "./utils/api";

import VueDragResize from "vue-drag-resize"
Vue.component('vue-drag-resize', VueDragResize)

// 挂载全局
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;
axios.defaults.baseURL = 'http://localhost:8085/'
Vue.prototype.$echarts = window.echarts
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(ElementUI, { size: 'small' });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')