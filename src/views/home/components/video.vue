<script setup lang="ts">
import router from '@/router';
import { computed, onMounted, ref } from 'vue';
const video=ref()
const props= defineProps(["video","text","data","index"])
var img=computed(()=>{
    return props.data.img
})

const goVideo=()=>{
    localStorage.setItem(props.text,JSON.stringify(props.data))
    let routeUrl = router.resolve({
				      path: "/video",
                      query:{
                        title:props.text
                      }
				 });
				 window.open(routeUrl.href, '_blank');
}
onMounted(()=>{
    if(props.index>6&&(props.index-5)%5===0){
        console.log(props.index)
        video.value.setAttribute("shadow","")
    }
})
</script>

<template>
<div class="video" ref="video">
    <div class="video-content rounded shadow-md shadow-slate-400" @click="goVideo()">
    <img :src="img" alt="" class="img rounded">
    </div>
    <div class="video-text">
        {{ props.text }}
    </div>
    <div class="video-author mb-3">
        zcxzcx
    </div>
</div>
</template>

<style scoped lang="less">
div[shadow]{
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
}
.video{
    width: 100%;
    height: 100%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    margin-right: 12px;
    .img{
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .video-content{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        flex:3;
        cursor: pointer;
    }
    .video-text{
        flex:1;
        height: 50%;
        margin-top: 6px;
        font-size: 16px;
    }
    .video-author{
        flex:1;
        height: 50%;
        margin-top: 6px;
        font-size: 15px;
        color: gray;
    }
}
</style>