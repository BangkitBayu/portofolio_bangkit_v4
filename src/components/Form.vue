<script setup lang="ts"></script>
<template>
  <div>
    <form method="POST" class="border border-third rounded-lg p-4 mt-4 flex flex-col space-y-4 w-full">
      <div class=" flex w-full justify-between space-x-3">
        <div class="form-group flex flex-col text-left space-y-2 w-[50%]">
          <label class=" font-semibold text-primary text-sm">
            Your full name:
          </label>
          <input type="text" name="fullName" class=" border border-third text-third-50 rounded-sm px-2 py-2 w-full"
            placeholder=" Enter full name here" required>
        </div>
        <div class="form-group flex flex-col text-left space-y-2 w-[50%]">
          <label class=" font-semibold text-primary text-sm">
            Your email:
          </label>
          <input type="email" name="email" class=" border border-third text-third-50 rounded-sm px-2 py-2 w-full"
            placeholder=" Enter email here" required>
        </div>
      </div>
      <div class="form-group flex flex-col text-left space-y-2 w-full">
        <label class=" font-semibold text-primary text-sm">
          Your message:
        </label>
        <textarea name="message"
          class=" resize-none border border-third text-third-50 rounded-sm px-2 py-2 w-full min-h-20"
          placeholder="You can just say Hello or tell your project idea maybe i can help you." required></textarea>
      </div>
      <button type="submit" class=" w-full p-2 bg-brand rounded-sm text-primary">Send Message</button>
    </form>
  </div>
</template>

