<script setup lang="ts">
import useVuelidate from "@vuelidate/core"
import { email, helpers, required } from "@vuelidate/validators"
import nodemailer from "nodemailer"
import { computed, reactive } from "vue"

interface Message {
  fullName: string
  from: string,
  to: string,
  subject: string,
  text: string
}

const newMessage = reactive<Message>({
  fullName: "",
  from: "martinusmartinussaja@gmail.com",
  to: "",
  subject: "",
  text: ''
})

const rules = computed(() => ({
  fullName: {
    required: helpers.withMessage("Nama lengkap wajib diisi", required)
  },
  to: {
    required: helpers.withMessage("Email wajib diisi", required),
    email: helpers.withMessage("Format email tidak valid", email)
  },
  subject: {
    required: helpers.withMessage("Subject wajib diisi", required)
  },
  text: {
    required: helpers.withMessage("Pesan wajib diisi", required)
  },
}))

const v$ = useVuelidate(rules, newMessage, { $externalResults: {} })
async function sendMessage() {
  const isFormValid = await v$.value.$validate
  if (isFormValid) {
    alert("Success")
  }
  // alert("Failed")
  // const data = { ...newMessage.values }
  // const { fullName, from, to, subject, text } = data

  // alert(`${fullName} - ${from} - ${to} - ${subject} - ${text}`)
}
</script>
<template>
  <div>
    <form method="POST" class="border border-third rounded-lg p-4 mt-4 flex flex-col space-y-3 w-full">
      <div class=" flex w-full justify-between space-x-3">
        <div class="form-group flex flex-col text-left space-y-2 w-[50%]">
          <label class=" font-semibold text-primary text-sm">
            Your full name:
          </label>
          <input type="text" name="fullName" class="text-sm border border-third text-third-50 rounded-sm px-2 py-2 w-full"
            placeholder=" Enter full name here" required v-model="newMessage.fullName" @blur="v$.fullName.$touch">
          <div v-if="v$.fullName.$error">
            <span v-for="error of v$.fullName.$errors" :key="error.$uid"
              class=" text-red-500 transition delay-150 ease-in">
              {{ error.$message }}
            </span>
          </div>
        </div>
        <div class="form-group flex flex-col text-left space-y-2 w-[50%]">
          <label class=" font-semibold text-primary text-sm">
            Your email:
          </label>
          <input type="email" name="email" class="text-sm border border-third text-third-50 rounded-sm px-2 py-2 w-full"
            placeholder=" Enter email here" required v-model="newMessage.to" @blur="v$.to.$touch">
          <div v-if="v$.to.$error">
            <span v-for="error of v$.to.$errors" :key="error.$uid" class=" text-red-500 transition delay-150 ease-in">
              {{ error.$message }}
            </span>
          </div>
        </div>
      </div>
      <div class="form-group flex flex-col text-left space-y-2 w-full">
        <label class=" font-semibold text-primary text-sm">
          Your subject:
        </label>
        <input type="text" name="subject" class="text-sm border border-third text-third-50 rounded-sm px-2 py-2 w-full"
          placeholder="What it's about.." required v-model="newMessage.subject" @blur="v$.subject.$touch">
        <div v-if="v$.subject.$error">
          <span v-for="error of v$.subject.$errors" :key="error.$uid" class=" text-red-500 transition delay-150 ease-in">
            {{ error.$message }}
          </span>
        </div>
      </div>
      <div class="form-group flex flex-col text-left space-y-2 w-full">
        <label class=" font-semibold text-primary text-sm">
          Your message:
        </label>
        <textarea name="message"
          class="text-sm resize-none border border-third text-third-50 rounded-sm px-2 py-2 w-full min-h-20"
          placeholder="You can just say Hello or tell your project idea maybe i can help you." required
          v-model="newMessage.text" @blur="v$.text.$touch"></textarea>
        <div v-if="v$.text.$error">
          <span v-for="error of v$.text.$errors" :key="error.$uid" class=" text-red-500 transition delay-150 ease-in">
            {{ error.$message }}
          </span>
        </div>
      </div>
      <button @click.prevent="sendMessage" :disabled="v$.$invalid"
        class=" w-full p-2 bg-brand rounded-sm text-primary">Send Message</button>
    </form>
  </div>
</template>

