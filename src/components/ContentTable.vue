<script setup lang="ts">

  const TableProps: Object = defineProps({
    headData : Array,
    rowData: Array
  })
</script>
<template>
  <div class=" relative border border-[#b5b5b593] rounded-xl overflow-x-auto">
    <table class="">
      <thead class=" text-[#cecece] font-extrabold text-left border-b border-[#b5b5b593]">
        <tr>
          <th scope="col" class="px-8 py-2">Contact</th>
          <th scope="col" class="px-8 py-2">Detail</th>
        </tr>
      </thead>
      <tbody class=" text-[#bebebee7] font-medium text-left">
        <tr>
          <td scope="row" class="px-8 py-2 font-normal">Location</td>
          <td scope="row" class="px-8 py-2 font-normal" >Trenggalek, Jawa Timur, Indonesia</td>
        </tr>
        <tr>
          <td scope="row" class="px-8 py-2 font-normal">Email</td>
          <td scope="row" class="px-8 py-2 font-normal" ><a href="mailto:martinusmartinussaja@gmail.com">martinusmartinussaja@gmail.com</a></td>
        </tr>
        <tr>
          <td scope="row" class="px-8 py-2 font-normal">Location</td>
          <td scope="row" class="px-8 py-2 font-normal" >Trenggalek, Jawa Timur, Indonesia</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
