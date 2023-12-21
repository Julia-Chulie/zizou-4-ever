<script setup>

defineProps({
  categories: {
    type: Array,
    required: true
  }
})

</script>

<template>
<div class="overflow-x-auto">
    <table class="table">
      <caption class="text-secondary text-xl font-bold">Catégories</caption>
      <thead>
      <tr>
        <th>Nom</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="c of categories">
        <td>{{ c.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>