import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Login from '../components/Features/user/view/Login.vue';
import Dashboard from "../components/Features/user/view/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
  ],
})


export default router