<template>
  <div>
    <!-- <input type="text" v-mydirective /> -->
     <input type="text" v-focus />
  </div>
</template>

<script>
// 自定义指令的使用
export default {
  data() {
    return {};
  },
  directives:{
    focus:{
        inserted(el){
            el.focus()
        }
    }
  },
  created() {},

  methods: {},
};
</script>

<style scoped></style>
