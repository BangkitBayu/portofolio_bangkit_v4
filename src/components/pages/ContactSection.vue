<script setup lang="ts">
import TitlePage from '../TitlePage.vue';
import ContentTable from '../ContentTable.vue';

const ContactTableData: Object = {
  headData: ["Contact", "Detail"],
  bodyData: {
    rowFirst: ["Location", "Trenggalek, Jawa Timur, Indonesia"],
    rowSecond: ["Email", "martinusmartinussaja@gmail.com"],
    rowThird: ["Phone", "+62 858-1338-5224"]
  }
}
</script>
<template>
  <div id="contact" class=" flex flex-col min-h-screen items-center justify-center space-y-4">
    <TitlePage title="Contact Me"></TitlePage>
    <div class="place-content-center place-items-center w-full"
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(500px , 1fr));">
      <div class=" flex flex-col space-y-3">
        <h3 class=" text-white font-bold text-2xl">Let's Connect!</h3>
        <ContentTable></ContentTable>
      </div>
    </div>
  </div>
</template>
