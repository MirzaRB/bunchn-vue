import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import './index.css'

import { globalState } from './store'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const { token } = globalState

  if (to.fullPath !== '/login' && to.fullPath !== '/') {
    if (!token) {
      next('/login')
    }
  }
  if (to.fullPath === '/login') {
    if (token) {
      next(from.fullPath)
    }
  }
  next()
})

app.use(router)
app.mount('#app')
