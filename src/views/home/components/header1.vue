<script setup lang="ts">
import part from './part.vue';
import more from './more.vue';
const header_list= ["动态","热门"]
const icon_list= ["ant-design:read-filled","ant-design:pushpin-twotone"]

const link_icon= ["ant-design:read-filled","ant-design:pushpin-twotone","ant-design:reddit-square-filled","ant-design:save-filled","ant-design:usb-filled","ant-design:usb-filled"]

const link_list=[
'专栏',
'直播',
'活动',
'课堂',
'社区中心',
'新歌热榜',
]
const button_list= [
'番剧',
'电影',
'国创',
'电视剧',
'综艺',
'纪录片',
'动画',
'游戏',
'鬼畜',
'音乐',
'舞蹈',
'影视',
'娱乐',
'知识',
'科技',
'资讯',
'美食',
'生活',
'汽车',
'时尚',
'运动',
'动物圈',
'VLOG',]
</script>

<template>
    <div class="part">
        <div class="part1 ml-12">
        <template v-for="(value,key) in header_list">
            <part height="50px" :icon="icon_list[key]" :name="header_list[key]"></part>
        </template>
        </div>
        <div class="part2">
            <template v-for="(value,key) in button_list">
            <button v-if="key<19||key===19&&button_list.length===20" class="button" style="cursor: pointer;">{{ value }}</button>
            
            <more v-if="key===19&&button_list.length>20" class="button" style="cursor: pointer;" :moredata="button_list.slice(19)"></more>
            </template>
        </div>
        <div class="part3">
        <template v-for="(value,key) in link_list">
            <part :icon="link_icon[key]" :name="link_list[key]"></part>
        </template>
        </div>
    </div>

</template>

<style scoped>
.part{
    height: 100%;
    display: flex;
    align-items: center;
    background-color: white;
}
.part .part1{
    z-index: 0;
    display: flex;
    background-color: white;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
}
.part .part2{
    display: grid;
    width: 80%;
    height: 70%;
    grid-auto-flow: column;
    grid-column: span 4;
    grid-gap: 20px 10px;
    grid-template-rows: repeat(2, 1fr);
    
}
.button{
    display: inline-block;
    box-sizing: content-box;
    width: 90%;
    height: 100%;
    border: 1px solid #F1F2F3;
    border-radius: 6px;
    background-color: #F6F7F8;
    color: #61666D;
    text-align: center;
    font-weight: 200;
    letter-spacing:2px;
    transition: background-color .3s, color .3s;
}
.part .part3{
    display: grid;
    width: 15%;
    grid-auto-flow: column;
    grid-column: span 4;
    grid-gap: 10px;
    grid-template-rows: repeat(2, 1fr);
    
}
</style>