<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="showDemo=!showDemo">切换显示/隐藏</button> <br>
  <Demo v-if="showDemo"></Demo>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive } from 'vue'
import Demo from './components/Demo/index.vue'
let showDemo = ref(true);

let name = ref("caixukun")

let person1 = reactive({
  name: "caixukun",
  hobby: ['sing', 'dance', 'play basketball']
})
console.log(person1);

</script>

<!-- <script>
import Demo from '@/components/Demo.vue'
import { ref } from 'vue'
export default {
  components: {Demo},
  setup() {
    let showDemo = ref(true)
    return {
      showDemo
    }
  }
}
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
