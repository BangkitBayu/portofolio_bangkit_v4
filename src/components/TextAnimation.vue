<script setup lang="ts"></script>
<template>
  <section class="animation mt-4">
    <div class="first">
      <div class=" text-xl">Freelancer-Web-Developer</div>
    </div>
    <div class="second">
      <div class=" text-xl">App-Developer</div>
    </div>
    <div class="third">
      <div class=" text-xl">Software-Engineer</div>
    </div>
    <!-- <div class="fourth">
      <div class=" text-xl">Tech-Enthusiast</div>
    </div> -->
  </section>
</template>

<style scoped>
.animation {
  height: 50px;
  overflow: hidden;
}

.animation>div>div {
  text-align: center;
  color: #d4d4d4;
  font-weight: bold;
  height: 2.81rem;
  margin-bottom: 3.5rem;
  display: inline-block;
}

.animation div:first-child {
  animation: text-animation 8s infinite;
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }

  10% {
    margin-top: 0;
  }

  20% {
    margin-top: -5.62rem;
  }

  30% {
    margin-top: -5.62rem;
  }

  40% {
    margin-top: -11.24rem;
  }

  60% {
    margin-top: -11.24rem;
  }

  70% {
    margin-top: -5.62rem;
  }

  80% {
    margin-top: -5.62rem;
  }

  90% {
    margin-top: 0;
  }

  100% {
    margin-top: 0;
  }
}
</style>
