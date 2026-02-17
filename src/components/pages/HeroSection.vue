<script setup lang="ts">
import Button from '../Button.vue';
const goToContactSection = (() => {
  window.location.href = "#contact"
})
</script>
<template>
  <div class=" flex flex-col min-h-screen items-center justify-center lg:mt-0 hero-gradient">
    <div class=" flex justify-center items-center flex-col mx-auto space-y-3">

      <h1 class=" text-white font-bold text-2xl lg:text-5xl">Hello, I'am <span
          class=" text-3xl lg:text-6xl text-brand">Bangkit Bayu</span></h1>
      <p class=" text-sm lg:text-xl text-gray-300 w-full lg:w-135 text-center">A Innovative, High Curiosity and Love To
        Learn developer,
        specialize
        on website development, ready for collaborate and elevate your bussiness.</p>
      <div
        class=" pl-4 rounded-xl bg-[hsla(0,0%,14%,1)] flex flex-wrap items-center flex-1 justify-between border-l border-y border-[hsl(0,0%,28%)] w-full space-x-6 relative">
        <p class=" text-white text-sm font-medium">Interesting collaborate with me?</p>
        <Button :id="'Btn'" :label="'Contact me'" :variant="'primary'" @click="goToContactSection"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-gradient {
  background-color: #020617;
  background-image: linear-gradient(180deg,
      rgba(30, 90, 235, 0.15) 0%,
      rgba(45, 80, 228, 0.15) 20%,
      rgba(2, 6, 23, 0) 60%);
}
</style>

