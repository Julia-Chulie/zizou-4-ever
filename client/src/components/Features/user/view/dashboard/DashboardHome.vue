<script setup>

import MeubilairesTable from "../../components/dashboard/tables/MeubilairesTable.vue";
import MaterialsTable from "../../components/dashboard/tables/MaterialsTable.vue";
import CategoriesTable from "../../components/dashboard/tables/CategoriesTable.vue";
import MaterialTypeTable from "../../components/dashboard/tables/MaterialTypeTable.vue";
import StatNumbers from "../../components/dashboard/stats/StatNumbers.vue";
import {onMounted, ref} from "vue";
import {useStatsStore} from "../../store/statsStore.js";
import {useMeubilaireStore} from "../../store/storeMeubilaire.js";
import {useMaterialStore} from "../../store/materialStore.js";
import {useCategoryStore} from "../../store/categoryStore.js";
import {useMaterialTypesStore} from "../../store/materialTypeStore.js";
import {Chart} from "chart.js/auto";
import {useAuthStore} from "../../store/authStore.js";

const authStore = useAuthStore();

const statsStore = useStatsStore()

const meubilaireStore = useMeubilaireStore();
const meubilaires = ref([]);

const materialStore = useMaterialStore();
const materials = ref([]);

const categoryStore = useCategoryStore();
const categories = ref([]);

const materialTypeStore = useMaterialTypesStore();
const materialTypes = ref([]);

const createMeubilairesByCategoryChart = () => {
  let ctx = document.getElementById('meubilairesByCategoryChart').getContext('2d');
  let meubilairesByCategoryChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: statsStore.meubilairesByCategory.map((meubilaire) => meubilaire.name),
      datasets: [{
        label: 'Meubilaires par catégorie',
        data: statsStore.meubilairesByCategory.map((meubilaire) => meubilaire.number),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)'
        ],
        borderWidth: 1
      }]
    }
  })
}

const createMeubilairesByMaterialChart = () => {
  let ctx = document.getElementById('meubilairesByMaterialChart').getContext('2d');
  let meubilairesByMaterialChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: statsStore.meubilairesByMaterial.map((meubilaire) => meubilaire.name),
      datasets: [{
        label: 'Meubilaires par matière',
        data: statsStore.meubilairesByMaterial.map((meubilaire) => meubilaire.number),
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1
      }],
    },

  })
}

onMounted(() => {
  meubilaires.value = meubilaireStore.meubilaires
  materials.value = materialStore.materials
  categories.value = categoryStore.categories
  materialTypes.value = materialTypeStore.materialTypes

  createMeubilairesByCategoryChart();
  createMeubilairesByMaterialChart()
})
</script>

<template>
  <div class="container p-10 w-full">
    <div class="flex justify-between items-center mb-4">
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold">Bienvenue sur le Dashboard ! </h1>
        <h1 class="text-secondary text-2xl font-bold">Voici quelques statistiques </h1>
      </div>
      <div class="md:flex items-center gap-6 hidden">
        <div class="avatar">
          <div class="rounded-full w-24 h-24 m-2 mt-0">
            <img src="https://picsum.photos/id/1005/200/200"/>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold">{{ authStore.currentUser?.firstname }} {{
              authStore.currentUser?.lastname
            }}</h1>
          <h2 class="text-secondary text-xl font-bold">{{ authStore.currentUser?.email }}</h2>
        </div>
      </div>
    </div>

    <StatNumbers :material-types="materialTypes" :categories="categories" :materials="materials" :meubilaires="meubilaires"></StatNumbers>

    <div id="stats" class="md:grid grid-cols-2 md:gap-4 flex flex-col gap-2">
      <div class="card w-full bg-base-100 shadow-xl grid-cols-6">
        <div class="card-body">
          <div class="card-title">Meubilaires par catégories</div>
          <canvas id="meubilairesByCategoryChart"></canvas>
        </div>
      </div>
      <div class="card w-full h-fit bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="card-title">Meubilaires par matériaux</div>
          <canvas id="meubilairesByMaterialChart"></canvas>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <MaterialTypeTable :materialTypes="materialTypes"></MaterialTypeTable>
        </div>
      </div>
      <div class="card bg-base-100 grid grid-cols-subgrid col-span-2 shadow-xl">
        <div class="card-body">
          <MaterialsTable :materials="materials"></MaterialsTable>
        </div>
      </div>
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <CategoriesTable :categories="categories"></CategoriesTable>
        </div>
      </div>
    </div>
    <div class="card bg-base-100 shadow-xl mt-4">
      <div class="card-body">
        <MeubilairesTable :meubilaires="meubilaires"></MeubilairesTable>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>