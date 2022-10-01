import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局解析守卫
router.beforeEach(() => {
    // NProgress.start()
});

router.afterEach(() => {
    // NProgress.done()
    // 更改页面标题
    // document.title = to.meta.title || ''
});

export default router;
