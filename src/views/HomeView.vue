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

const isLoadingData = ref(false)
const serviceFireBase = {
  getListData: async()=> {
    try {
      isLoadingData.value = true

      const URL = 'https://it-words-f02a9-default-rtdb.firebaseio.com/links.json'
      const data = await fetch(URL)
      const dataParseJson = await data.json()

      reactLinks.value = dataParseJson.react
      pythonLinks.value = dataParseJson.python
      vueLinks.value = dataParseJson.vue
      helpersAndDocsLinks.value = dataParseJson.helperAndDocs
      jsAndTsLinks.value = dataParseJson.jsAndTs
      choreLinks.value = dataParseJson.chore

      videoCursesLinks.value = dataParseJson.videoCurses
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
</script>

<template>
  <main>
<Loader v-if="isLoadingData"/>

    <div v-if="!isLoadingData">
      <div class="button-toggle" @click="handlerHideBlock1">{{ isHideBlock1 ? "-":"+"}}</div>
      <div v-if="isHideBlock1" class="d-flex justify-content-space-evenly">

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
            <li><a :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>
      </div>

      <div class="button-toggle" @click="handlerHideBlock2">{{ isHideBlock2 ? "-":"+"}}</div>
      <div  v-if="isHideBlock2" class="d-flex justify-content-space-evenly">
        <div class="card-react card-core">
          <h3 class="text-center">React</h3>
          <ul v-for="(item,index) in reactLinks" :key="index">
            <li><a class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>


        <div class="card-core card-python">
          <h3 class="text-center">Python</h3>
          <ul v-for="(item,index) in pythonLinks" :key="index">
            <li><a :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>

        <div class="card-core card-chore">
          <h3 class="text-center">Chore</h3>
          <ul v-for="(item,index) in choreLinks" :key="index">
            <li><a :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>
      </div>


      <div class="button-toggle" @click="handlerHideBlock3">{{ isHideBlock3 ? "-":"+"}}</div>

      <div v-if="isHideBlock3" class="d-flex justify-content-space-evenly">

        <div class="card-react card-core">
          <h3 class="text-center">Video Curses</h3>
          <ul v-for="(item,index) in videoCursesLinks" :key="index">
            <li><a class="color-link" :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>


        <div class="card-core card-python">
          <h3 class="text-center">Slot 2</h3>
          <ul v-for="(item,index) in pythonLinks" :key="index">
            <li><a :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>

        <div class="card-core card-chore">
          <h3 class="text-center">Slot 3</h3>
          <ul v-for="(item,index) in choreLinks" :key="index">
            <li><a :href="item.link"> {{item.name}}</a></li>
          </ul>
        </div>
      </div>
    </div>











  </main>
</template>


<style>
.card-vue {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
}


.card-core {
  min-width: 200px;
  min-height: 200px;
  border-radius: 8px;
  padding: 10px;
}
.card-helpers-docs{
  background: linear-gradient(215deg, #c670ff 10%, #ffd829);

}

.card-js-ts {
  background: linear-gradient(115deg, #ffd829 20%, #647eff);
}

.card-react {
  background: linear-gradient(215deg, #2E9AFFFF 55%, #40e746);
}

.card-python {
  background: linear-gradient(215deg, #ff852e 15%, #ffd829);
}

.card-chore {
  background: linear-gradient(215deg, #ffd829 15%, #40e746);
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