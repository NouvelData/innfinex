<template>
  <nav class="bg-background border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Left section -->
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold">
              <span class="text-foreground">Infinite</span
              ><span class="text-primary">Humans</span>
            </NuxtLink>
          </div>
          <!-- Navigation Links -->
          <div class="hidden sm:ml-8 sm:flex sm:space-x-8">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-primary transition-colors duration-200"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Right section -->
        <div class="flex items-center space-x-4">
          <UiButton variant="ghost" size="sm" @click="navigateTo('/login')"
            >Log In</UiButton
          >
          <UiButton size="sm" @click="navigateTo('/signup')">Sign Up</UiButton>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon for menu (you can use a proper icon component here) -->
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block pl-3 pr-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "nuxt/app";

const router = useRouter();
const navigateTo = (path: string) => {
  router.push(path);
};

const navigation = [
  { name: "Discover", href: "/discover" },
  { name: "For job seekers", href: "/jobs" },
  { name: "For companies", href: "/companies" },
];
</script>
