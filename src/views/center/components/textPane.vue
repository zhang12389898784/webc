<script setup lang="ts">
import { ref } from 'vue';
import ContextMenu from './ContextMenu.vue';
const x=ref()
const y=ref()
const startX=ref()
const startWidth=ref()
let isResizing:boolean;
const  startY=ref()
const refLeft = ref();
const refRight = ref();
function startResize(event: { clientX: any; }) {
      startY.value = event.clientY;
      startX.value = event.clientX;
      console.log(startX)
      startWidth.value = refRight.offsetHeight;
      isResizing = true;

      window.addEventListener('mousemove',doResize);
      window.addEventListener('mouseup',stopResize);
    }
    function doResize(event: { clientX: number; }) {
      if (isResizing) {
        console.log(event.clientY,'this.startWidth')
        var deltaY = event.clientY -startY.value;
        y.value = deltaY+"";
        var deltaX = event.clientX -startX.value;
        x.value = deltaX+"";
        console.log(startX.value)
      }
    }
    function stopResize(this: any) {
      this.isResizing = false;
      window.removeEventListener('mousemove', doResize);
      window.removeEventListener('mouseup', stopResize);
    }


</script>

<template>
<div class="content">
	<div class="w-2/4 h-3/4 border border-solid resize">asasd</div>
</div>
</template>

<style scoped lang="less">
.content{
    height: 100%;
    width:50vh;
    display: flex;
    border: solid 1px #1d1a1a;
    .left {
      flex: 1;
      height: 100%;
      min-width: 200px;
      width:600px;
        border: solid 1px #1d1a1a;
    }
    .resize {
      cursor: col-resize;
      height: 100%;
      width: 8px;
      border: solid 1px #1d1a1a;
    }
    .right {
      width: calc(100% - 600px);
      min-width: calc(100% - 600px);

      border: solid 1px #1d1a1a;
      background-color: #1d1a1a;
    }
  }
</style>
