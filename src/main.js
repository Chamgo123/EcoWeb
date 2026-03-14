import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Esto asume que tienes el router configurado

const app = createApp(App)
app.use(router)
app.mount('#app')