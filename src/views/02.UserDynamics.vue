<template>
  <div>
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>
    <p>动态切换组件</p>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
// 动态组件切换，频繁创建销毁的解决方式，vue内置组件keepalive
import UserName from '../components/02/UserName.vue';
import UserInfo from '../components/02/UserInfo.vue';
export default {
  data() {
    return {
      comName: 'UserInfo',
    };
  },
  components: {
    UserName,
    UserInfo,
  },

  methods: {},
};
</script>

<style></style>
