<script setup>

</script>

<template>

  <div class="innerleft">
    <div class="nav">
      <div class="nav-item">
        <router-link to="/">page00</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/page01">page01</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/page02">page02</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/page03">page03</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/page04">page04</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/page05">page05</router-link>
      </div>
    </div>


  </div>

  <div class="innercenter">
    <router-view></router-view>
  </div>

  <div class="innerright">这里是任务问信息

  </div>

</template>

<style scoped>
.innerleft{
  width: 10%;
  height: 100%; /* 确保高度与 outmain 一致 */
  background-color: rgba(143, 188, 143, 0.8); /* 调整透明度为 0.8 */
}
.innercenter{
  width: 80%;
  height: 100%; /* 确保高度与 outmain 一致 */
  background-color: rgba(0, 128, 0, 0.8); /* 调整透明度为 0.8 */
}
.innerright{
  width: 10%;
  height: 100%; /* 确保高度与 outmain 一致 */
  background-color: rgba(143, 188, 143, 0.8); /* 调整透明度为 0.8 */
}
</style>
