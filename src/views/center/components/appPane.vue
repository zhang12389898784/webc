<template>
	<div class="app-pane" @click="changeDrag()"> {{ isdrag? '拖拽':'缩放' }}</div>
<div style="border: 5px solid red;resize: both;overflow: scroll;position: relative;" ref="div" >
  fsadd
</div>
 </template>
 
 <script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import {getLog} from '../../../api/api'
	const isdrag=ref(true)
	function changeDrag(){
      isdrag.value=!isdrag.value
	  if(isdrag.value){
		div.value.style.resize='none'
		  drag()
	  }
	  else{
		div.value.style.resize='both'
		  div.value.onmousedown=null
		  div.value.onmousemove=null
		  div.value.onmouseup=null
	  }
    }
    const div=ref()
    function drag(){
		var dv = div.value;
		var isDown = false;
    let x,y,l,t;
		//鼠标按下事件
		dv.onmousedown = function(e) {
			//获取x坐标和y坐标
			x = e.clientX;
			y = e.clientY;


			//获取左部和顶部的偏移量
			l = dv.offsetLeft;
			t = dv.offsetTop;

			//开关打开
			isDown = true;
			//设置样式
			dv.style.cursor = 'move';
		}
		//鼠标移动
		dv.onmousemove = function(e) {
      console.log(x,y,l,t)
			if (isDown == false) {
				return;
			}
			//获取x和y
			var nx = e.clientX;
			var ny = e.clientY;
			//计算移动后的左偏移量和顶部的偏移量
			var nl = nx - (x - l);
			var nt = ny - (y - t);
			dv.style.left = nl + 'px';//盒子顶角左侧顶角的位置
			dv.style.top = nt + 'px';
		}
		//鼠标抬起事件
		dv.onmouseup = function() {
			//开关关闭
			isDown = false;
			dv.style.cursor = 'default';
		}
	}
    onMounted(() => {
      	drag()
        const param={
            page:1,
            size:10
        }
      getLog(param).then(res=>{
        console.log(res)
      })
    })
 </script>