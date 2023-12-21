<script setup>
import {useRouter} from 'vue-router';
import {onBeforeMount} from 'vue';
import {useAuthStore} from "../../store/authStore.js";
import DashboardSidebar from "../../components/dashboard/nav/DashboardSidebar.vue";
import DashboardHome from "./DashboardHome.vue";
import FormMeubilaire from "../../../meubilaire/FormMeubilaire.vue";

const router = useRouter()

const authStore = useAuthStore()
const isAuthenticated = authStore.isAuthenticated

console.log('route', router.currentRoute.value.path);




onBeforeMount(() => {
  if (!isAuthenticated) {
    router.push('/login')
  }
})

</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col items-center">
      <DashboardHome v-if="router.currentRoute.value.path === '/dashboard'"></DashboardHome>
      <FormMeubilaire v-if="router.currentRoute.value.path === '/dashboard/add-meubilaire'"></FormMeubilaire>
    </div>
    <DashboardSidebar></DashboardSidebar>
  </div>


</template>

<style scoped>
</style>