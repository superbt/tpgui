<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>

  <div style="accent-color: #f2f2f2 ">
    <button @click="count++">btCount is :{{count}}</button>
  </div>

</template>

<style scoped>

button {
 font-weight: bold;
}

</style>
