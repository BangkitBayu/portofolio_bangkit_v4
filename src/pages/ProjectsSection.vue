<script setup lang="ts">

import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

import TitlePage from '../TitlePage.vue';
import CardItem from '../CardItem.vue';

// IMPORT RESOURCE
import project_img_1 from '@/assets/img/portofolio_bangkit.png';
import project_img_2 from '@/assets/img/netflash.jpg';
import project_img_3 from '@/assets/img/goloka_company_profile.png';

const projectsCollection = [
  {
    "title": "Netflashz Website",
    "description": "Netflashz is an all in one topup platfrom. On this project I was responsible for back-end.",
    "image": project_img_2,
    "techStacks": ["PHP", "Bootstrap", "Mysql", "Tripay Payment"],
    "liveAvailable": false
  },
  {
    "title": "Goloka Company Profile Website",
    "description": "Goloka is a Start-up company have focused on UMKM bussines, with aim to elevate their bussines. ",
    "image": project_img_3,
    "techStacks": ["HTML", "Taiwind CSS"],
    "liveAvailable": true,
    "liveUrl": "https://bangkitbayu.github.io/goloka-company-profile/"
  },
  {
    "title": "Bangkit Portofolio Website",
    "description": "Bangkit Portofolio is a place to personal branding and showcase my projects and skills.",
    "image": project_img_1,
    "techStacks": ["VueJS 3", "Taiwind CSS"],
    "liveAvailable": true,
    "liveUrl": "https://bangkitbayu.vercel.app"
  },
]

const plugin = Autoplay({
  delay: 2000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})

</script>
<template>
  <div id="projects" class=" min-w-full flex flex-col min-h-screen items-center justify-center space-y-6 mt-36 lg:mt-0">
    <TitlePage title="Projects"></TitlePage>

    <!-- Carousel in mobile -->
    <Carousel class="relative w-full max-w-xs lg:hidden" :plugins="[plugin]" @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')];">
      <CarouselContent class="p-1">
        <CarouselItem v-for="(project, index) in projectsCollection" :key="index">
          <CardItem :id="index" :title="project.title" :description="project.description" :image-path="project.image"
            :live-available="project.liveAvailable" :tech-stacks="project.techStacks" :live-url="project.liveUrl">
          </CardItem>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <!-- <CarouselPrevious></CarouselPrevious>
                            <CarouselNext></CarouselNext> -->
    <!-- </div> -->
    <div class=" hidden lg:block w-full">
      <div class=" grid grid-cols-3 gap-3 place-items-center">
        <CardItem v-for="(project, index) in projectsCollection" :key="index" :id="index" :title="project.title"
          :description="project.description" :image-path="project.image" :live-available="project.liveAvailable"
          :tech-stacks="project.techStacks" :live-url="project.liveUrl"></CardItem>
      </div>
    </div>
  </div>
</template>
