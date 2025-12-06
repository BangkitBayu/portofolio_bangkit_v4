<script setup lang="ts">
import InfoBox from '../InfoBox.vue';
import SkillMaster from '../SkillMaster.vue';
</script>
<template>
  <div id="about" class="flex flex-col min-h-screen items-center justify-center space-y-3 mt-36 lg:mt-0">
    <h1 class=" text-[#126de4] font-bold text-3xl">About Me</h1>
    <div class="p-2 space-y-2">
      <p class=" text-lg text-[#a2a2a2] text-center">Hello, I'am Bangkit Bayu Prasetyo, a Software Engineering
        Student was have 1+ years experience in Programming World with strong experince in web development.</p>
      <p class=" text-lg text-[#a2a2a2] text-center">In the future, I hope to be Profesional Software Engineer
        with critical problem solving, good communication and make something impact in tech world.</p>
    </div>
    <div class="item-box gap-4 w-full">
      <InfoBox title="1+" subtitle="Years Experience"></InfoBox>
      <InfoBox title="2" subtitle="Projects Completed"></InfoBox>
      <InfoBox title="16" subtitle="Years Old"></InfoBox>
    </div>
    <h1 class=" text-white font-bold text-2xl mt-2">My Skills</h1>

    <SkillMaster></SkillMaster>
  </div>
</template>

<style>
.item-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  place-content: center;

}
</style>
