<script setup>
import { ref, reactive } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
let message = ref('wdnmd')
let person = reactive({
  job: '全栈老狗',
  salary: 30
})

function changeMsg() {
  message.value = 'wdnmd' + count.value
  count.value++
}

function changeJob() {
  person.job = '专注后端'
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

<p>
  {{ message }}
</p>

<p>
  职业：{{ person.job }} <br>
  工资：{{ person.salary }}k
</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <br>
  <br>
  <button @click="changeMsg">改变Msg</button>
  <br>
  <br>
  <button @click="changeJob">改变job</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
