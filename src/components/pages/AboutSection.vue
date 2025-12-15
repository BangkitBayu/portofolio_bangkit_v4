<script setup lang="ts">
import TitlePage from '../TitlePage.vue';
import GithubProfile from '../GithubProfile.vue';
</script>
<template>
  <div id="about" class="flex flex-col min-h-screen items-center justify-center space-y-3 mt-36 lg:mt-0">

    <div class=" p-2  rounded-lg w-full bg-linear-to-r from-brand via-accent to-accent-50 shadow-2xl">
      <GithubProfile></GithubProfile>
    </div>

  </div>
</template>

