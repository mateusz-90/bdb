import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pl'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { locale })

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  render: createEle => createEle(App)
}).$mount('#app')
