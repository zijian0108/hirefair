import { createPinia } from 'pinia'
import { parse, stringify } from 'zipson'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const persistedstate = createPersistedState({
  key: (id) => `__hirefair_${id}`,
  storage: localStorage,
  serializer: {
    deserialize: parse,
    serialize: stringify
  }
})

pinia.use(persistedstate)

export default pinia
