<script setup lang="ts">

</script>

<template>
  <a-card size="small" style="width: 100%">
    <div class="flex w-full h-full justify-between">
      <a-avatar :size="64">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <div class="flex-auto ml-2">
        <div class='text-base font-bold'>
          作者名字
        </div>
        <div class="text-sm text-gray-500">
          介绍
        </div>
        <div class="h-2">
          <button class="button1">关注</button>
        </div>
      </div>
    </div>
  </a-card>
</template>

<style scoped>
.button1{
    box-sizing: border-box;
    padding: 0px 9px;
    line-height: 30px;
    height: 30px;
    border-radius: 6px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: 0.3s all;
    background-color: transparent;
    border: 1px solid #FF6699
}
.button1:hover{
  background-color: rgba(255, 102, 153,0.1);
}
</style>