// const listeners = {};

// //事件总线
// export default {
//   //监听某一个事件
//   $on(eventName, fn) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(fn);
//   },
//   //取消监听
//   $off(eventName, fn) {
//     if (!listeners[eventName])
//       return;
//     listeners[eventName].delete(fn);
//   },
//   //触发事件
//   $emit(eventName, ...args) {
//     if (listeners[eventName]) {
//       for (const fn of listeners[eventName]) {
//         fn(...args);
//       }
//     }
//     return true; // 返回true表示事件被成功触发
//   }
// }

import Vue from 'vue';
const app = new Vue({});

/**
 * 事件名 mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * -滚动的dom元素，如果是undefined，则表示dom元素已经不存在
 */

Vue.prototype.$bus = app

export default app
