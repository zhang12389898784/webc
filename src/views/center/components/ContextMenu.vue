<script setup lang="ts">
import textPane from './itemPane.vue';
import { Icon } from '@iconify/vue/dist/iconify.js';

import { computed, createVNode, nextTick, onMounted, ref, render } from 'vue';
var a=ref()
const x=ref(0)
const y=ref(0)
var z=0;
const tele=ref()
var xmeun=computed(()=>{
  return 0
})
const data=[
        {
          label: 'cycv的图片',
          icon: 'bi:plus',
        },
        {
          label: 'Open不开',
          icon: 'bx:bxs-folder-open',
        },
      ]
interface event{
  preventDefault:()=>any;
  stopPropagation:()=>any;
  clientX:number;
  clientY:number;

}
      const contextmenu=(e:event)=>{
        // nextTick(()=>{
        //   console.log("nextTick")
        //   const list=document.getElementsByClassName("contextmenu")
        //   const listid=document.getElementById("app")
          
        //   console.log("closeMenu",list)
        //   console.log("closeMenu",listid)
        // })
        const list=document.getElementsByClassName("contextmenu")
        const listid=document.getElementById("app")
          
          console.log("closeMenu",list)
          console.log("closeMenu",listid)
        for(let i=0;i<list.length;i++){
          list[i].className="contextmenu1"
        }
        console.log(tele.value);
        if(tele.value!=undefined){
          tele.value.className="contextmenu"
        }
        
        
        
    e.preventDefault()
    e.stopPropagation()
    console.log('contextmenu')
    
    x.value=e.clientX
    y.value=e.clientY+window.scrollY
    console.log("x y >>> ", x.value, y.value);
} 
const closeMenu=()=>{
  x.value=0
}
onMounted(()=>{
 
    console.log("x y >>> ", x.value, y.value);
    window.addEventListener("click", closeMenu);
    window.addEventListener("contextmenu", closeMenu);
})
</script>

<template>

<div @contextmenu="contextmenu($event)">
    <div id="container" ref="a"></div>
    <Teleport to="body">
        <div ref="tele" v-if="x!=0" :style="{
        left: `${x}px`,
        top: `${y}px`,
        }" class="contextmenu">
            <template v-for="(item,index) in data">
               <div class="flex">
                <Icon :icon="item.icon"></Icon>{{ item.label }}<br>
               </div>
            </template>
          </div>

    </Teleport>


    <slot style="height: 100%;width: 100%;"></slot>
</div>
</template>

<style scoped>
.contextmenu {
position: absolute; /* 绝对定位 */
background-color: rgb(255, 255, 255); /* 半透明的红色背景 */
padding: 10px;
border: solid 0.2px rgb(218, 214, 214);
border-radius: 6px;
font-size: smaller;
}
.contextmenu1 {
display: none;
position: absolute; /* 绝对定位 */
background-color: rgb(255, 255, 255); /* 半透明的红色背景 */
padding: 10px;
border: solid 0.2px rgb(218, 214, 214);
border-radius: 6px;
}
</style>