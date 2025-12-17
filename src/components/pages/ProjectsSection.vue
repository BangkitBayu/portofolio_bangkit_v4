<script setup lang="ts">
import TitlePage from '../TitlePage.vue';
import CardItem from '../CardItem.vue';

// IMPORT RESOURCE
import project_img_1 from '@/assets/img/portofolio_bangkit.png';
import project_img_2 from '@/assets/img/netflash.jpg';
import project_img_3 from '@/assets/img/gogreen.png';


const techStacksPortofolioWebsite: Array<string> = ["VueJS 3", "Taiwind CSS"]
const techStacksNetflashzWebsite: Array<string> = ["PHP", "Bootstrap", "Jquery", "Mysql", "Tripay Payment"]
const techStacksGogreenWebsite: Array<string> = ["PHP", "Tailwind", "Jquery", "Mysql"]
</script>
<template>
  <div id="projects" class="flex flex-col min-h-screen items-center justify-center space-y-6 mt-36 lg:mt-0">
    <TitlePage title="Projects"></TitlePage>
    <div class=" w-full flex flex-wrap items-baseline justify-center space-x-4 space-y-5 lg:space-y-3">
      <CardItem title="My Porfolio Website" :image-path="project_img_1"
        description="This is my place to showcase about myself and my skill." :tech-stacks="techStacksPortofolioWebsite"
        status="Completed" :live-available="true"></CardItem>
      <CardItem title="Netflashz Topup" :image-path="project_img_2"
        description="Netflashz is a client project to available Topup platform with complete service."
        :tech-stacks="techStacksNetflashzWebsite" status="Completed" :live-available="false"></CardItem>
      <CardItem title="GoGreen" description="GoGreen is a website give educational to people about environment."
        :image-path="project_img_3" :tech-stacks="techStacksGogreenWebsite"></CardItem>
    </div>
  </div>
</template>
