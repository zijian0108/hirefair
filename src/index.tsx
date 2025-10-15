import router from '@/router'
import i18n from '@/plugins/locale'
import pinia from '@/plugins/store'
import { RouterView } from 'vue-router'
import { createApp, KeepAlive, type VNode } from 'vue'

const app = createApp({
  render: () => (
    <RouterView>
      {
        ({ Component }: { Component: VNode }) => (
          <KeepAlive>
            { Component }
          </KeepAlive>
        )
      }
    </RouterView>
  )
})

// 安装路由
app.use(router)

// 等待路由就绪后安装插件和挂载应用
router.isReady().then(() => {
  // 安装 i18n
  app.use(i18n)
  // 安装 Pinia
  app.use(pinia)
  // 挂载应用
  app.mount('#root')
})
