// import * as vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// console.table(Object.keys(vue))
const app = createApp(App)
app
  .use(store)
  .use(router)
  .mount('#app')

app.config.productionTip = false
// vue3不推荐在原型链上挂载一些东西，而是推荐使用依赖注入：provide/inject
app.config.globalProperties.$gobal = 123
