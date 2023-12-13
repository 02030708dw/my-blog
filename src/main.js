import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './styles/global.less'
import './mock'
import showMessage from './utils/showMessage'
Vue.prototype.$showMessage = showMessage

//注册全局指令
import vloading from '@/directives/loading'
Vue.directive('loading', vloading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')