<template>
  <div class="container">
    <div class="div01"  ref="worldMapRef">世界地图</div>
    <div class="div02" ref="chinaMapRef">中国地图</div>
    <div class="div03" ref="beijingMapRef">北京地图</div>
    <div class="div04" ref="changpingMapRef">选择地图</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // 导入 ref 和 onMounted
import * as echarts from 'echarts';
import chinaMap from '/src/assets/map/json/china1.json'
import beijingMap from '/src/assets/map/json/province/beijing.json'
import  worldMap from '/src/assets/map/json/world.json'
import  changpingMap from '/src/assets/map/json/are/pcas-code.json'

const worldMapRef = ref(null); // 创建对 DOM 元素的引用
const chinaMapRef = ref(null); // 创建对 DOM 元素的引用
const beijingMapRef = ref(null); // 创建对 DOM 元素的引用
const changpingMapRef = ref(null); // 创建对 DOM 元素的引用
onMounted(() => {

  initMap(worldMapRef, worldMap, 'world');
  initMap(chinaMapRef, chinaMap, 'china');
  initMap(beijingMapRef, beijingMap, 'beijing');
  initMap(changpingMapRef, changpingMap, 'changping');
});

function initMap(mapRef, geoJSON, mapName,selecedAre) {
  echarts.registerMap(mapName, { geoJSON: geoJSON });
  const chartInstance = echarts.init(mapRef.value); // 使用 DOM 元素初始化 ECharts

  const option = {
    series: [
      {
        type: 'map',
        map: mapName,
        roam: true,
        label: {
          show: false,
        },
        itemStyle: {
          areaColor: '#f0f0f0',
          borderColor: '#2c3e50',
        },
        emphasis: {
          itemStyle: {
            areaColor: '#ffcc00', // 高亮颜色
          },
        },
        selectedMode: 'single', // 启用单选模式
        selected: {
          selecedAre : true, // 默认高亮显示北京市，可以根据需要修改为其他区域
        },
      },
    ],
  };
  chartInstance.setOption(option);

  chartInstance.on('click', function (params) {
    console.log('Selected region:', params.name);
    // 在这里添加你想要执行的操作
  });
}
</script>

<style scoped>
.container {
  display: flex; /*固定显示**/
  flex-wrap: wrap; /*子元素是否换行；*/
  width: 100%;
  height: 100%;
}

.div01, .div02, .div03, .div04 {
  width: 50%;
  height: 50%;
  border: 1px solid #2c3e50;
  box-sizing: border-box;
}

.div01 {
  background-color: #f0f0f0;
}

.div02 {
  background-color: #e0e0e0;
}

.div03 {
  background-color: #d0d0d0;
}

.div04 {
  background-color: #c0c0c0;
}
</style>
