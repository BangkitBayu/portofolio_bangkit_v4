<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>
<template>
  <div>
    <h1 class=" text-brand font-bold text-3xl lg:text-6xl text-center">{{ props.title }}</h1>
  </div>
</template>
