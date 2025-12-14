<script setup lang="ts">
import TitlePage from '../TitlePage.vue';
import ProfileStats from '../ProfileStats.vue';
</script>
<template>
  <div id="about" class="flex flex-col min-h-screen items-center justify-center space-y-3 mt-36 lg:mt-0">
    <TitlePage title="About Me"></TitlePage>
    <div class="p-2 space-y-2">
      <p class=" text-sm md:text-lg lg:text-lg text-[#a2a2a2] text-center truncate-2">Hello, I'am Bangkit Bayu Prasetyo, a
        Software Engineering
        Student was have 1+ years experience in Programming World with strong experince in web development.In the future,
        I hope to be Profesional Software Engineer
        with critical problem solving, good communication and make something impact in tech world.</p>
    </div>
    <ProfileStats></ProfileStats>
  </div>
</template>

