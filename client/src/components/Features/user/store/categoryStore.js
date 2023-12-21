import {defineStore} from "pinia";
import { fetchCategories } from "../../../../shared/api/category.api";

export const useCategoryStore = defineStore('category', {
    state: () => ({
       categories: [],
       category: {},
       loaded:false
    }),

    getters: {
        getCategories() {
           return this.categories 
        }
   },

    actions: {
       async fetchCategory() {
         this.loaded =true
        const response = await fetchCategories();
        this.categories = response;
        this.loaded =false
       },
     
    },
})

export async function initialFetchCategories() {
   const store = useCategoryStore();
   if (!store.loaded) {
       await store.fetchCategory();
       store.loaded = true;
   }
}