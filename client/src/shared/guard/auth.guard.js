import { useAuthStore } from "../../components/Features/user/store/authStore";

export const AuthGuardService = (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated) {
    next();
  } else {
    next('/login');
  }
};