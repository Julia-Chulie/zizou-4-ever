<script setup>
import {useRouter} from 'vue-router';
import {onBeforeMount, onMounted, ref} from 'vue';
import {useAuthStore} from "../store/authStore.js";
import {useStatsStore} from "../store/statsStore.js";
import {Chart} from "chart.js/auto";
import {useMeubilaireStore} from "../store/storeMeubilaire.js";
import {useMaterialStore} from "../store/storeMaterial.js";
import {useCategoryStore} from "../store/storeCategory.js";

const router = useRouter();

const authStore = useAuthStore()
const isAuthenticated = authStore.isAuthenticated

const statsStore = useStatsStore()

const meubilaireStore = useMeubilaireStore();
const meubilaires = ref([]);

const materialStore = useMaterialStore();
const materials = ref([]);

const categoryStore = useCategoryStore();
const categories = ref([]);


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
    type: 'doughnut',
    data: {
      labels: statsStore.meubilairesByMaterial.map((meubilaire) => meubilaire.name),
      datasets: [{
        label: 'Meubilaires par matière',
        data: statsStore.meubilairesByMaterial.map((meubilaire) => meubilaire.number),
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
      }],
    }
  })
}


onBeforeMount(() => {
  if(!isAuthenticated){
    router.push('/login')
  }
})
onMounted(() => {
  meubilaires.value = meubilaireStore.meubilaires
  materials.value = materialStore.materials
  categories.value = categoryStore.categories

  createMeubilairesByCategoryChart();
  createMeubilairesByMaterialChart()
})
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center">
      <div class="container p-10 w-full">
        <h1 class="text-primary text-2xl font-bold text-center">Bienvenue sur le Dashboard ! </h1>
        <h1 class="text-secondary text-2xl font-bold text-center">Voici quelques statistiques </h1>

        <div class="stats stats-vertical lg:stats-horizontal shadow mb-5">

          <div class="stat">
            <div class="stat-title">Meubilaires</div>
            <div class="stat-value">{{ meubilaires.length }}</div>
          </div>

          <div class="stat">
            <div class="stat-title">Matériaux</div>
            <div class="stat-value">{{ materials.length }}</div>
          </div>

          <div class="stat">
            <div class="stat-title">Catégories</div>
            <div class="stat-value">{{ categories.length }}</div>
          </div>

        </div>

        <div id="stats" class="md:flex gap-20">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="card-title">Meubilaires par catégories</div>
              <canvas id="meubilairesByCategoryChart"></canvas>
            </div>
          </div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="card-title">Meubilaires par matériaux</div>
              <canvas id="meubilairesByMaterialChart"></canvas>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-4 font-bold">
        <!-- Sidebar content here -->
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/logout">Déconnexion</router-link></li>
      </ul>
    </div>
  </div>


</template>

<style scoped>
</style>