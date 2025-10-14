import router from './router'
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

// 路由准备就绪后挂载应用
router.isReady().then(() => {
  app.mount('#root')
})
