import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue';
import Login from '../components/Features/user/view/Login.vue';
import Dashboard from "../components/Features/user/view/dashboard/Dashboard.vue";
import {useAuthStore} from "../components/Features/user/store/authStore.js";
import {useStatsStore} from "../components/Features/user/store/statsStore.js";
import {AuthGuardService} from "../shared/guard/auth.guard.js";
import {useMeubilaireStore} from "../components/Features/user/store/storeMeubilaire.js";
import {useMaterialStore} from "../components/Features/user/store/materialStore.js";
import {useCategoryStore} from "../components/Features/user/store/categoryStore.js";
import FormMeubilaire from '../components/Features/meubilaire/FormMeubilaire.vue';
import { initialFetchCategories } from '../components/Features/user/store/categoryStore';
import { initialFetchMaterials } from '../components/Features/user/store/materialStore';
import { initialFetchMeubilaires } from '../components/Features/user/store/storeMeubilaire.js';
import {useMaterialTypesStore} from "../components/Features/user/store/materialTypeStore.js";
import {useEnterpriseStore} from "../components/Features/user/store/enterpriseStore.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home, beforeEnter: [loadMeubilairesBeforeEnter,loadCategoriesBeforeEnter,loadMaterialsBeforeEnter]},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard, beforeEnter: [AuthGuardService,loadStatsBeforeEnter]},
    {path: '/dashboard/add-meubilaire', component: Dashboard,beforeEnter:[loadCategoriesBeforeEnter,loadMaterialsBeforeEnter]},
  ],
})

async function loadCategoriesBeforeEnter(to, from, next) {
  await initialFetchCategories();
  next();
}

async function loadMeubilairesBeforeEnter(to, from, next) {
  await initialFetchMeubilaires();
  next();
}

async function loadMaterialsBeforeEnter(to, from, next) {
  await initialFetchMaterials(); 
  next();
}

async function loadStatsBeforeEnter(to, from, next) {
    const statsStore = useStatsStore();

    await statsStore.fetchMeubilairesByCategory();
    await statsStore.fetchMeubilairesByMaterial();

    const meubilaireStore = useMeubilaireStore();
    await meubilaireStore.fetchMeubilaire();

    const materialStore = useMaterialStore();
    await materialStore.fetchMaterials();

    const categoryStore = useCategoryStore();
    await categoryStore.fetchCategories();

    const materialTypeStore = useMaterialTypesStore();
    await materialTypeStore.fetchMaterialTypes();

    const entrepriseStore = useEnterpriseStore();
    await entrepriseStore.fetchEnterprises();

    next();
}

router.beforeEach(async () => {
  const authStore = useAuthStore()
  if(!authStore.loaded){
    await authStore.fetchCurrentUser();
  }
});
export default router