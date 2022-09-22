import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// 在全局注册自定义指令
// Vue.directive('指令名',{
//  inserted(el){
// 可以对el标签扩展额外功能
//  }
// })
Vue.directive('mydirective', {
  inserted(el) {
    console.log(el); //这里打印出来的是input输入框
    el.focus(); //触发标签的事件
  },
});

// 自定义指令传值
Vue.directive('color', {
  inserted(el, binding) {
    el.style.color = binding.value;
  },
  // update(el, binding) {
  //   el.style.color = binding.value;
  // },
});
new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount('#app');
