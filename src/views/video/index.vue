<template>
    <header0 bool="true" ></header0>
    <div  style="height: 60px; ">
    </div>
    <div class="video" v-if="bool">
      <div ref="videoContainer" class="video-container">
        <div class="video-container-title">
          <div>
            这种生物的基因组堪称真正的“屎山”，它们还在不断往里面塞垃圾｜《环球科学》周报069期
          </div>
          <div class="flex justify-start items-center text-sm text-gray-500">
            <Icon icon="pepicons-pop:play-circle" height="15px"></Icon> 43.9万 &nbsp;
            <Icon icon="pepicons-pop:sliders-circle" height="15px"></Icon> 807 &nbsp;
            2024-08-31 12:00:00 &nbsp;
          </div>
        </div>
        <div class="shadow-md shadow-slate-700">
          <video  ref="videoPlayer" class="video-js vjs-default-skin video-container" style="width: 100%;height: 70vh;"  controls preload="auto" :data-setup="{}">
        <!-- 可以在这里插入source标签以指定你的视频源 -->
        
        </video>
        </div>
        <hr>
        <div class="my-12">
          <a-rate v-model:value="rate" />
          <comment></comment>
        </div>
      </div>
      <div class="video-aside">
        <videoAside></videoAside>
        <a-card size="small" title="选集" style="width: 100%; margin-top: 12px;">
          <template #extra><a href="#">更多</a></template>
            <template v-if="length!=0" v-for="(value,key) in num">
            <a-button  @click="src1(value.video)" style="margin-top: 18px;margin-right: 18px;margin-bottom: 5px;">{{ value.title }}</a-button>
            </template>
        </a-card>
        
      </div>
    </div>

  </template>
  
  <script setup lang="ts">
  import { Icon } from '@iconify/vue';
  import videojs from 'video.js';
  import 'video.js/dist/video-js.css';
  import header0 from"../home/components/header.vue"
  import { ref, onMounted, computed } from 'vue';
  import comment from "./components/comment.vue"
import router from '@/router';
import { useRoute } from 'vue-router';
import videoAside from './components/videoAside.vue';
const rate=ref(0)
type videodata={
  video:string,
  title:string,
}
var length=computed(()=>{
  return num.value.length
})
const src=ref()
const src1=async (src2:string)=>{
// src.value=src2
player.load()
player.play()

}
var bool=ref(true)
const num=ref(Array<videodata>())
  var player:any=ref()
  const videoPlayer = ref();
  onMounted(()=>{
    const videoContainer = useRoute().query
    const videoContainerString=localStorage.getItem(videoContainer.title as string)
    const data=JSON.parse(videoContainerString as string)
    // src.value=data.data[0].video
    console.log(data)
    data.data.forEach((item:any,index:number)=>{
      num.value.push(item)
    })
    console.log(num)
    player = videojs(videoPlayer.value, {
      autoplay: false,
      controls: true,
      sources: [{
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        type: 'video/mp4'
      }],
    });
  })


//     mounted() {
//       this.player = videojs(this.$refs.videoPlayer, {
//         autoplay: false,
//         controls: true,
//         sources: [{
//           src: 'https://vjs.zencdn.net/v/oceans.mp4',
//           type: 'video/mp4'
//         }],
//       });
//     },
//     beforeUnmount() {
//       if (this.player) {
//         this.player.dispose();
//       }
//     }
//   }
  </script>
  
  <style scoped lang="less">
  .video{
    max-width: 2540px;
    min-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    box-sizing: content-box;
    position: relative;
  }
  .video-container {
    width:70%;
    height: 800px;;
    margin: 0 auto;
    &-title{
        font-size: 22px;
        line-height: 34px;
        padding: 12px;
    }
  }

  .video-aside{
    width: 25%;
    height: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items: center;
  }
  </style>
