import {createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue';
import Login from '../components/Features/user/view/Login.vue';
import Dashboard from "../components/Features/user/view/Dashboard.vue";
import {useAuthStore} from "../components/Features/user/store/authStore.js";
import {useStatsStore} from "../components/Features/user/store/statsStore.js";
import {AuthGuardService} from "../shared/guard/auth.guard.js";
import {useMeubilaireStore} from "../components/Features/user/store/storeMeubilaire.js";
import {useMaterialStore} from "../components/Features/user/store/storeMaterial.js";
import {useCategoryStore} from "../components/Features/user/store/storeCategory.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/login', component: Login},
        {path: '/dashboard', component: Dashboard, beforeEnter: [AuthGuardService,loadStatsBeforeEnter]},
    ],
})

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

    next();
}


router.beforeEach(async () => {
  const authStore = useAuthStore()
  if(!authStore.loaded){
    await authStore.fetchCurrentUser();
  }
});
export default router