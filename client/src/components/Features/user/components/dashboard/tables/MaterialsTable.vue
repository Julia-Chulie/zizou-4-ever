<script setup>

defineProps({
  materials: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <caption class="text-secondary text-xl font-bold">Matériaux</caption>
      <thead>
      <tr>
        <th>Nom</th>
        <th>Type</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="m of materials">
        <td>{{ m.name }}</td>
        <td>{{ m.materialType.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>
