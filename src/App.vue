<script setup lang="ts">
import Jjj from 'npm-zcx-test/111/src/components/jjj.vue';
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
proxy.$in()
</script>

<template>
    <!-- <Jjj></Jjj> -->
<RouterView></RouterView>
<!-- <div class="line">
                第三方登录
     </div> -->
</template>
<style scoped>
.line {
    display: flex;
    flex-direction: row;
    color: #ccc;
    font-size: 18px;
    font-weight: bolder;
}
 
.line:before,
.line:after {
    content: "";
    flex: 0.8 0.8;
    border-bottom: 2px solid #ccc;
    margin: auto;
}
</style>
