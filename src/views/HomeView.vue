<script setup lang="ts">
import {onMounted,ref} from "vue";
// import TheWelcome from '../components/TheWelcome.vue'

const vueLinks = ref(null) as any
const helpersAndDocsLinks = ref(null) as any
const jsAndTsLinks = ref(null) as any

const reactLinks = ref(null) as any
const pythonLinks = ref(null) as any
const choreLinks = ref(null) as any

const videoCursesLinks = ref(null) as any


const isHideBlock1 = ref(true)
const isHideBlock2 = ref(true)
const isHideBlock3 = ref(true)
const handlerHideBlock1 = ()=>isHideBlock1.value = !isHideBlock1.value
const handlerHideBlock2 = ()=>isHideBlock2.value = !isHideBlock2.value
const handlerHideBlock3 = ()=>isHideBlock3.value = !isHideBlock3.value


const storeGlobal= useStoreGlobal()
const isLoadingData = ref(false)
const serviceFireBase = {
  getListData: async()=> {
    try {
      isLoadingData.value = true

      const URL = 'https://it-words-f02a9-default-rtdb.firebaseio.com/links.json'
      const data = await fetch(URL)
      const dataParseJson = await data.json()


      let arr = []
      for (let obj in dataParseJson) {
        for (let childrenObj in dataParseJson[obj]) arr.push(dataParseJson[obj][childrenObj])
      }

      storeGlobal.$patch({stateAllLinks: arr})

      reactLinks.value = dataParseJson.react
      pythonLinks.value = dataParseJson.python
      vueLinks.value = dataParseJson.vue
      helpersAndDocsLinks.value = dataParseJson.helperAndDocs
      jsAndTsLinks.value = dataParseJson.jsAndTs
      choreLinks.value = dataParseJson.chore

      videoCursesLinks.value = dataParseJson.vueCurses
    } catch(e){
      console.log('error',e)
    }finally {
      isLoadingData.value = false
    }


  },
  deleteById:async ()=>{}
}


onMounted(()=> serviceFireBase.getListData())

import Loader from '@/components/Loader'
import {useStoreGlobal} from "@/stores/useStoreGlobal";
</script>

<template>
  <main>
<Loader v-if="isLoadingData"/>

    <div v-if="!isLoadingData">
      <div class="button-toggle" @click="handlerHideBlock1">{{ isHideBlock1 ? "-":"+"}}</div>

      <div v-if="isHideBlock1" class="d-flex justify-content-space-evenly d-flex-wrap mb-15 p-all-15">

        <div class="card-vue card-core">
          <h3 class="text-center">Vue</h3>
          <ul v-for="(item,index) in vueLinks" :key="index">
            <li><a class="color-link" target="_blank" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>


        <div class="card-core card-helpers-docs">
          <h3 class="text-center">Helpers & Docs</h3>
          <ul v-for="(item,index) in helpersAndDocsLinks" :key="index">
            <li><a target="_blank" class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>

        <div class="card-core card-js-ts">
          <h3 class="text-center">JS & TS</h3>
          <ul v-for="(item,index) in jsAndTsLinks" :key="index">
            <li><a target="_blank" class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>
      </div>

      <div class="button-toggle" @click="handlerHideBlock2">{{ isHideBlock2 ? "-":"+"}}</div>
      <div  v-if="isHideBlock2" class="d-flex justify-content-space-evenly d-flex-wrap p-all-15">
        <div class="card-react card-core">
          <h3 class="text-center">React</h3>
          <ul v-for="(item,index) in reactLinks" :key="index">
            <li><a target="_blank" class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>


        <div class="card-core card-python">
          <h3 class="text-center">Python</h3>
          <ul v-for="(item,index) in pythonLinks" :key="index">
            <li><a target="_blank" class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>

        <div class="card-core card-chore">
          <h3 class="text-center">Chore</h3>
          <ul v-for="(item,index) in choreLinks" :key="index">
            <li><a target="_blank" :href="item.link" class="color-link"> {{item.name}}</a></li>
          </ul>
        </div>
      </div>


      <div class="button-toggle" @click="handlerHideBlock3">{{ isHideBlock3 ? "-":"+"}}</div>

      <div v-if="isHideBlock3" class="d-flex justify-content-space-evenly d-flex-wrap p-all-15">

        <div class="card-video-curses card-core">
          <h3 class="text-center">Video Curses</h3>
          <ul v-for="(item,index) in videoCursesLinks" :key="index">
            <li><a target="_blank" class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>


        <div class="card-core card-slot-1">
          <h3 class="text-center">Slot 2</h3>
          <ul v-for="(item,index) in pythonLinks" :key="index">
            <li><a class="color-link" target="_blank" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>

        <div class="card-core card-slot-2">
          <h3 class="text-center">Slot 3</h3>
          <ul v-for="(item,index) in choreLinks" :key="index">
            <li><a target="_blank" class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>
      </div>
    </div>











  </main>
</template>


<style scoped>



.card-core {
  min-width: 200px;
  min-height: 200px;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
}

.card-vue {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  width: 13%;
}

.card-helpers-docs{
  background: linear-gradient(215deg, #c670ff 10%, #ffd829);
  width: 47%;

}

.card-js-ts {
  width: 28%;
  background: linear-gradient(115deg, #647eff 20%, #ffd829);
}

.card-react {
  width: 38%;
  background: linear-gradient(215deg, #2E9AFFFF 55%, #40e746);
}

.card-python {
  width: 12%;
  background: linear-gradient(215deg, #ff852e 15%, #ffd829);
}

.card-chore {
  width: 38%;
  background: linear-gradient(215deg, #ffd829 15%, #40e746);
}

.card-video-curses {
  width: 18%;
  background: linear-gradient(215deg, #12f3af 25%, #2E9AFFFF);
}

.card-slot-1 {
  width: 58%;
  background: linear-gradient(10deg, #d34d4d 5%, #2E9AFFFF);
}

.card-slot-2 {
  width: 12%;
  background: linear-gradient(120deg, #7707ee 25%, #12f3af);

}

.button-toggle {
  margin-left: 20px;
  position: relative;
  width: 30px;
  height: 30px;
  background: #8e63ad;
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.button-toggle:hover {
  cursor: pointer;
}
</style>