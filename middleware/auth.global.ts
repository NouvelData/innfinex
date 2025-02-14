import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  const noAuthRoutes = ["/login", "/signup", "/"];
  auth.checkAuth();

  // If user is not authenticated and trying to access a protected route
  if (!auth.isAuthenticated && !noAuthRoutes.includes(to.path)) {
    return navigateTo("/login");
  }

  // If user is authenticated and trying to access login/signup pages
  if (auth.isAuthenticated && noAuthRoutes.includes(to.path)) {
    return navigateTo("/profile");
  }
});
