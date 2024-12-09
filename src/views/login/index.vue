<template>
    <div class="container" ref="container">
        <div>
            
        </div>
        <div>
            <div style="justify-content: right;display: flex">
                <Icon :icon="change" width="30" @click="changesun()"></Icon>
            </div>
            <div class="login-wrapper" style="background-color: rgba(0,0,0,0);">
                <div class="header">Login</div>
                <div class="form-wrapper">
                    <input type="text" name="username" placeholder="username" class="input-item">
                    <input type="password" name="password" placeholder="password" class="input-item">
                    <div ref="btn1" class="btn" @click="login()">登录</div>
                    <div ref="btn2" class="btn" @click="login()">注册</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import header1 from "../home/components/header.vue"
import router from '@/router';
import { onMounted, ref } from 'vue';
import { ElMessage} from "@/components/message/index"
const change = ref("material-symbols:sunny-outline-rounded")
const changesun = () => {
    console.log(888)
    if (change.value == "material-symbols:sunny-outline-rounded") {
        change.value = "material-symbols:tsunami-rounded"
        console.log(document.documentElement)
        container.value.setAttribute("theme", "dark")
    }
    else {
        change.value = "material-symbols:sunny-outline-rounded"
        container.value.setAttribute("theme", "light")
    }
}
const name = ref()
const container = ref()
const btn1 = ref()
const btn2 = ref()
var login = () => {
    alert("login success")
    router.push('/center')
}
onMounted(() => {
    ElMessage({
        text: "欢迎来到我的网站！"
    })
    document.body.style.overflow = "hidden"
})
</script>
<style>
:root{
    --backColor:#fff;
    --backImg:url("../../assets/login-bg.svg");
}
div[theme="dark"]{
    --backColor:#a68888;
    --backImg:url("../../assets/login-bg-dark.svg");
}
</style>
<style scoped lang="less">

.container{
    display: grid;
    grid-template-columns: 50% 50%;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 2560px;
    height: 100vh;
    margin-left: 0%;
    background-color: var(--backColor);
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin-left: -48%;
        background-repeat: no-repeat;
        background-position: 100%;
        background-size: auto 100%;
        background-image: var(--backImg);
    }
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: auto 100%;
    /* stylelint-disable-next-line media-query-no-invalid */
}

.login-wrapper {
    background-color: #fff;
    width: 358px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: absolute;
    transform: translate(50%, 30%);
}

.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
}

.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    
    background-color: var(--backColor);
    padding: 10px;
    border: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}

.btn {
    cursor: pointer;
    text-align: center;
    padding: 10px;
    margin: 0 auto;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #839cab, #426ec4);
    color: #fff;
}

.msg {
    text-align: center;
    line-height: 88px;
}

a {
    text-decoration-line: none;
    color: #abc1ee;
    
}
</style>
