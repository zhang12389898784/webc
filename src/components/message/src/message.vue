<template>
	<Transition name="message">
		<div
			v-if="visible"
			class="message flex justify-center items-center"
		>
			<div>{{ props.text }}</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props=defineProps(["text"])
const visible=ref(true)
console.log(props)
defineExpose({
	visible
})
</script>
<style scoped>
.message {
	position: absolute;
	left: 50%;
	top: 10%;
	transform: translateX(-50%);
	background-color: #f0f9eb;
	color: #73c34b;
	padding: 6px 24px 6px 24px;
	border-radius: 8px;
}
.message-enter-active,
.message-leave-active {
	transition: opacity 0.5s ease;
}

.message-enter-from,
.message-leave-to {
	opacity: 0;
}
</style>