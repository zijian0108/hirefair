import 'vue-router'

// 向路由元对象添加属性
declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 页面标题
     */
    title?: string
    /**
     * 是否需要缓存页面
     */
    keepAlive?: boolean
    /**
     * 是否需要登录
     */
    requiresAuth?: boolean
  }
}
