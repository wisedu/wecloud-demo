// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {init, setTitle} from '@/utils/sdk'
import router from './router'

router.afterEach((to, from) => {
  if (to && to.meta && to.meta.title) {
    setTitle(to.meta.title)
  }
})

Vue.config.productionTip = false

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// init mobile sdk first
init.then((sdk) => {
    sdk.UI.setBouncesEnabled(false)

    new Vue({
        router
    }).$mount('#app')
})
