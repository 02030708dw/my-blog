import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './styles/global.less'
import './mock'
import showMessage from './utils/showMessage'
import './eventBus';
Vue.prototype.$showMessage = showMessage

//注册全局指令
import vloading from '@/directives/loading'
Vue.directive('loading', vloading);
import lazy from '@/directives/lazy'
Vue.directive('lazy', lazy);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// import * as blogApi from '@/api/blog';

// blogApi.getBlogId('asdf').then(res => {
//   console.log(res);
// })

// blogApi.getBlogComment({
//   nickname: '张三',
//   content: '评论内容，纯文本',
//   blogId: '123456'
// }).then(res => {
//   console.log(res);
// })

// blogApi.getBlogCommentList().then(res => {
//   console.log(res);
// })