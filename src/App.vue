<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Logo from '@/components/Logo.vue'
import RoadBus from '@/components/RoadBus.vue'
import {ref} from 'vue'

const isDark = ref(false)
const handlerChangeTheme = ()=>{
  isDark.value = !isDark.value
}
</script>

<template>
<div :class="{'dark':isDark, 'sun':!isDark}">
  <div class="d-flex align-items-center justify-content-center">
    <span  class="card-vue2">Fire Progressive App</span>

    <Logo/>
    <span>
      <button @click="handlerChangeTheme">{{isDark ? 'sun':'dark'}}</button>
    </span>
  </div>

  <RoadBus style="margin-top: -50px; margin-bottom: -150px; width: 100%; height: 500px"/>
  <header>

    <div class="d-flex">
      <nav class="d-flex">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>


  </header>

  <RouterView />
</div>
</template>

<style scoped>
.sun {
  background: #ebd9ff;
}

.dark {
  background: #000;
}
.card-vue2 {
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;

}


/*header {*/
/*  line-height: 1.5;*/
/*  max-height: 100vh;*/
/*}*/

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
