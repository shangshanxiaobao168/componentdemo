import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 在全局注册自定义指令
Vue.directive('mydirective',{
  inserted(el){
   console.log(el)
   el.focus()//触发标签的事件
  }
})
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
