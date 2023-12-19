import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Header from '../components/Header.vue';
import Login from '../components/Features/user/view/Login.vue';
import Register from '../components/Features/user/view/Register.vue';
import Dashboard from "@/components/Features/user/view/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/register', component: Register},
    {path: '/login', component: Login},
    {path: '/dashboard', component: Dashboard},
  ],
})


export default router