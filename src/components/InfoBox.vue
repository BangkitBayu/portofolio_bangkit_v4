<script setup lang="ts">
const props = defineProps({
  title: String,
  subtitle: String
})
</script>
<template>
  <div class=" border border-[#8f8f8f] rounded-xl text-center px-3 py-2 lg:px-5 lg:py-3 bg-[#272727ab] hover:border-[#126de4] hover:shadow-[0_0_3px_#126de4] transition delay-100 ease-in">
    <h1 class=" font-bold text-xl lg:text-3xl text-[#126de4]">{{ props.title }}</h1>
    <p class="text-sm font-normal text-[#8f8f8f]">{{ props.subtitle }}</p>
  </div>
</template>
