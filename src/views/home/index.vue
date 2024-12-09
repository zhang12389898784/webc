<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import header0 from "./components/header.vue"
import header1 from "./components/header1.vue"
import carousel from "./components/carousel.vue"
import video1 from "./components/video.vue"
import { getVideolist } from "../../api/api"
import meun from "../center/components/ContextMenu.vue"
import output from "@/config/output.json"
type video_list1 = {
    title: string,
    data: [],
    img: string
}
const length = computed(() => {
    return video_list.value.length
})
var page = 0
const video_list = ref<video_list1[]>([])
const main = ref()
const headerClass0 = ref()
const headerClassbool = ref()
var bool = ref(false)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // entry.isIntersecting 为true 就是出现在页面中了
        if (entry.isIntersecting) {
            // target 就是当前的元素
            const target = entry.target;
            target.classList.add('animate');
            getdata()
        }
    });
});
watch(video_list.value, (newValue, oldValue) => {
    // IntersectionObserver 监听元素是否出现在可是区域

    // 获取所有的 div
    observer.disconnect()
    const divs = document.querySelectorAll('.main1  div');
    divs.forEach((div, key) => {
        // 循环添加监听

        if (key === divs.length - 4)
            observer.observe(div);
    });

})
const getdata = async () => {
    // const params={
    //     page:page,
    //     size:5
    // }

    // await getVideolist(params).then(res=>{
    //     console.log(res.data.data.data)
    //     var data:[]=res.data.data.data
    //     video_list.value.push(...data)

    // })
    console.log(4545)
    output.slice(page * 30, page * 30 + 30).forEach((value, key) => {
        video_list.value.push({
            title: value.title,
            data: [],
            img: value.href
        })
    })
    page++
}
onMounted(async () => {
    function identity<T>(arg: T): T {
  return arg;
}
    getdata()
    setTimeout(() => {
        const divs = document.querySelectorAll('.main1  div');
        console.log(divs)
        divs.forEach((div, key) => {
            // 循环添加监听
            if (key > divs.length - 1 - 4)

                observer.observe(div);
        });
    }, 1000)
})
</script>

<template>
    <header0></header0>


    <div class="main" ref="main">
        <div style="height: 180px; width: 100%;">
            <img src="../../../public/img.jpeg" alt="" style="height: 150px;width: 100%;">
        </div>
        <div class="header1">
            <header1></header1>
        </div>
        . <div class="main1">
            <carousel style="grid-column: 1 / 3;grid-row: 1 / 3; " v-if="length" :videolist="video_list.slice(0, 4)">
            </carousel>
            <template v-for="(value, key) in video_list" v-if="length">
                <div style="width: 100%;">
                    <meun style="width: 100%;">
                        <video1 style="width: 100%;height: 100%;  " :text="value.title" :data="value" :index="key">
                        </video1>
                    </meun>
                </div>
            </template>
        </div>
    </div>
    <RouterView></RouterView>
</template>

<style scoped lang="less">
.header1 {
    margin-left: 8%;
    height: 120px;
    width: 80%;
    margin-right: 148px;
}

.headerClass0 {
    background-color: rgba(255, 255, 255, 100%);
    color: black;
}

.main {

    background-color: rgb(255, 255, 255);
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .main1 {
        background-color: white;

        width: 80%;
        height: 100%;
        display: grid;
        grid-gap: 20px;
        grid-column: span 5;
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>