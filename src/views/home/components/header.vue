<script setup lang="ts">
import { onMounted, ref } from 'vue';
import part from "./part.vue"
import {
    AppstoreOutlined,
    UploadOutlined
} from '@ant-design/icons-vue';
import { Icon } from '@iconify/vue';
import router from '@/router';
const props = defineProps(["bool"])
const header = ref()
const header_list = ["大会员", "消息", "动态", "历史", "创造中心"]
const icon_list = ["ant-design:read-filled", "ant-design:pushpin-twotone", "ant-design:reddit-square-filled", "ant-design:save-filled", "ant-design:usb-filled"]
onMounted(() => {
    if (props.bool) header.value.className = "header2"
    else window.addEventListener('scroll', (event) => {

        if (window.scrollY > 100)
            header.value.className = "header2"
        else
            header.value.className = "header"


    }, false)
})
const goLogin = () => {
    router.push("/login")
}
const value = ref('');
</script>

<template>
    <div class="header" ref="header">
        <div class="part_link">
            <AppstoreOutlined style="margin-left: 6px; margin-right: -6px;" />
            <RouterLink to="/" class="link">首页</RouterLink>
            <RouterLink to="/" class="link" @contextmenu="">番剧</RouterLink>
            <RouterLink to="/" class="link">直播</RouterLink>
            <RouterLink to="/" class="link">游戏中心</RouterLink>
            <RouterLink to="/" class="link">会员购</RouterLink>
            <RouterLink to="/" class="link">漫画</RouterLink>
            <RouterLink to="/" class="link">暂定</RouterLink>
            <RouterLink to="/" class="link">暂定</RouterLink>
            <UploadOutlined style="margin-left: 6px; margin-right: -6px;" />
            <RouterLink to="/" class="link">下载客户端</RouterLink>
        </div>
        <div class="part_search">
            <a-input-search v-model:value="value" size="large" placeholder="input search text" style="width: 600px;margin-top: 6px;" @search="" />
        </div>
        <div class="part_link">
            <div @click="goLogin">
                <Icon icon="ant-design:user-add-outlined" height="40px" style="cursor: pointer;"></Icon>
            </div>

            <template v-for="(value, key) in header_list">
                <part :icon="icon_list[key]" :name="header_list[key]"></part>
            </template>
            <a-button type="primary" danger>
                <UploadOutlined />投稿
            </a-button>
        </div>
    </div>
</template>

<style scoped lang="less">
.header {
    font-weight: 600;
    color: white;
    z-index: 999;
    position: fixed;
    height: 6%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0%);
    font-size: 15px;

    .part_link {
        color: white;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .part_link>.link {
        color: white;
        height: 20px;
        flex: auto;

        text-align: center;
        text-decoration: none;
        line-height: 25px;

        margin-right: 6px;
        margin-left: 6px;

        white-space: nowrap;
    }

    .part_search {
        flex: 1.5;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}

.header2 {
    color: black;
    z-index: 999;
    position: fixed;
    height: 6%;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;

    border-bottom: 0.5px solid rgb(181, 168, 168);
    font-size: small;

    .part_link {
        color: black;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .part_link>.link {
        color: black;
        height: 20px;
        flex: auto;

        text-align: center;
        text-decoration: none;
        line-height: 25px;

        margin-right: 6px;
        margin-left: 6px;

        white-space: nowrap;
    }

    .part_search {
        flex: 1.5;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
}
</style>