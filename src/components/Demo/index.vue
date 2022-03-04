<template>
  我是Demo
  <hr>
  person: {{ person }}
  <hr>
  name: {{ a }}
  <hr>
  hobby: {{ hobby }}
  <hr>
  salary: {{ job.salary }}
  <hr>
  <h3 v-if="person.car"> 车子： {{ person.car }}} </h3>
  <hr>
  <button @click="a+='~'">修改name</button>
  <button @click="person.hobby[0]+='~'">修改hobby</button>
  <button @click="job.salary++">修改salary</button>
  <button @click="addCar">点击买车</button>
  <button @click="person.car.name+='~'">修改车名</button>
  <button @click="changeCarPrice">修改车价</button>
  <h2>
    当前鼠标的坐标是 x:{{ point.x }}, y: {{ point.y }}
  </h2>
</template>

<script>
  import { markRaw, onMounted, onUnmounted, reactive, toRef, toRefs } from 'vue'
  import usePoint from './hooks/usePoint'
export default {
  setup() {
    console.log('---setup---');
    const point = usePoint()
    
    let person = reactive({
      name: "caixukun",
      hobby: ['sing', 'dance', 'play basketball'],
      job: {
        salary: 2000
      }
    })

    function addCar() {
      let car = { name: 'BMW', price: 40 }
      person.car = markRaw(car)
    }

    function changeCarPrice() {
      person.car.price++
      console.log(person);
    }

    return {
      point,
      person,
      a: toRef(person, 'name'),
      ...toRefs(person),
      addCar,
      changeCarPrice
    }
  }
}
</script>

<style>

</style>