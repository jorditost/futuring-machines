import { defineStore, acceptHMRUpdate } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useSettingStore = defineStore('setting', () => {
  const langOptions = import.meta.env.VITE_LANG_OPTIONS.split(',')
  const lang = useStorage(
    'lang',
    langOptions.find((l) => new RegExp(`^${l}`).test(navigator.language)) ?? langOptions[0]
  )

  const modelOptions = import.meta.env.VITE_MODEL_OPTIONS.split(',')
  const model = useStorage('model', modelOptions[0])

  const shareOptions = ['upload', 'download', 'both']
  const share = useStorage('share', 'upload')

  return {
    lang,
    langOptions,
    share,
    shareOptions,
    model,
    modelOptions
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot))
}
