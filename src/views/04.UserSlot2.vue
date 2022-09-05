<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Pannel>
        <template v-slot:title>
          <h4>励志动漫</h4>
        </template>
        <template v-slot:content>
          <span>灌篮高手</span>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1601%2F06%2F7416540_1guanlan_thumb.jpg&refer=http%3A%2F%2Fimg0.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664782948&t=b9ebf0738e1a9ad7d7cf829060b5686e"
            alt=""
          />
        </template>
      </Pannel>
      <!-- 简写形式 -->
      <Pannel>
        <template #title>
          <h4>芙蓉楼送辛渐</h4>
        </template>
        <template #content>
          <span>灌篮高手</span>
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1601%2F06%2F7416540_1guanlan_thumb.jpg&refer=http%3A%2F%2Fimg0.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664782948&t=b9ebf0738e1a9ad7d7cf829060b5686e"
            alt=""
          />
        </template>
      </Pannel>
    </div>
  </div>
</template>

<script>
// 具名插槽的使用
import Pannel from '../components/04/Pannel.vue';
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
