<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  status: {
    type: String,
    default: "Uncompleted"
  },
  techStacks: Array,
  imagePath: String,
  liveAvailable: {
    type: Boolean,
    default: false
  },
  liveUrl: {
    type: String,
    default: "#"
  }
})
</script>
<template>
  <div
    class=" flex flex-col max-w-[300px] max-h-[400px] w-full h-full text-white border border-[#8f8f8f] rounded-2xl bg-[#272727ab] group overflow-hidden">
    <img :src="props.imagePath" alt="card-image"
      class=" rounded-t-2xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full ease-linear">
    <div class="card-content container p-4 flex space-y-3 flex-col">
      <h1
        class=" font-bold text-xl group-hover:text-[#126de4] group-hover:text-shadow-[0_0_5px_126de4] transition delay-100 ease-linear">
        {{ props.title }}</h1>
      <p class=" font-medium text-sm text-[#b7b7b7]">{{ props.description }}</p>
      <hr class="text-[#636363]">
      <ul class="flex gap-2 flex-wrap">
        <li class="text-[#aaaaaa] text-xs font-medium px-5 py-1 bg-[#2b2b2bab] rounded-lg"
          v-for="(tech,index) in props.techStacks" :key="index">
          {{ tech }}
        </li>
      </ul>
      <div class="flex items-center justify-between space-x-1 mt-4 w-full">
        <a v-if="props.liveAvailable" :href="props.liveUrl">
          <button
            class=" text-xs px-6 py-2 bg-[#2b2b2bab] rounded-lg group-hover:bg-[#126de4] group-hover:shadow-[0_0_5px_#126de4] transition delay-100 ease-linear">Live
            demo</button>
        </a>
        <a v-else>
          <button disabled
            class=" text-xs px-6 py-2 text-white bg-[#2b2b2bab] rounded-lg transition delay-100 ease-linear opacity-50">Ups,
            demo not available</button>
        </a>
        <div class="flex items-center space-x-1">
          <div class="dot w-2 h-2 bg-[#3fcf3d] rounded-full"></div>
          <p class=" font-semibold text-xs text-[#3fcf3d]">{{ props.status }}</p>
        </div>
      </div>
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
