<template>
    <a-carousel :after-change="onChange">
      <img :src="props.videolist[0].img" alt="">
      <img :src="props.videolist[1].img" alt="">
      <img :src="props.videolist[2].img" alt="">
      <img :src="props.videolist[3].img" alt="">
    </a-carousel>
</template>
  <script lang="ts" setup>

  const props=defineProps(["videolist"])
  
  const onChange = (current: number) => {
    
    console.log(props.videolist);
  };
  </script>
  <style scoped>
  /* For demo */
  :deep(.slick-slide) {
    border-radius: 12px;
    text-align: center;
    height: 500px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  
  :deep(.slick-slide h3) {
    color: #fff;
  }
  </style>