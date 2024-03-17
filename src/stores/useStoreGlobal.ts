import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStoreGlobal = defineStore('storeGlobal', () => {
    const stateAllLinks = ref(null)


    return { stateAllLinks }
})
