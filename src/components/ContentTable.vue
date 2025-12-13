<script setup lang="ts">

  const TableProps: Object = defineProps({
    headData : Array,
    rowData: Array
  })
</script>
<template>
  <div class=" relative border border-[#bdbdbd71] rounded-lg overflow-x-auto mt-4">
    <table class="">
      <thead class=" text-[#c4c4c4] font-extrabold text-left border-b border-[#bdbdbd71]">
        <tr>
          <th scope="col" class="px-8 py-2 text-sm font-extrabold">Contact</th>
          <th scope="col" class="px-8 py-2 text-sm font-extrabold">Detail</th>
        </tr>
      </thead>
      <tbody class=" text-[#bdbdbdb3] font-medium text-left">
        <tr>
          <td scope="row" class="px-8 py-2 font-normal text-sm">Address</td>
          <td scope="row" class="px-8 py-2 font-normal text-sm" >Trenggalek, Jawa Timur, Indonesia</td>
        </tr>
        <tr>
          <td scope="row" class="px-8 py-2 font-normal text-sm">E-mail</td>
          <td scope="row" class="px-8 py-2 font-normal text-sm" ><a class=" text-blue-500 hover:underline transition delay-150 ease-in" href="mailto:martinusmartinussaja@gmail.com" target="_blank">martinusmartinussaja@gmail.com</a></td>
        </tr>
        <tr>
          <td scope="row" class="px-8 py-2 font-normal text-sm">Phone</td>
          <td scope="row" class="px-8 py-2 font-normal text-sm" >+62 858-1338-5224</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
