<script setup lang="ts">

const props = defineProps({
  id: String,
  type: { type: String, default: 'button' },
  label: String,
  variant: { type: String },
})

</script>

<template>
  <button :id="props.id" :type='props.type' :class="['px-5 py-3 text-sm text-white rounded-xl' , `btn-${props.variant}`]">
    {{ props.label }}
  </button>
</template>

<style scoped>
.btn-primary {
  background: var(--color-brand);
}
</style>
