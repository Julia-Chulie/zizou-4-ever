<script setup>

defineProps({
  entreprises: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <caption class="text-secondary text-xl font-bold">Entreprises</caption>
      <thead>
      <tr>
        <th>Nom</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="e of entreprises">
        <td>{{ e.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>