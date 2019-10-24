import Vue from 'vue'
import App from './App'
import onfire from 'onfire.js'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$fire = new onfire()

const app = new Vue({
    ...App
})
app.$mount()
