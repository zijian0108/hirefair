import path from 'node:path'
import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'
import { pluginYaml } from '@rsbuild/plugin-yaml'


export default defineConfig({
  plugins: [
    pluginVue(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/
    }),
    pluginVueJsx(),
    pluginYaml()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
