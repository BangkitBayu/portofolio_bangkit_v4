<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>
<template>
  <div>
    <h1 class="text-[#126de4] font-bold text-3xl lg:text-4xl">{{ props.title }}</h1>
  </div>
</template>
