<template>
  <div>
    <h1>1.动态组件使用</h1>
    <UserDynamic></UserDynamic>
    <hr />
    <h1>2.组件缓存</h1>
    <UserDynamics></UserDynamics>
    <hr />
    <h1>3.组件插槽</h1>
    <UserSlot></UserSlot>
    <hr />
    <h1>4.具名插槽</h1>
    <UserSlot2></UserSlot2>
    <hr />
    <h1>5.作用域插槽</h1>
    <UserSlot3></UserSlot3>
    <hr />
    <h1>6.插槽混合</h1>
    <UserSlot4></UserSlot4>
    <hr />
    <h1>8.使用自定义指令</h1>
    <UserDirective></UserDirective>
  </div>
</template>

<script>
import UserDynamic from './views/01.UserDynamic.vue';
import UserDynamics from './views/02.UserDynamics';
import UserSlot from './views/03.UserSlot.vue';
import UserSlot2 from './views/04.UserSlot2';
import UserSlot3 from './views/05.UserSlot3';
import UserSlot4 from './views/06.UserSlot4.vue';
import UserDirective from './views/08.UserDirective.vue';

export default {
  data() {
    return {};
  },
  components: {
    UserDynamic,
    UserDynamics,
    UserSlot,
    UserSlot2,
    UserSlot3,
    UserSlot4,
    UserDirective,
  },
  created() {},

  methods: {},
};
</script>

<style scoped></style>
