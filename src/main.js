import { createApp } from 'vue'
import App from './App.vue'
import indexPlugin from '@/plugins'

const app = createApp(App)

app.mount('#app')
app.use(indexPlugin)
