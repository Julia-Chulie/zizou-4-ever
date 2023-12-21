import {defineStore} from "pinia";
import {fetchMaterialTypes} from "../../../../shared/api/materialType.api.js";

export const useMaterialTypesStore = defineStore('materialTypes', {
    state: () => ({
        materialTypes: [],
        materialType: {},
        loaded:false
    }),

    getters: {
        getMaterials() {
            return state.materialTypes.value
        }
    },

    actions: {
        async fetchMaterialTypes() {
            this.materialTypes = await fetchMaterialTypes();
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