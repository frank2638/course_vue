import { createApp } from 'vue'
import TestHello from './components/TestHello.vue'
import router from './router'
import store from './store'

createApp(TestHello).use(store).use(router).mount('#app')
