import './assets/main.css'

import {createBootstrap} from 'bootstrap-vue-next'
// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createBootstrap()) // Important
app.use(router)

app.mount('#app')
