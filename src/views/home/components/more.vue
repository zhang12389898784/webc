<script setup lang="ts">
const props = defineProps(["moredata"])
</script>

<template>
<a-popover >
    <template #content>
      <template v-for="(item,index) in props.moredata">
        <p style="cursor: pointer;">{{ item }}</p>
      </template>
    </template>
    <button class="button">更多</button>
  </a-popover>

</template>

<style scoped>
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
    font-weight: 400;
    letter-spacing:2px;
    transition: background-color .3s, color .3s;
}
</style>