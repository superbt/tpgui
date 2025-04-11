
<template>
<div>
    这个页面对我来说很重要，我要在这个页面中实现很多功能
    <nav>
      <router-link to="/">返回首页</router-link>
      <ol>
        <a @click="goToAbout">跳转到一个新的页面1</a>
      </ol>
      <ol>
        <a @click="openNewPage">跳转到一个新的页面2</a>
      </ol>

    </nav>

</div>
</template>


<script>

export default {
  methods: {
    goToAbout() {
      this.$router.push({ name: 'page05_01' });
    }
    ,
    openNewPage() {
      window.open('/page05_01', '');
    }
  }
}

</script>
<script setup>
</script>


<style scoped>

</style>
