<template>
  <div>
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>
    <p>动态切换组件</p>
    <component :is="comName"></component>
  </div>
</template>

<script>
// 动态组件切换，vue内置组件components
import UserName from '../components/01/UserName.vue';
import UserInfo from '../components/01/UserInfo.vue';
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

  created() {},

  methods: {},
};
</script>

<style></style>
