import './assets/main.css'
import router from './router/routes.js'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
