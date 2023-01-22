<template>
  <h1>Buscar pokemon</h1>
  <h2>El Id del pokemon es {{ idPokemon }}</h2>
  <form @submit.prevent="onSubmit">
    <input 
      type="number" 
      placeholder="Insertar Id de pokemon"  
      v-model="idPokemon"
      ref="txtSearchId"
      > 
  </form>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'SearchPokemon',
  props:{

  },
  setup(){

    const router = useRouter()

    const idPokemon = ref(1)
    const txtSearchId = ref() // Para utilizar en referencia en alguna parte de la plantilla html
     
    // console.log(txtSearchId.value)
    onActivated( () => {
      // txtSearchId.value.focus()
      txtSearchId.value.select() 
      // console.log(txtSearchId.value)
    })

    return{
      idPokemon,
      onSubmit: () => { router.push(
        { name:'pokemon-id',
          params: { id: idPokemon.value }
        }
        )},
      txtSearchId,
    }
  }
}
</script>

<style>

</style>