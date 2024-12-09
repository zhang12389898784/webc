<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { computed, onMounted } from 'vue';
const props = defineProps(["icon","name","color"]
)
let detail=computed(()=>{
    return {
        icon:props.icon,
        name:props.name,
        color:props.color
    }
})
</script>

<template>
<div class="part_son">
<Icon :icon="detail.icon" height="30px" :style="{color: detail.color}" style="margin-right: 6px;"></Icon>
{{detail.name}}
</div>

</template>

<style scoped>
    .part_son{
        cursor: pointer;
        align-items:center ;
        display: flex;
        flex-direction: row;
        font-size: small;
    }
</style>
