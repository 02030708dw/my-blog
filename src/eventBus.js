const listeners = {};

//事件总线
export default {
  //监听某一个事件
  $on(eventName, fn) {
    if (!listeners[eventName]) {
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(fn);
  },
  //取消监听
  $off(eventName, fn) {
    if (!listeners[eventName])
      return;
    listeners[eventName].delete(fn);
  },
  //触发事件
  $emit(eventName, ...args) {
    if (listeners[eventName]) {
      for (const fn of listeners[eventName]) {
        fn(...args);
      }
    }
    return true; // 返回true表示事件被成功触发
  }
}