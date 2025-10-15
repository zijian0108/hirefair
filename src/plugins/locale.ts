import { createI18n, type I18nOptions } from 'vue-i18n'
import zhCN from '@/locales/global/zh-CN.yml'
import enUS from '@/locales/global/en-US.yml'

const i18n = createI18n({
  legacy: false,
  // 配置默认语言为中文
  locale: 'zh-CN',
  // 配置回退语言为英文
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  } as I18nOptions['messages']
})

export const t = (key: string) => {
  return i18n.global.t(key)
}

export default i18n
