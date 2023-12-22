import { defineStore } from "pinia";
import {fetchEnterpriseByMaterialtype, fetchEnterprises} from "../../../../shared/api/enterprise.api";

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
        },

        async fetchEnterprises() {
            this.loaded = true;
            const enterprises = await fetchEnterprises();
            this.enterprises = enterprises;
            this.loaded = false;
        }
    }
})