<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // 在没有使用keep-alive组件时，会触发created和destroyed的生命周期
  created() {
    console.log('UserInfo created');
  },
  destroyed() {
    console.log('UserInfo destoryed');
  },
  // 使用keep-alive组件时，会触发activated和deactived的生命周期
  activated() {
    console.log('UserInfo activated');
  },
  deactivated() {
    console.log('UserInfo deactivated');
  },
  methods: {},
};
</script>

<style></style>
