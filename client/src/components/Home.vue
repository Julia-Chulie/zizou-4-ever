<script setup>
import HomeCard from "./HomeCard.vue"
import { useMeubilaireStore } from './Features/user/store/storeMeubilaire';

const store = useMeubilaireStore();
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold m-4">Mes Créations</h1>
    </div>
    
    <div class="flex flex-wrap">
        <HomeCard v-for="meubilaire in store.meubilaires" :key="meubilaire.id" :item="meubilaire"/>
    </div>
</template>

<style scoped>
</style>