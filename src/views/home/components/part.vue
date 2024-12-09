<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, onMounted } from 'vue';
const props = defineProps(["icon","name","color","height"]
)
let detail=computed(()=>{
    return {
        icon:props.icon,
        name:props.name,
        color:props.color,
        height:props.height||"30px"
    }
})
</script>

<template>
<div class="part_son">
<Icon :icon="detail.icon" :height="detail.height"></Icon>
{{detail.name}}
</div>

</template>

<style scoped>
    .part_son{
        cursor: pointer;
        align-items:center ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: small;
    }
</style>
