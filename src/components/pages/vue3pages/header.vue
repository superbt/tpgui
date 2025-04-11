<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref('');
const messages = ref(['消息1', '消息2', '消息3', '消息4', '消息5', '消息6', '消息7']); // 示例消息
const currentMessageIndex = ref(0);

const updateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  currentTime.value = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const updateMessage = () => {
  currentMessageIndex.value = (currentMessageIndex.value + 1) % messages.value.length;
};

onMounted(() => {
  setInterval(updateTime, 1000);
  setInterval(updateMessage, 2000); // 每3秒切换一次消息
  updateTime();
});
</script>

<template>
  <div class="left">
    <div class="message-container">
      <div class="message-slider" :style="{ transform: `translateX(${-currentMessageIndex * 100}%)` }">
        <div v-for="(message, index) in messages" :key="index" class="message-item">
          {{ message }}
        </div>
      </div>
    </div>
  </div>

  <div class="center">
    <div style="margin-top: 8px">{{ currentTime }}</div>
  </div>

  <div class="right">登录、退出、搜索</div>
</template>

<style scoped>
.left {
  width: 50%;
  height: 100%;
  background-color: rgba(124, 252, 0, 0.8); /* 调整透明度为 0.8 */
  overflow: hidden; /* 隐藏超出部分 */
}

.message-container {
  height: 100%;
  position: relative;
  white-space: nowrap;/**防止子元素换行*/
  margin-top:8px ;
}

.message-slider {
  transition: transform 0.5s ease-in-out; /* 添加平滑过渡效果 */
  display: inline-block;/*使子元素水平排列*/
}

.message-item {
  height: 100%;
  width: 100%;
  display: inline-block;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
}

.center {
  width: 30%;
  height: 100%;
  background-color: rgba(124, 252, 0, 0.6); /* 调整透明度为 0.8 */
}

.right {
  width: 20%;
  height: 100%;
  background-color: rgba(124, 252, 0, 0.4); /* 调整透明度为 0.8 */
}
</style>
