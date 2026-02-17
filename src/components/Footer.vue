<script setup lang="ts"></script>

<template>
  <footer class=" border-y border-white/15 w-full mx-auto h-full ">
    <section class=" flex flex-col space-y-3 border-r border-white/15 p-5">
      <div class="logo">
        <h1 class=" text-xl text-brand font-bold">Bangkit</h1>
      </div>
      <p class=" text-white/50 text-balance font-normal text-sm max-w-sm">I'm Bangkit - a Software Engineer, Fullstack Web
        Developer, and Programming Content Creator.</p>
      <p class=" text-white/45 text-balance font-normal text-sm">&copy; <span>{{ new Date().getFullYear() }}</span>
        Bangkit Bayu Prasetyo</p>
    </section>
    <section class="flex justify-around items-center p-5">
      <div class=" general">
        <h1 class="text-white/80 font-medium text-sm">General</h1>
        <ul>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Home</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">About</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Projects</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Contact</router-link></li>
        </ul>
      </div>
      <div class=" general">
        <h1 class="text-white/80 font-medium text-sm">General</h1>
        <ul>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Home</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">About</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Projects</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Contact</router-link></li>
        </ul>
      </div>
      <div class=" general">
        <h1 class="text-white/80 font-medium text-sm">General</h1>
        <ul>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Home</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">About</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Projects</router-link></li>
          <li><router-link :to="{name: 'home'}" class=" text-white/70 text-sm">Contact</router-link></li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<style scoped>
footer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
}
</style>
