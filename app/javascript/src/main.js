import { createApp } from 'vue'
import router from '@/router'
import store from './store'
import App from '@/App.vue'

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App)
    app.use(store)
    app.use(router)
    app.mount('#vue-app')
  })
}
