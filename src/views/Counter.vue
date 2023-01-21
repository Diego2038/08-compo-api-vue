<template>
  <h1>Counter</h1>
  <h3>{{ counter }}</h3>

  <button @click="counterMasUno">+1</button>
  <button @click="counterMenosUno">-1</button>
</template>

<script> 
// Nota: Los composables también son conocidos como los hooks en React (?)
import useCounter from "@/composables/useCounter";
export default {
  name: 'Counter',
  props:{},
  emits:[],
  setup(){
     const {counter, counterMasUno, counterMenosUno} = useCounter(777)

     return {
      counter,

      counterMasUno,
      counterMenosUno
     }
  }
}
</script>

<style>

</style>