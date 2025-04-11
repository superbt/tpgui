<script setup>

import {ref} from "vue";
import Page01 from "@/components/pages/page01.vue";

const  rawHtml = '<strong>Hello!</strong>'


const  isButtonDisabled = ref(true);

const  seen = ref(true);

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

const  myDate = new Date();

function toTitleDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}

function  formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}

function doSomething(){
  alert('clicked');
}


</script>

<template>

  <div>

     在这里测试吧
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <div v-bind:id="dynamicId"></div>
    <button :disabled="isButtonDisabled">Button</button>
    <div v-bind="objectOfAttrs">123</div>

    <time :title="toTitleDate(myDate)" :datetime="myDate">
      {{ formatDate(myDate) }}
    </time>
    <p v-if="seen">Now you see me</p> <button @click="seen = !seen">show me ?</button>
    <a :href="url"> ... </a>
    <a @click="doSomething"> ... </a>
    <a :[attributeName]="url"> ... </a>
    <!--<a :['foo' + bar]="value"> 这会触发一个编译器警告 </a>-->
    <!--我想在这里加一个跳转也没-->
    <hr>
    <a>我想在这里加一个跳转页面<br></a>

    <nav>
       <router-link to="/page01">page01</router-link>
       <router-link to="/page02">page02</router-link>
       <router-link to="/page03">page03</router-link>
       <router-link to="/page04">page04</router-link>
       <router-link to="/page05">page05</router-link>
    </nav>
   <router-view/>
    <hr/>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
