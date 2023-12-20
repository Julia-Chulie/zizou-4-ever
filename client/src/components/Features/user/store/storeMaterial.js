import {defineStore} from "pinia";
import {fetchMaterials} from "../../../../shared/api/meubilaire.api";

export const useMaterialStore = defineStore('material', {
    state: () => ({
        materials: [],
        material: null
    }),

    getters: {

    },

    actions: {
        async fetchMaterials() {
            const materials = await fetchMaterials();
            console.log('store',materials);
            this.materials = materials;
        }

    },
})