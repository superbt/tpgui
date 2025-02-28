<script setup>
 import {ref ,onMounted} from "vue";

 const count = ref(0);

 function  increment(){
   count.value++;
 }

 function  reset(){
   count.value=0;
 }

 onMounted(()=>{
   console.log("mounted");
 })
</script>

<template>
 <button @click="increment">Count is:{{count}}</button>
  <button @click="reset">reset</button>
</template>

<style scoped>

</style>
