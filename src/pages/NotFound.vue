<script setup lang="ts"></script>
<template>
  <div class=" flex min-h-screen items-center justify-center flex-col space-y-2">
    <h1 class=" text-white font-bold text-4xl">404</h1>
    <h3 class=" text-white text-2xl font-bold">Page Not Found</h3>
    <router-link class=" text-gray-300 mt-4" :to="{name: 'home'}">
      Back to home
    </router-link>
  </div>
</template>
