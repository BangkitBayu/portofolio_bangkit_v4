<script setup lang="ts">
import Layout from '@/Layout.vue';
import Button from '@/components/Button.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import gsap from 'gsap';

import projectPhoto1 from '@/assets/img/netflash.jpg'
import { onMounted } from 'vue';

onMounted(() => {
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".display-projects",
      start: "top bottom",
      toggleActions: "play none none reverse",
      // markers: true
    },
    opacity: 0,
    yPercent: 100,
    duration: 2,
    ease: "power4.out",
    stagger: 0.2,
  })
})

const goToContactSection = (() => {
  window.location.href = "#contact"
})

</script>
<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #main>
      <main>
        <section class="flex flex-col min-h-screen items-center justify-center lg:mt-0 hero-gradient">
          <div class=" flex justify-center items-center flex-col mx-auto space-y-3">
            <h1 class=" text-white font-bold text-2xl lg:text-5xl">Hello, I'am <span
                class=" text-3xl lg:text-6xl text-brand">Bangkit Bayu</span></h1>
            <p class=" text-sm lg:text-xl text-gray-300 w-full lg:w-135 text-center">A Innovative, High Curiosity and Love
              To
              Learn developer,
              specialize
              on website development, ready for collaborate and elevate your bussiness.</p>
            <div
              class=" pl-4 rounded-xl bg-[hsla(0,0%,14%,1)] flex flex-wrap items-center flex-1 justify-between border-l border-y border-[hsl(0,0%,28%)] w-full space-x-6 relative">
              <p class=" text-white text-sm font-medium">Interesting collaborate with me?</p>
              <Button :id="'Btn'" :label="'Contact me'" :variant="'primary'" @click="goToContactSection"></Button>
            </div>
          </div>
        </section>

        <section class="flex flex-col min-h-screen items-center justify-center relative">
          <SectionTitle :label="'Featured Projects'"></SectionTitle>
          <div class="display-projects w-full px-5 mt-10">
            <router-link to="/projects">
              <div
                class=" card max-w-[400px] border border-white/10 shadow-sm rounded-xl group overflow-hidden absolute bottom-0">
                <img :src="projectPhoto1" alt="project photo 1" class=" card-thumbnail w-full rounded-xl">
                <div class=" card-body flex flex-col mx-auto px-4 py-2">
                  <h1 class=" text-2xl text-white/80 font-bold">Netflash</h1>
                  <p class=" text-white/40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a, quidem, rem
                    aut quas fugit molestiae
                    officia at harum ratione provident tempora, qui expedita minus exercitationem. Quibusdam magni
                    assumenda
                    enim!</p>
                </div>
              </div>
            </router-link>
            <router-link to="/projects">
              <div class=" card max-w-[400px] border border-white/10 shadow-sm rounded-xl group overflow-hidden">
                <img :src="projectPhoto1" alt="project photo 1" class=" card-thumbnail w-full rounded-xl">
                <div class=" card-body flex flex-col mx-auto px-4 py-2">
                  <h1 class=" text-2xl text-white/80 font-bold">Netflash</h1>
                  <p class=" text-white/40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a, quidem, rem
                    aut quas fugit molestiae
                    officia at harum ratione provident tempora, qui expedita minus exercitationem. Quibusdam magni
                    assumenda
                    enim!</p>
                </div>
              </div>
            </router-link>
            <router-link to="/projects">
              <div
                class=" card max-w-[400px] border border-white/10 shadow-sm rounded-xl group overflow-hidden absolute bottom-8">
                <img :src="projectPhoto1" alt="project photo 1" class=" card-thumbnail w-full rounded-xl">
                <div class=" card-body flex flex-col mx-auto px-4 py-2">
                  <h1 class=" text-2xl text-white/80 font-bold">Netflash</h1>
                  <p class=" text-white/40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a, quidem, rem
                    aut quas fugit molestiae
                    officia at harum ratione provident tempora, qui expedita minus exercitationem. Quibusdam magni
                    assumenda
                    enim!</p>
                </div>
              </div>
            </router-link>
          </div>
        </section>
      </main>
    </template>

    <template #footer>
      <Footer></Footer>
    </template>
  </Layout>
</template>

<style scoped>
.hero-gradient {
  background-color: #020617;
  background-image: linear-gradient(180deg,
      rgba(30, 90, 235, 0.15) 0%,
      rgba(45, 80, 228, 0.15) 20%,
      rgba(2, 6, 23, 0) 60%);
}

.display-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
</style>

