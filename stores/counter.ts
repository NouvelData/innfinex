import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    lastUpdated: null as Date | null,
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
    isPositive: (state) => state.count > 0,
  },

  actions: {
    increment() {
      this.count++;
      this.lastUpdated = new Date();
    },
    decrement() {
      this.count--;
      this.lastUpdated = new Date();
    },
    reset() {
      this.count = 0;
      this.lastUpdated = new Date();
    },
  },
});
