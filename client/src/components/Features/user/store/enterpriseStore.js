import { defineStore } from "pinia";
import { fetchEnterpriseByMaterialtype } from "../../../../shared/api/enterprise.api";

export const useEnterpriseStore = defineStore('enterprise', {
    state: ()  => ({
        enterprises: [],
        enterprise: {},
        loaded: false,
    }),

    getters: {

    },

    actions: {
        async fetchEnterprise(meterialtype) {
            this.loaded = true;
            const enterprise = await fetchEnterpriseByMaterialtype(meterialtype);
            this.enterprise = enterprise;
            this.loaded = false;
        }
    }
})