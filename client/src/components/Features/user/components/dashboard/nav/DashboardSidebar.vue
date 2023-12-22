<script setup>
import { useAuthStore } from '../../../store/authStore';

const authStore = useAuthStore()

</script>

<template>
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-4 font-bold">
      <li>
        <router-link to="/" class="">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Accueil
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/add-meubilaire">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="none" stroke="currentColor" id="addMeubilaire">
            <path fill-rule="evenodd" stroke-width="2"
                  d="M10.707 10l4.147-4.146a.5.5 0 10-.708-.708L10 9.293 5.854 5.147a.5.5 0 00-.708.708L9.293 10l-4.147 4.146a.5.5 0 00.708.708L10 10.707l4.146 4.147a.5.5 0 00.708-.708L10.707 10z"
                  clip-rule="evenodd"/>
          </svg>
          Ajouter un meubilaire
        </router-link>
      </li>
      <li>
        <router-link @click="authStore.logout" to="/login">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path fill-rule="evenodd" stroke-width="2"
                  d="M10.707 10l4.147-4.146a.5.5 0 10-.708-.708L10 9.293 5.854 5.147a.5.5 0 00-.708.708L9.293 10l-4.147 4.146a.5.5 0 00.708.708L10 10.707l4.146 4.147a.5.5 0 00.708-.708L10.707 10z"
                  clip-rule="evenodd"/>
          </svg>
          Déconnexion
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#addMeubilaire{
  transform: rotate(45deg);
}
</style>