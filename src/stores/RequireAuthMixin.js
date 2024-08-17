import DataService from "../Services/DataService";
import { useAuthStore } from "../stores/auth";
export const RequireAuthMixin = {
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("token");
    const authStore = useAuthStore();

    // if (!authStore.isAuthenticated || !token) {
    if (!token) {
      next("/login");
    } else {
      (async () => {
        const response = await DataService.get("/api/user");
        if (response.status == 200) {
          authStore.reconnect(response.data);
          next();
        }
      })();
    }
  },
};
