<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  techStacks: Array,
  imagePath: String,
  liveAvailable: {
    type: Boolean,
    default: false
  },
  liveUrl: String
})
</script>
<template>
  <div
    class=" flex flex-col  w-full h-full text-white border border-[hsl(0,0%,18%)] rounded-xl bg-[hsl(0,0%,10%)] group overflow-hidden hover:border-brand">
    <img :src="props.imagePath" alt="card-image"
      class=" rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full ease-linear">
    <div class="card-content container p-4 flex flex-col w-full h-full">
      <h1 class=" font-bold text-lg group-hover:text-brand transition-colors delay-100 ease-linear">
        {{ props.title }}</h1>
      <p class="text-sm text-gray-400 mt-1">{{ props.description }}</p>
      <hr class=" text-[hsl(0,0%,18%)] mt-3">
      <ul class="flex gap-2 flex-wrap py-2">
        <li class=" text-gray-400 text-xs font-medium px-3 py-1 bg-[hsl(0,0%,15%)] rounded-lg border border-[hsl(0,0%,18%)] grow"
          v-for="(tech,index) in props.techStacks" :key="index">
          {{ tech }}
        </li>
      </ul>
      <hr class=" text-[hsl(0,0%,18%)]">
        <a v-if="props.liveAvailable" :href="props.liveUrl" target="__blank">
          <button
            class=" text-xs px-3 py-2 w-full bg-[hsl(0,0%,15%)] mt-4 rounded-lg group-hover:bg-brand transition-colors delay-100 ease-linear border border-[hsl(0,0%,18%)]">Live
            demo</button>
        </a>
        <a v-else>
          <button disabled
            class=" text-xs px-6 py-2 w-full mt-4 text-white bg-[#2b2b2bab] rounded-lg transition delay-100 ease-linear opacity-50 border border-[hsl(0,0%,18%)]">Ups,
            demo not available</button>
        </a>
    </div>
  </div>
</template>

<style scoped>
.dot {
  animation: blink 3.5s linear infinite;
}

@keyframes blink {
  25% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  75% {
    opacity: 1;
  }
}
</style>
