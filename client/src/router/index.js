import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Login from '../components/Features/user/view/Login.vue';
import Dashboard from "../components/Features/user/view/Dashboard.vue";
import FormMeubilaire from '../components/Features/meubilaire/FormMeubilaire.vue';
import { initialFetchCategories } from '../components/Features/user/store/categoryStore';
import { initialFetchMaterials } from '../components/Features/user/store/materialStore';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
    {path: '/add-meubilaire', component: FormMeubilaire,beforeEnter:[loadCategoriesBeforeEnter,loadMaterialsBeforeEnter]},
  ],
})

async function loadCategoriesBeforeEnter(to, from, next) {
  await initialFetchCategories();
  next();
}

async function loadMaterialsBeforeEnter(to, from, next) {
  await initialFetchMaterials(); 
  next();
}

export default router