<script setup lang="ts">
const props = defineProps({
  label: String
})
</script>
<template>
  <h1 class=" text-white font-bold text-3xl lg:text-6xl text-center">{{ props.label }}</h1>
</template>
