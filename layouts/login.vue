<template>
  <div class="min-h-screen bg-background flex">
    <div
      class="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div class="text-center mb-8">
          <NuxtLink to="/" class="text-3xl font-bold inline-block">
            <span class="text-foreground">Infinite</span
            ><span class="text-primary">Humans</span>
          </NuxtLink>
        </div>

        <!-- Page content -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const domains = [
  { name: "GitHub", color: "#2b3137" },
  { name: "Figma", color: "#ff2d55" },
  { name: "VS Code", color: "#0066b8" },
  { name: "Python", color: "#3776ab" },
  { name: "React", color: "#61dafb" },
  { name: "Vue", color: "#42b883" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#339933" },
];
</script>

<style scoped>
.domains-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
  transform: rotate(-10deg) scale(1.5);
}

.domain-item {
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
}
</style>
