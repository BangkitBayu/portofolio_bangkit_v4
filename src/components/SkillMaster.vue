<script setup lang="ts">
import { ref } from 'vue';

const skills: object = ref([
  {
    "name": "HTML",
    "status": 90
  },
  {
    "name": "CSS",
    "status": 90
  },
  {
    "name": "Javascript",
    "status": 70
  },
  {
    "name": "PHP",
    "status": 70
  },
  {
    "name": "Bootstrap",
    "status": 70
  },
  {
    "name": "Tailwind",
    "status": 50
  },
  {
    "name": "Mysql",
    "status": 70
  },
  {
    "name": "VueJs",
    "status": 25
  },
  {
    "name": "Laravel",
    "status": 25
  },
  {
    "name": "ExpressJs",
    "status": 70
  },
  {
    "name": "Python",
    "status": 50
  },
  {
    "name": "C#",
    "status": 50
  },
])
</script>
<template>
  <div class="item-box gap-4 w-full place-content-center">
    <div v-for="({name, status}, index) in skills" :key="index"
      class="border border-[#8f8f8f] text-center flex items-center justify-center px-3 py-1 rounded-lg bg-[#272727ab] space-x-3">
      <p class="text-[#8f8f8f] font-semibold text-sm">{{ name }}</p>
      <div v-if="parseInt(status) >= 90" class=" bg-gray-800 rounded-lg w-full">
        <div class="bar-90 w-[90%] bg-[#126de4] shadow-[0_0_5px_#126de4] rounded-lg">
          <p class="text-white text-sm">{{ status }}%</p>
        </div>
      </div>
      <div v-else-if="parseInt(status) >= 70" class=" bg-gray-800 rounded-lg w-full">
        <div class="bar-70 w-[70%] bg-[#126de4] shadow-[0_0_5px_#126de4] rounded-lg">
          <p class="text-white text-sm">{{ status }}%</p>
        </div>
      </div>
      <div v-else-if="parseInt(status) >= 50" class=" bg-gray-800 rounded-lg w-full">
        <div class="bar-50 w-[50%] bg-[#126de4] shadow-[0_0_5px_#126de4] rounded-lg">
          <p class="text-white text-sm">{{ status }}%</p>
        </div>
      </div>
      <div v-else-if="parseInt(status) >= 25" class=" bg-gray-800 rounded-lg w-full">
        <div class="bar-25 w-[25%] bg-[#126de4] shadow-[0_0_5px_#126de4] rounded-lg">
          <p class="text-white text-sm">{{ status }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-box {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

/* .bar-90 {
  animation: fill-bar-90 2s ease-in forwards;
}

.bar-70 {
  animation: fill-bar-90 2s ease-in forwards;
}

@keyframes fill-bar-90 {
  from {
    width: 0%;
  }

  to {
    width: 90%;
  }
}

@keyframes fill-bar-70 {
  from {
    width: 0%;
  }

  to {
    width: 50%;
  }
} */
</style>




