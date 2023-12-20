import {defineStore} from "pinia";
import { fetchMeubilaires } from "../../../../shared/api/meubilaire.api";

export const useMeubilaireStore = defineStore('meubilaire', {
    state: () => ({
       meubilaires: [],
       meubilaire: null,
       loaded: false
    }),

    getters: {

    },

    actions: {
       async fetchMeubilaire() {
        this.loaded = false;
        const meubilaires = await fetchMeubilaires();
        this.meubilaires = meubilaires;
        this.loaded = true;
       }

    },
})

export function initialFetchMeubilaires() {
   const store = useMeubilaireStore();
   if (!store.loaded) {
      store.fetchMeubilaire();
      if (store.meubilaires.length > 1) {
         store.meubilaires = [];
      }
   }
}