import {defineStore} from "pinia";
import { fetchMaterials } from "../../../../shared/api/meubilaire.api";

export const useMaterialStore = defineStore('material', {
    state: () => ({
       materials: [],
       material: {},
       loaded: false
    }),

    getters: {
         getMaterials() {
            return state.materials.value
         }
    },

    actions: {
       async fetchMaterials() {
        const materials = await fetchMaterials();
        this.materials = materials;
       },
    },
})

export async function initialFetchMaterials() {
   const store = useMaterialStore();
   if (!store.loaded) {
       await store.fetchMaterials();
       store.loaded = true;
   }
}