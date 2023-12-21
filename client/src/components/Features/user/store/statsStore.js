import {defineStore} from "pinia";
import {fetchMeubilairesByCategory, fetchMeubilairesByMaterial} from "../../../../shared/api/stats.api.js";

export const useStatsStore = defineStore('statsStore', {
    state: () => ({
        meubilairesByMaterial: [],
        meubilairesByCategory: [],
        statsById: null,
        loaded: false,
        loadedStatsById: false,
        loading: false,
    }),

    getters: {
    },

    actions: {
        async fetchMeubilairesByMaterial() {
            const meubilairesByMaterial = await fetchMeubilairesByMaterial();
            console.log('store', meubilairesByMaterial);
            this.meubilairesByMaterial = meubilairesByMaterial;
        },

        async fetchMeubilairesByCategory() {
            const meubilairesByCategory = await fetchMeubilairesByCategory();
            console.log('store', meubilairesByCategory);
            this.meubilairesByCategory = meubilairesByCategory;
        },

    },
})