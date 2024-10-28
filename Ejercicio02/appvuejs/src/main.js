//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { highlight } from './components/directivas'
const app = createApp(App)

app.directive('highlight2',(el, bindings)=>{
    el.style.background = 'green'
})

app.directive('highlight4',highlight)


app.mount('#app')
