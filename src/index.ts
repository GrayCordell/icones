import { createMemoryHistory, createRouter } from 'vue-router'
import { basePath } from './env'
import routes from '~pages'

export const iconesRouter = createRouter({
  history: createMemoryHistory(basePath),
  routes,
})

export { default as IconesApp } from './App.vue'
