import {defineStore} from "pinia";
import {fetchCategories} from "../../../../shared/api/meubilaire.api";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        category: null
    }),

    getters: {

    },

    actions: {
        async fetchCategories() {
            const categories = await fetchCategories();
            console.log('store',categories);
            this.categories = categories;
        }

    },
})