<script setup>

defineProps({
  materialTypes: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <caption class="text-secondary text-xl font-bold">Type de matériaux</caption>
      <thead>
      <tr>
        <th>Nom</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="mt of materialTypes">
        <td>{{ mt.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>