<script setup>

defineProps({
  meubilaires: {
    type: Array,
    required: true
  },
  materials: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  materialTypes: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div class="stats stats-vertical sm:stats-horizontal shadow mb-5 w-full">

    <div class="stat">
      <div class="stat-title">Meubilaires</div>
      <div class="stat-value">{{ meubilaires.length }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">Matériaux</div>
      <div class="stat-value text-secondary">{{ materials.length }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">Catégories</div>
      <div class="stat-value">{{ categories.length }}</div>
    </div>

    <div class="stat">
      <div class="stat-title">Type de matériaux</div>
      <div class="stat-value text-secondary">{{ materialTypes.length }}</div>
    </div>

  </div>
</template>

<style scoped>

</style>