<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "vue02",
  data(){
    return {
     count:0
    }
  },
  methods:{
    inccrement(){
      this.count++
    }
  }
  ,
  mounted(){
    console.log(`the initial count is ${this.count}.`)
  }
})
</script>

<template>
  <button @click="inccrement">Count is :{{count}}</button>
</template>

<style scoped>

</style>
