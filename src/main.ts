import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// 引入css引擎
import 'uno.css'
import 'virtual:unocss-devtools'

// 引入css框架, 层属性 https://cn.windicss.org/integrations/vite.html#layers-ordering
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import './style.css'

createApp(App).use(router).use(store).mount('#app')
