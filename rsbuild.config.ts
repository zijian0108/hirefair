import path from 'node:path'
import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVueJsx } from '@rsbuild/plugin-vue-jsx'
import { pluginYaml } from '@rsbuild/plugin-yaml'
import { pluginSass } from '@rsbuild/plugin-sass'
import AutoImport from 'unplugin-auto-import/rspack'

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/
    }),
    pluginVueJsx(),
    pluginYaml(),
    pluginSass()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          dts: path.resolve(__dirname, 'src/types/auto-imports.d.ts'),
          imports: ['vue', 'pinia', 'vue-router']
        })
      ]
    }
  },
  source: {
    transformImport: [
      {
        libraryName: 'lodash-es',
        customName: 'lodash-es/{{ member }}'
      }
    ]
  },
})
