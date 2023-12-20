import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Login from '../components/Features/user/view/Login.vue';
import Dashboard from "../components/Features/user/view/Dashboard.vue";
import FormMeubilaire from '../components/Features/meubilaire/FormMeubilaire.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
    {path: '/add-meubilaire', component: FormMeubilaire},
  ],
})


export default router