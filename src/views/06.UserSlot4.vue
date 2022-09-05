<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <template v-slot:title="scope">
          <p>{{ scope.row.one }}</p>
        </template>
      </Pannel>
      <Pannel>
        <template v-slot:content="scope">
          <p>{{ scope.row.two }}</p>
        </template>
      </Pannel>
    </div>
  </div>
</template>

<script>
// 具名插槽,作用域插槽混用
import Pannel from '../components/06/Pannel.vue';
export default {
  components: {
    Pannel,
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>
