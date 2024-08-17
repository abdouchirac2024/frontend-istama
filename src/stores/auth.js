import { defineStore } from "pinia";
import ds from "../Services/DataService.js";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
    token: null,
    resetToken: null,
  }),

  actions: {
    login(user) {
      if (user.access_token) {
        this.user = user;
        this.isAuthenticated = true;
        this.setToken(user.token);
      }
    },

    reconnect(user) {
      this.user = { data: { ...user }, type: "admin" };
      this.isAuthenticated = true;
    },

    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token); // Stocker le token dans localStorage
      console.log(token);
    },

    async logout() {
      try {
        await ds.post("/api/auth/logout", {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        });
      } catch (error) {
        console.error("Error during logout:", error);
      } finally {
        this.user = null;
        this.isAuthenticated = false;
        this.tokenn = null;
        localStorage.removeItem("token");
        console.log("user deconnected");
      }
    },

    isAdmin(user) {
      return this.user && this.user.type === "admin";
    },
    PasswordReset(resetToken) {},
  },

  getters: {
    getUsername() {
      return this.user ? this.user.username : null;
    },
  },
});
