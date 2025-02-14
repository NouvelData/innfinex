<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
import { onMounted } from "vue";

const auth = useAuthStore();

// Check authentication status when app loads
onMounted(async () => {
  await auth.checkAuth();
});
</script>
