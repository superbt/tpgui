<script setup>

import { createApp } from 'vue'

const btapp = createApp({
  data() {
    return {
      count: 10
    }
  }
})

const  message = 'hi bt';
const  rawHtml = '<strong>some <em>bold</em> and <i>italic</i> text</strong>'

btapp.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info)
} ;

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
};

const seen = false;

function showme (){
  // this.seen=true;
};

btapp.mount('#bt1')

</script>

<template>

  <div id="bt1">
    hi bt {{btapp.count}} ,{{message}}
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <div v-bind="objectOfAttrs">hello xbt</div>
    <p v-if="seen">Now you see me</p><button @click="showme">show</button>
  </div>

</template>

<style scoped>

</style>
