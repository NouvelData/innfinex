<template>
  <div>
    <!-- Header -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h1 class="text-2xl font-bold text-foreground text-center">
        Create your account
      </h1>
      <p class="mt-2 text-center text-sm text-muted-foreground">
        Join the Infinite Intelligence Exchange Platform
      </p>
    </div>

    <div class="mt-8">
      <form
        @submit.prevent="handleSubmit"
        class="space-y-4 bg-background rounded-lg border border-border p-6 shadow-lg"
      >
        <div class="space-y-1">
          <label for="name" class="block text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            placeholder="John Doe"
            required
          />
        </div>

        <div class="space-y-1">
          <label for="email" class="block text-sm font-medium text-foreground">
            Email address
          </label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            placeholder="john@example.com"
            required
          />
        </div>

        <div class="space-y-1">
          <label for="phone" class="block text-sm font-medium text-foreground">
            Phone number (optional)
          </label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div class="space-y-1">
          <label
            for="password"
            class="block text-sm font-medium text-foreground"
          >
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 pr-10"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 pr-3 flex items-center"
              @click="showPassword = !showPassword"
            >
              <img
                v-if="showPassword"
                src="~/assets/icons/password-eye.svg"
                class="h-5 w-5 password-toggle"
                alt="Hide password"
              />
              <img
                v-else
                src="~/assets/icons/password-eye-slash.svg"
                class="h-5 w-5 password-toggle"
                alt="Show password"
              />
            </button>
          </div>
        </div>

        <div class="space-y-1">
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-foreground"
          >
            Confirm Password
          </label>
          <div class="relative">
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 pr-10"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 pr-3 flex items-center"
              @click="showConfirmPassword = !showConfirmPassword"
            >
              <img
                v-if="showConfirmPassword"
                src="~/assets/icons/password-eye.svg"
                class="h-5 w-5 password-toggle"
                alt="Hide password"
              />
              <img
                v-else
                src="~/assets/icons/password-eye-slash.svg"
                class="h-5 w-5 password-toggle"
                alt="Show password"
              />
            </button>
          </div>
        </div>

        <UiButton
          type="submit"
          class="w-full mt-6"
          size="lg"
          :disabled="isLoading"
        >
          <template v-if="isLoading">
            <span class="inline-block animate-spin mr-2">↻</span>
            Creating account...
          </template>
          <template v-else> Create Account </template>
        </UiButton>
      </form>

      <!-- Login Link -->
      <div class="mt-6 text-center text-sm">
        <span class="text-muted-foreground">Already have an account?</span>
        <NuxtLink to="/login" class="text-primary hover:underline ml-1">
          Log in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "nuxt/app";

const router = useRouter();

definePageMeta({
  layout: "login",
});

const form = ref({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const isLoading = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Add form validation rules
const rules = {
  name: { required: true, message: "Full name is required" },
  email: { required: true, message: "Email address is required" },
  password: { required: true, message: "Password is required" },
  confirmPassword: { required: true, message: "Please confirm your password" },
};

const handleSubmit = async () => {
  isLoading.value = true;

  // Validate required fields
  for (const [field, rule] of Object.entries(rules)) {
    if (rule.required && !form.value[field]) {
      alert(rule.message);
      isLoading.value = false;
      return;
    }
  }

  // Validate password match
  if (form.value.password !== form.value.confirmPassword) {
    alert("Passwords do not match");
    isLoading.value = false;
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  router.push("/profile");
  isLoading.value = false;
};
</script>
<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
  -webkit-text-fill-color: var(--foreground);
  transition: background-color 5000s ease-in-out 0s;
}

.password-toggle {
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

.password-toggle:hover {
  opacity: 1;
}
</style>
