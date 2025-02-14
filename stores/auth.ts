import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    user: null,
    token: null,
    loading: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },

  actions: {
    async login(email: string, password: string) {
      const config = useRuntimeConfig();
      this.loading = true;
      try {
        const response = await fetch(`${config.public.apiUrl}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();
        this.token = data.token;
        this.user = data.user;

        // Store token in localStorage
        localStorage.setItem("token", data.token);

        return true;
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
    },

    async checkAuth() {
      const token = localStorage.getItem("token");
      if (token) {
        this.token = token;
        try {
          const config = useRuntimeConfig();
          const response = await fetch(`${config.public.apiUrl}/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            this.user = data.user;
          } else {
            this.logout();
          }
        } catch (error) {
          console.error("Auth check error:", error);
          this.logout();
        }
      }
    },
  },
});
