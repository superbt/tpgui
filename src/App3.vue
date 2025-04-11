<template>
  <div class="outwapper">
      <div class="outheader">
        <myheader />
      </div>
      <div class="outmain">
        <mymain/>
      </div>
      <div class="outfoot">
        <myfooter />
      </div>

  </div>
</template>

<script>
import myheader from './components/pages/vue3pages/header.vue'
import  mymain from './components/pages/vue3pages/main.vue'
import  myfooter from './components/pages/vue3pages/footer.vue'
export default {
  components: {
    myheader,
    mymain,
    myfooter
  },
  methods: {
  }
}
</script>

<script setup>
</script>


<style scoped>

.outwapper {
  height: 100vh;
  width: 100vw;
  background-color: rgba(250, 235, 215, 0.8); /* 调整透明度为 0.8 */
}
.outheader{
  height: 5vh;
  width: 100vw;
  display: flex; /* 添加 flex 布局 */
}
.outmain{
  height:85vh;
  width: 100vw;
  background-color: rgba(0, 128, 0, 0.8); /* 调整透明度为 0.8 */
  display: flex; /* 添加 flex 布局 */
}
.outfoot{
  height: 10vh;
  width: 100vw;
  background-color: rgba(144, 238, 144, 0.8); /* 调整透明度为 0.8 */
  display: flex; /* 添加 flex 布局 */
}



</style>
