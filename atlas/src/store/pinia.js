// stores/counter.js or counterStore.js
import { defineStore } from 'pinia'

export const store= defineStore('counter', {
  state: () => ({
    count: 0
  }),




  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    incrementBy(amount) {
      this.count += amount
    }
  }
})
