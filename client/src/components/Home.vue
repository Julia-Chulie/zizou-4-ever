<script setup>
import HomeCard from "./HomeCard.vue";
import { useMeubilaireStore } from './Features/user/store/storeMeubilaire';
import { reactive, computed } from "vue";
import { useCategoryStore } from "./Features/user/store/categoryStore";

const store = useMeubilaireStore();
const categoryStore = useCategoryStore();

const filter = reactive({
    category: '',

});

const filteredMeubilaires = computed(() => {
    return store.meubilaires.filter((w) => {
   
        return filter.category === '' || w.category.name === filter.category;
    });
});

console.log(filteredMeubilaires);
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold m-4">Mes Créations</h1>
    </div>
    <form>
        <div class="form-input">
            <select class="select select-bordered w-full max-w-xs" v-model="filter.category">
                <option class="text-white" disabled selected value="">Catégorie</option>
                <option v-for="category in categoryStore.categories" :key="category._id" :value="category.name">
                    {{ category.name }}
                </option>
            </select>
        </div>
        </form>
    <div class="flex flex-wrap">
      
        <HomeCard v-for="meubilaire in filteredMeubilaires" :key="meubilaire.id" :item="meubilaire"/>
    </div>
</template>

<style scoped>
</style>
