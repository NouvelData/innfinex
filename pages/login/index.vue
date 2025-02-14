<template>
  <div>
    <!-- Header -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1 class="text-2xl font-bold text-foreground text-center">
        Log in to your account
      </h1>
      <p class="mt-2 text-center text-sm text-muted-foreground">
        Welcome back to Infinite Humans
      </p>
    </div>

    <div class="mt-8">
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="space-y-1">
          <label for="email" class="block text-sm font-medium text-foreground">
            Email address
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            required
          />
        </div>

        <div class="space-y-1">
          <label
            for="password"
            class="block text-sm font-medium text-foreground"
          >
            Password
          </label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            required
          />
        </div>

        <UiButton type="submit" class="w-full" :disabled="auth.loading">
          {{ auth.loading ? "Logging in..." : "Log in" }}
        </UiButton>

        <p v-if="error" class="text-destructive text-sm text-center">
          {{ error }}
        </p>
      </form>

      <div class="mt-6 text-center text-sm">
        <span class="text-muted-foreground">Don't have an account?</span>
        <NuxtLink to="/signup" class="text-primary hover:underline ml-1">
          Sign up
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useRouter } from "nuxt/app";

definePageMeta({
  layout: "login",
});

const router = useRouter();
const auth = useAuthStore();
const error = ref("");

const form = ref({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  error.value = "";
  try {
    await auth.login(form.value.email, form.value.password);
    router.push("/profile");
  } catch (err) {
    error.value = "Invalid email or password";
  }
};
</script>
