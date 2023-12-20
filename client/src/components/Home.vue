<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
const router = useRouter();

import { useMeubilaireStore } from './Features/user/store/storeMeubilaire';
const store = useMeubilaireStore();
const meubilaires = ref([]);

onMounted(() => {
  meubilaires.value = store.meubilaires
})

</script>

<template>
    <div>
        <h1 class="text-3xl font-bold m-4">Mes Créations</h1>
    </div>
    
    <div class="flex flex-wrap">

        <div v-for="meubilaire in meubilaires" :key="meubilaire.id" class="card w-96 bg-base-100 shadow-xl m-4">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {{ meubilaire.name }}
                <div class="badge badge-secondary">Chêne</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <div class="badge badge-outline">Bois</div> 
                <div class="badge badge-outline">Beaver and co</div>
                </div>
            </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl m-4">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                Ta soeur la table
                <div class="badge badge-secondary">Chêne</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <div class="badge badge-outline">Bois</div> 
                <div class="badge badge-outline">Beaver and co</div>
                </div>
            </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-4">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                Ta soeur la table
                <div class="badge badge-secondary">Chêne</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                <div class="badge badge-outline">Bois</div> 
                <div class="badge badge-outline">Beaver and co</div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
</style>