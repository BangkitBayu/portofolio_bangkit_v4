<script setup lang="ts">
function switchTheme() {
  alert("light mode")
}
</script>
<template>
  <div>
    <header class=" sticky top-0 p-3 flex justify-around items-center bg-[#050813cb]">
      <div class="logo">
        <h1 class=" font-bold text-xl text-[#126de4]">Bangkit<span class=" font-extrabold text-white">.</span></h1>
      </div>
      <nav>
        <ul class="flex space-x-4 items-center justify-center">
          <li><a href="#"
              class=" text-sm text-[#8f8f8f] font-medium hover:text-[#126de4] transition delay-75 ease-in-out">Home</a>
          </li>
          <li><a href="#about"
              class=" text-sm text-[#8f8f8f] font-medium hover:text-[#126de4] transition delay-75 ease-in-out">About</a>
          </li>
          <li><a href="#projects"
              class=" text-sm text-[#8f8f8f] font-medium hover:text-[#126de4] transition delay-75 ease-in-out">Projects</a>
          </li>
          <li><a href="#contact"
              class=" text-sm text-[#8f8f8f] font-medium hover:text-[#126de4] transition delay-75 ease-in-out">Contact</a>
          </li>
        </ul>
      </nav>
      <button class="dark-mode-toggle" id="dark-mode-toggle" @click="switchTheme">
        <div class=" p-2 bg-[#1a1a1aab] border-none rounded-full hover:bg-[#1a1a1a] transition delay-75 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="text-[#8f8f8f]">
            <path fill="currentColor"
              d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 1q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179zM12 12" />
          </svg>
        </div>
      </button>
    </header>
  </div>
</template>
