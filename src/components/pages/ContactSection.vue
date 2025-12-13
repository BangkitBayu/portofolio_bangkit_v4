<script setup lang="ts">
import TitlePage from '../TitlePage.vue';
import ContentTable from '../ContentTable.vue';
import SendMessageForm from '../Form.vue';

</script>
<template>
  <div id="contact" class=" flex flex-col min-h-screen items-center justify-center mt-36 lg:mt-18">
    <h3 class=" text-primary font-semibold text:lg lg:text-2xl mt-2 text-center">Let's Connect!</h3>
    <TitlePage title="Contact Me"></TitlePage>
    <div class="w-full mt-10 text-center lg:text-left space-y-5 flex justify-around flex-col lg:flex-row">
      <div class=" flex flex-col">
        <div class=" max-w-90">
          <h3 class=" text-primary font-bold text-lg lg:text-2xl">Contact</h3>
          <p class="text-sm font-normal text-secondary mt-2">This part contains short information of me such as Address,
            E-mail and Mobile Phone.</p>
        </div>
        <ContentTable></ContentTable>
        <hr class=" text-[#cfcfcf3a] mt-5">
        <div class="flex justify-between items-baseline">
          <h3 class=" text-primary font-semibold text:lg lg:text-xl mt-5">Follow Me</h3>
          <div class=" relative right-20 text-primary">
            <button class=" bg-[#0A66C2] rounded-full p-1  hover:-translate-x-2 transition delay-150 ease-in">
              <a href="https://www.linkedin.com/in/bangkit-bayu-prasetyo-b73690360" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none" />
                  <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
                    <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1" />
                  </circle>
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                    <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0" />
                    </path>
                    <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0" />
                    </path>
                    <path stroke-dasharray="24" stroke-dashoffset="24"
                      d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0" />
                    </path>
                  </g>
                </svg>
              </a>
            </button>
            <button
              class=" bg-[#C13584] rounded-full p-1 z-1 left-5 absolute hover:-translate-x-2 transition delay-150 ease-in">
              <a href="https://www.instagram.com/bangkit.bayu_?igsh=MW84aXNlZWh0ZGdnMg==" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                  <rect width="24" height="24" fill="none" />
                  <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
                    <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1" />
                  </circle>
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="72" stroke-dashoffset="72"
                      d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0" />
                    </path>
                    <path stroke-dasharray="28" stroke-dashoffset="28"
                      d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0" />
                    </path>
                  </g>
                </svg>
              </a>
            </button>
            <button
              class=" bg-[#272727] rounded-full p-1 z-2 left-10 absolute hover:-translate-x-2 transition delay-150 ease-in">
              <a href="https://github.com/BangkitBayu" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class=" text-primary">
                  <rect width="24" height="24" fill="none" />
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="32" stroke-dashoffset="32"
                      d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0" />
                    </path>
                    <path stroke-dasharray="10" stroke-dashoffset="10"
                      d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0" />
                    </path>
                  </g>
                </svg>
              </a>
            </button>
            <button
              class=" bg-[#25d365f5] rounded-full p-1 z-3 left-15 absolute hover:-translate-x-2 transition delay-150 ease-in">
              <a href="https://wa.me/6285813385224" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class=" text-primary">
                  <rect width="24" height="24" fill="none" />
                  <path fill="currentColor"
                    d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
                </svg>
              </a>
            </button>
            <button
              class=" bg-[#272727] rounded-full p-1 z-3 left-20 absolute hover:-translate-x-2 transition delay-150 ease-in">
              <a href="https://www.tiktok.com/@bangkitbay?_t=ZS-8uhermvCPkG&_r=1" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class=" text-primary">
                  <rect width="24" height="24" fill="none" />
                  <mask id="SVGFiQcHeLi">
                    <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path fill="#fff" stroke="none"
                        d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z" />
                      <path stroke="#000" stroke-dasharray="36" stroke-dashoffset="72" stroke-width="4"
                        d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;36" />
                      </path>
                      <path stroke="#000" stroke-dasharray="10" stroke-dashoffset="20" stroke-width="4" d="M18 2.5v8">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" values="20;10" />
                      </path>
                    </g>
                  </mask>
                  <rect width="24" height="24" fill="currentColor" mask="url(#SVGFiQcHeLi)" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div class=" flex flex-col">
        <div class=" max-w-full">
          <h3 class=" text-primary font-bold text-lg lg:text-2xl lg:text-left">Send Me a Message</h3>
          <p class="text-sm font-normal text-secondary mt-2">You can also contact me through my <strong
              class=" text-primary">E-mail</strong> for chitchat or collaborate with me.</p>
        </div>
        <SendMessageForm></SendMessageForm>
      </div>
    </div>
  </div>
</template>
