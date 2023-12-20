import {defineStore} from "pinia";
import { fetchMeubilaires } from "../../../../shared/api/meubilaire.api";

export const useMeubilaireStore = defineStore('meubilaire', {
    state: () => ({
       meubilaires: [],
       meubilaire: null
    }),

    getters: {

    },

    actions: {
       async fetchMeubilaire() {
        const meubilaires = await fetchMeubilaires();
        console.log('store',meubilaires);
        this.meubilaires = meubilaires;
       }

    },
})