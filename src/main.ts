import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// 层属性 https://cn.windicss.org/integrations/vite.html#layers-ordering
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import './style.css'

createApp(App).use(router).use(store).mount('#app')
