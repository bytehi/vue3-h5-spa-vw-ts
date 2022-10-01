import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/**
 * 组件库按需引入插件
 * usage: 直接使用组件,无需在任何地方导入组件
 */
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({})],
  resolve: {
    // 查找别名
    alias: [{ find: '@', replacement: '/src' }],
    // 导入时想要省略的扩展名列表
    extensions: ['.js', '.vue', '.json', '.scss', '.ts', '*'],
  },
})
