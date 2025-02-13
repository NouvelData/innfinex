<template>
  <div
    class="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-background"
  >
    <!-- Background domains -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="domains-grid">
        <template v-for="(domain, index) in domains" :key="index">
          <div
            :class="[
              'domain-item absolute whitespace-nowrap font-medium',
              `text-${domain.size}`,
              domain.className,
            ]"
            :style="{ color: domain.color }"
          >
            {{ domain.name }}
          </div>
        </template>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-5xl mx-auto px-4">
      <div class="relative">
        <!-- Add a pseudo-background element for the blur effect -->
        <div
          class="absolute inset-0 bg-background/10 backdrop-blur-sm rounded-2xl"
        ></div>

        <div
          class="relative border-4 border-dotted border-primary/40 rounded-2xl p-12 pt-16 pb-16 flex flex-col items-center justify-center text-center"
        >
          <h1
            class="text-4xl md:text-6xl font-bold mb-6 text-foreground max-w-4xl leading-tight"
          >
            Infinite Humans is an Infinite Intelligence Exchange Platform
          </h1>
          <p class="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Connect with top talent across all domains - from developers to
            designers, artists to analysts.
          </p>

          <!-- Button positioned on the border -->
          <div class="absolute -bottom-7 left-1/2 transform -translate-x-1/2">
            <div class="bg-background px-8">
              <UiButton
                size="lg"
                class="text-xl md:text-2xl px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                @click="navigateTo('/profile')"
              >
                Get Started
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const domains = [
  {
    name: "GitHub",
    size: "xl",
    className: "top-[10%] left-[5%]",
    color: "#2b3137",
  },
  {
    name: "Figma",
    size: "2xl",
    className: "top-[20%] right-[15%]",
    color: "#ff2d55",
  },
  {
    name: "VS Code",
    size: "lg",
    className: "top-[40%] left-[20%]",
    color: "#0066b8",
  },
  {
    name: "Adobe",
    size: "3xl",
    className: "bottom-[30%] right-[10%]",
    color: "#ff0000",
  },
  {
    name: "Python",
    size: "xl",
    className: "bottom-[20%] left-[15%]",
    color: "#3776ab",
  },
  {
    name: "React",
    size: "2xl",
    className: "top-[15%] left-[35%]",
    color: "#61dafb",
  },
  {
    name: "Vue",
    size: "lg",
    className: "bottom-[40%] right-[25%]",
    color: "#42b883",
  },
  {
    name: "Blender",
    size: "xl",
    className: "top-[35%] right-[30%]",
    color: "#ea7600",
  },
  {
    name: "Unity",
    size: "2xl",
    className: "bottom-[15%] left-[30%]",
    color: "#000000",
  },
  {
    name: "Unreal",
    size: "lg",
    className: "top-[25%] right-[5%]",
    color: "#6c6c6c",
  },
  {
    name: "Docker",
    size: "xl",
    className: "bottom-[35%] left-[5%]",
    color: "#2496ed",
  },
  {
    name: "AWS",
    size: "2xl",
    className: "top-[45%] right-[40%]",
    color: "#ff9900",
  },
  {
    name: "Photoshop",
    size: "lg",
    className: "bottom-[10%] right-[35%]",
    color: "#31a8ff",
  },
  {
    name: "TypeScript",
    size: "xl",
    className: "top-[5%] left-[45%]",
    color: "#3178c6",
  },
  {
    name: "Flutter",
    size: "2xl",
    className: "bottom-[25%] left-[40%]",
    color: "#02569b",
  },
  {
    name: "Kubernetes",
    size: "xl",
    className: "top-[30%] left-[25%]",
    color: "#326ce5",
  },
  {
    name: "Node.js",
    size: "2xl",
    className: "bottom-[45%] right-[15%]",
    color: "#339933",
  },
  {
    name: "Angular",
    size: "lg",
    className: "top-[50%] left-[10%]",
    color: "#dd0031",
  },
  {
    name: "Swift",
    size: "xl",
    className: "bottom-[5%] right-[20%]",
    color: "#f05138",
  },
  {
    name: "Android",
    size: "2xl",
    className: "top-[8%] right-[25%]",
    color: "#3ddc84",
  },
];

const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
.domains-grid {
  position: absolute;
  inset: -20%;
  animation: slow-spin 60s linear infinite;
}

.domain-item {
  opacity: 0.15;
  transition: all 0.3s ease;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.domain-item:hover {
  opacity: 0.8;
  transform: scale(1.1);
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

@keyframes slow-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.text-lg {
  font-size: 1.125rem;
}
.text-xl {
  font-size: 1.25rem;
}
.text-2xl {
  font-size: 1.5rem;
}
.text-3xl {
  font-size: 1.875rem;
}
</style>
