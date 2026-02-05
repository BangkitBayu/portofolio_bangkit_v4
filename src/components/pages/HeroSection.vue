<script setup lang="ts">
import TextAnimation from '../TextAnimation.vue';
import avatar from "@/assets/img/avatar.png"
import cv from "@/assets/documments/cv_bangkit_bayu_prasetyo.pdf"
</script>
<template>
  <!-- <div class="flex flex-col lg:flex-row justify-between min-h-screen items-center"> -->
  <div class="flex items-center flex-col-reverse lg:flex-row gap-2 lg:min-h-screen hero-gradient px-6 py-32 lg:py-0">
    <div>
      <h1 class=" text-white font-bold text-2xl lg:text-5xl">Hello, I'am</h1>
      <h1 class=" text-[#126de4] font-bold text-3xl lg:text-5xl">Bangkit Bayu<span class="text-white"></span></h1>
      <TextAnimation></TextAnimation>
      <p class="text-sm lg:text-lg text-gray-400 font-normal">Innovative, High Curiosity and Love to
        Learn.</p>
      <div class="container mt-4 flex space-x-3">
        <a href="#projects">
          <button class="flex bg-[#ffffff] rounded-lg px-3 py-2 lg:px-6 lg:py-3 text-black justify-baseline items-center space-x-2
                                         hover:bg-brand hover:text-white transition delay-100 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <path
                  d="M2 14c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C4.787 7 6.19 7 9 7h6c2.809 0 4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C22 9.787 22 11.19 22 14s0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C19.213 21 17.81 21 15 21H9c-2.809 0-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C2 18.213 2 16.81 2 14m14-7c0-1.886 0-2.828-.586-3.414S13.886 3 12 3s-2.828 0-3.414.586S8 5.114 8 7" />
                <path d="m6 11l.652.202a18.3 18.3 0 0 0 10.696 0L18 11m-6 1v2" />
              </g>
            </svg>
            <p class=" text-sm">See My Work</p>
          </button>
        </a>
        <a :href="cv" download="">
          <button
            class="flex border rounded-lg px-3 py-2 lg:px-6 lg:py-3 text-[#8f8f8f] justify-baseline items-center space-x-2
                                        hover:border-brand hover:text-brand hover:bg-[#062348eb] transition delay-75 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M4 16.004V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1M12 4.5v11m3.5-3.5L12 15.5L8.5 12" />
            </svg>
            <p class=" text-sm">Download CV</p>
          </button>
        </a>
      </div>
    </div>

    <div class="mx-auto">
      <img :src="avatar" class="max-w-[750px] max-h-[750px] w-full h-full" alt="avatar">
    </div>
  </div>
</template>

<style scoped>
.hero-gradient {
 background-color: #020617;
  background-image: linear-gradient(
    200deg,
    rgba(30, 90, 235, 0.15) 0%,
    rgba(45, 80, 228, 0.15) 20%,
    rgba(2, 6, 23, 0) 60%
  );
}
</style>

