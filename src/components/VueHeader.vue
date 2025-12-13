<script setup lang="ts">
import { ref } from 'vue';

const showNavbar = ref<boolean>(false)

let y = ref<number>(0)
window.addEventListener("scroll", () => {
  y.value = window.scrollY
})

function switchTheme() {
  alert("light mode")
}
</script>
<template>
  <div>
    <header class=" fixed w-full top-0 px-6 py-4 flex justify-between items-center"
      :class="{' backdrop-blur-3xl transition-colors delay-150 ease-in bg-[#0c183ab6]' : y > 100 , 'transition-colors delay-150 ease-out bg-transparent' : y < 100}">
      <div class="logo">
        <h1 class=" font-bold text-xl lg:text-2xl text-brand"><a href="#">Bangkit</a></h1>
      </div>
      <nav class="hidden md:block lg:block">
        <ul class="flex text-sm space-x-4 items-center justify-center">
          <li><a href="#" class="  text-secondary font-medium hover:text-brand transition delay-75 ease-in-out">Home</a>
          </li>
          <li><a href="#about"
              class="  text-secondary font-medium hover:text-brand transition delay-75 ease-in-out">About</a>
          </li>
          <li><a href="#projects"
              class="  text-secondary font-medium hover:text-brand transition delay-75 ease-in-out">Projects</a>
          </li>
          <li><a href="#contact"
              class="  text-secondary font-medium hover:text-brand transition delay-75 ease-in-out">Contact</a>
          </li>
        </ul>
      </nav>

      <div class=" relative lg:hidden md:hidden block shadow-2xl">
        <button @click="showNavbar = !showNavbar"
          class="bg-accent relative text-primary rounded-2xl px-5 py-2 flex space-x-2 items-center group hover:bg-accent-50 md:hidden lg:hidden">
          <p>Menu</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            :class="{'rotate-180 transition-transform delay-150 ease-in-out' : showNavbar, '-rotate-360 transition-transform delay-150 ease-in-out' : !showNavbar}">
            <rect width="24" height="24" fill="none" />
            <path fill="currentColor"
              d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19" />
          </svg>
        </button>

        <nav v-show="showNavbar"
          class=" absolute mt-2 bg-accent rounded-xl p-2 right-0 -left-2.5 w-52 border border-[#cfcfcf3a] md:hidden lg:hidden backdrop-brightness-75 backdrop-blur-2xl transition-all ease-in-out delay-200">
          <ul class="flex flex-col space-y-2 text-sm">
            <li class=" group hover:bg-accent-50 py-1 px-2 rounded-lg"><a href="#"
                class="  text-secondary font-medium group-hover:text-primary transition delay-75 ease-in-out">Home</a>
            </li>
            <li class=" group hover:bg-accent-50 py-1 px-2 rounded-lg"><a href="#about"
                class="  text-secondary font-medium group-hover:text-primary transition delay-75 ease-in-out">About</a>
            </li>
            <li class=" group hover:bg-accent-50 py-1 px-2 rounded-lg"><a href="#projects"
                class="  text-secondary font-medium group-hover:text-primary transition delay-75 ease-in-out">Projects</a>
            </li>
            <li class=" group hover:bg-accent-50 py-1 px-2 rounded-lg"><a href="#contact"
                class="  text-secondary font-medium group-hover:text-primary transition delay-75 ease-in-out">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <button
        class="dark-mode-toggle p-2 bg-accent border-none rounded-full hover:bg-accent-50 transition delay-75 ease-in-out flex items-center"
        id="dark-mode-toggle" @click="switchTheme">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="text-secondary">
          <path fill="currentColor"
            d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 1q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.745l2.111 2.135zM18.72 19.439l-2.117-2.141l.652-.702l2.16 2.098zM16.596 6.745l2.098-2.16l.745.695l-2.135 2.111zM4.562 18.72l2.14-2.117l.664.652l-2.08 2.179zM12 12" />
        </svg>
      </button>
    </header>
  </div>
</template>


