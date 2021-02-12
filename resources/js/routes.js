import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: require('./components/modules/dashboard/index').default},
        {path: '/order', component: require('./components/modules/order/index').default},
        {path: '/customers', component: require('./components/modules/customers/index').default},
        {path: '/category', component: require('./components/modules/category/index').default},
        {path: '/product', component: require('./components/modules/product/index').default},
        {path: '/user', component: require('./components/modules/user/index').default},
        {path: '/rol', component: require('./components/modules/rol/index').default},
        {path: '/permission', component: require('./components/modules/permission/index').default},
        {path: '/report', component: require('./components/modules/report/index').default},
    ],
    mode: "history"
})
