<template>
  <h1>Counter</h1>
  <h3>{{ counter }}</h3>

  <button @click="counterMasUno">+1</button>
  <button @click="counterMenosUno">-1</button>
</template>

<script> 
// Nota: Los composables también son conocidos como los hooks en React (?)
import { ref } from 'vue'
export default {
  name: 'Counter',
  props:{},
  emits:[],
  setup(){
    const counter = ref(6)

    // const counterMasUno = () => {
    //   counter.value++
    // }
    
    // const counterMenosUno = () => {
    //   counter.value--
    // }

    return {
      counter,

      // Sólo es necesario exportar la función si se utiliza internamente en el setup
      counterMasUno: () => counter.value++ ,
      counterMenosUno: () => counter.value--,
    }
  }
}
</script>

<style>

</style>