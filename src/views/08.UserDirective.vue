<template>
  <div>
    <!-- 全局注册自定义指令 -->
    <input type="text" v-mydirective />
    <!-- 局部注册自定义指令 -->
    <!-- <input type="text" v-focus /> -->
    <!-- 自定义指令传值 -->
    <p v-color="colorStr">用全局自定义指令修改文字颜色</p>
  </div>
</template>

<script>
// 局部注册自定义指令的使用
export default {
  data() {
    return {
      colorStr: 'red',
    };
  },
  directives: {
    focus: {
      inserted(el) {
        console.log(el); //input输入框
        el.focus();
      },
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped></style>
