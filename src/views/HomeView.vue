<script setup lang="ts">
import {onMounted,ref} from "vue";
import Card from '@/components/Card'
// import TheWelcome from '../components/TheWelcome.vue'

const vueLinks = ref([]) as any
const helpersAndDocsLinks = ref([]) as any
const jsAndTsLinks = ref([]) as any

const reactLinks = ref([]) as any
const pythonLinks = ref([]) as any
const choreLinks = ref([]) as any

const videoCursesLinks = ref([]) as any
const sourceCodeLinks = ref([]) as any
const hobbyLinks = ref([]) as any

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

      for (let obj in dataParseJson.python) {
        pythonLinks.value.push(dataParseJson.python[obj])
      }

      for (let obj in dataParseJson.react) {
        reactLinks.value.push(dataParseJson.react[obj])
      }

      for (let obj in dataParseJson.chore) {
        choreLinks.value.push(dataParseJson.chore[obj])
      }

      //
      for (let obj in dataParseJson.vue) {
        vueLinks.value.push(dataParseJson.vue[obj])
      }

      for (let obj in dataParseJson.helperAndDocs) {
        helpersAndDocsLinks.value.push(dataParseJson.helperAndDocs[obj])
      }

      for (let obj in dataParseJson.jsAndTs) {
        jsAndTsLinks.value.push(dataParseJson.jsAndTs[obj])
      }
      //

      for (let obj in dataParseJson.vueCurses) {
        videoCursesLinks.value.push(dataParseJson.vueCurses[obj])
      }

      for (let obj in dataParseJson.sourceCode) {
        sourceCodeLinks.value.push(dataParseJson.sourceCode[obj])
      }

      for (let obj in dataParseJson.hobby) {
        hobbyLinks.value.push(dataParseJson.hobby[obj])
      }

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
        <Card :payload="vueLinks" :classCard="'card-vue'" :nameCard="'Vue'"/>
        <Card :payload="helpersAndDocsLinks" :classCard="'card-helpers-docs'" :nameCard="'Helpers & Docs'"/>
        <Card :payload="jsAndTsLinks" :classCard="'card-js-ts'" :nameCard="'JS & TS'"/>
      </div>

      <div class="button-toggle" @click="handlerHideBlock2">{{ isHideBlock2 ? "-":"+"}}</div>
      <div  v-if="isHideBlock2" class="d-flex justify-content-space-evenly d-flex-wrap p-all-15">
        <Card :payload="reactLinks" :classCard="'card-react'" :nameCard="'React'"/>
        <Card :payload="pythonLinks" :classCard="'card-python'" :nameCard="'Python'"/>
        <Card :payload="choreLinks" :classCard="'card-chore'" :nameCard="'Chore'"/>
      </div>

      <div class="button-toggle" @click="handlerHideBlock3">{{ isHideBlock3 ? "-":"+"}}</div>
      <div v-if="isHideBlock3" class="d-flex justify-content-space-evenly d-flex-wrap p-all-15">
        <Card :payload="videoCursesLinks" :classCard="'card-video-curses'" :nameCard="'Video Curses'"/>
        <Card :payload="hobbyLinks" :classCard="'card-slot-1'" :nameCard="'Хобби'"/>
        <Card :payload="sourceCodeLinks" :classCard="'card-slot-2'" :nameCard="'Read Source Code'"/>
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
  background: linear-gradient(215deg, #de0cda 15%, #40e746);
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