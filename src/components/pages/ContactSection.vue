<script setup lang="ts">
import TitlePage from '../TitlePage.vue';
import ContentTable from '../ContentTable.vue';

</script>
<template>
  <div id="contact" class=" flex flex-col min-h-screen items-center justify-center">
    <h3 class=" text-primary font-semibold text:lg lg:text-2xl mt-2">Let's Connect!</h3>
    <TitlePage title="Contact Me"></TitlePage>
    <div class="place-content-center place-items-center w-full mt-10 lg:mt-8 text-center lg:text-left"
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(500px , 1fr));">
      <div class=" flex flex-col">
        <div class=" max-w-90">
          <h3 class=" text-primary font-bold text-lg lg:text-2xl">Contact</h3>
          <p class="text-sm font-normal text-secondary mt-2">This part contains short information of me such as Address,
            E-mail and Mobile Phone.</p>
        </div>
        <ContentTable></ContentTable>
      </div>
    </div>
  </div>
</template>
