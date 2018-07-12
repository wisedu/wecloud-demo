import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['./index'], resolve)

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {title: '首页'}
        }
    ]
})
