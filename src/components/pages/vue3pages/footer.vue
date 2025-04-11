<template>
    <div class="left">
      <div id="carousel" class="carousel-container">
        <transition-group name="slide" tag="div" class="carousel-track">
          <img v-for="(image, index) in visibleImages" :src="image" :key="index" alt="carousel" class="carousel-image">
        </transition-group>
      </div>
      <button @click="prevImage">上一张</button>
      <button @click="nextImage">下一张</button>
    </div>
    <div class="right">这里显示copyring</div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      images: [
         '/src/assets/logo2.JPG',
        '/src/assets/v1.jfif',
        '/src/assets/v2.jfif',
        '/src/assets/v3.jfif',
        '/src/assets/v4.jfif'
        // 更多图片路径...
      ],
      currentIndex: 0,
      visibleCount: 4, // 同时显示的图片数量
      intervalId: null // 用于存储定时器ID
    }
  },
  computed: {
    visibleImages() {
      const images = [];
      for (let i = 0; i < this.visibleCount; i++) {
        const index = (this.currentIndex + i) % this.images.length;
        images.push(this.images[index]);
      }
      return images;
    }
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoPlay() {
      this.intervalId = setInterval(this.nextImage, 3000); // 每3秒切换一次图片
    },
    stopAutoPlay() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  },
  mounted() {
    this.startAutoPlay(); // 组件挂载时启动自动轮播
  },
  beforeUnmount() {
    this.stopAutoPlay(); // 组件卸载前停止自动轮播
  }
}
</script>

<style scoped>
.left {
  width: 80%;
  height: 100%;
}
.right {
  width: 20%;
  height: 100%;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  flex-shrink: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
