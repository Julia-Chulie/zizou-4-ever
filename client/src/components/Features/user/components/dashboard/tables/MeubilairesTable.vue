<script setup>

defineProps({
  meubilaires: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <caption class="text-secondary text-xl font-bold">Meubilaires</caption>
      <thead>
      <tr>
        <th>Nom</th>
        <th>Matériaux</th>
        <th>Catégorie</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="meubilaire of meubilaires">
        <td>{{ meubilaire.name }}</td>
        <td>
          <ul>
            <li v-for="(mat, key, index) of meubilaire.material">{{ mat.name }}<span v-if="index != Object.keys(meubilaire.material).length - 1">, </span>
            </li>
          </ul>
        </td>
        <td>{{ meubilaire.category.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>